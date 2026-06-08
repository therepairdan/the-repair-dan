export default async function handler(req, res) {
    // Enable CORS headers so your front-end can talk to your back-end seamlessly
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
        return res.status(500).json({ error: 'Missing RESEND_API_KEY inside Vercel Environment Variables.' });
    }

    try {
        const { customerName, customerPhone, deviceModel, repairType, estimatedPrice, requestedDate, requestedTime, additionalNotes } = req.body;

        const emailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h2 style="color: #0ea5e9; margin-bottom: 20px;">🛠️ New Repair Booking Received!</h2>
                <p><strong>Customer Name:</strong> ${customerName}</p>
                <p><strong>Phone Number:</strong> ${customerPhone}</p>
                <p><strong>Device Model:</strong> ${deviceModel}</p>
                <p><strong>Repair Type:</strong> ${repairType}</p>
                <p><strong>Est. Price:</strong> £${estimatedPrice}</p>
                <p><strong>Requested Slot:</strong> ${requestedDate} (${requestedTime})</p>
                <p><strong>Notes:</strong> ${additionalNotes || 'None'}</p>
            </div>
        `;

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'onboarding@resend.dev', 
                to: 'therepairdan42@gmail.com', // <-- DOUBLE CHECK THIS IS YOUR REAL EMAIL!
                subject: `🚨 New Booking: ${customerName}`,
                html: emailHtml
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({ error: data.message || 'Resend error response' });
        }

        return res.status(200).json({ success: true, data });
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Internal processing error' });
    }
}
