export default async function handler(req, res) {
    // Only allow secure POST requests containing data
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // Grab the private Resend key you saved in your Vercel Dashboard settings
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
        console.error("Missing RESEND_API_KEY environment variable");
        return res.status(500).json({ error: 'Mail server configuration missing' });
    }

    try {
        const { customerName, customerPhone, deviceModel, repairType, estimatedPrice, requestedDate, requestedTime, additionalNotes } = req.body;

        // Build a highly structured HTML email format
        const emailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h2 style="color: #0ea5e9; margin-bottom: 20px;">🛠️ New Repair Booking Received!</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 140px;">Customer Name:</td>
                        <td style="padding: 8px 0; color: #0f172a;">${customerName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone Number:</td>
                        <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${customerPhone}">${customerPhone}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #475569;">Device Model:</td>
                        <td style="padding: 8px 0; color: #0f172a;">${deviceModel}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #475569;">Repair Type:</td>
                        <td style="padding: 8px 0; color: #0f172a;">${repairType}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #475569;">Est. Price:</td>
                        <td style="padding: 8px 0; color: #10b981; font-weight: bold;">£${estimatedPrice}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #475569;">Requested Slot:</td>
                        <td style="padding: 8px 0; color: #0f172a;">${requestedDate} (${requestedTime})</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #475569; vertical-align: top;">Notes:</td>
                        <td style="padding: 8px 0; color: #64748b; font-style: italic;">${additionalNotes || 'No notes provided.'}</td>
                    </tr>
                </table>
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;">
                <p style="font-size: 12px; color: #94a3b8; text-align: center;">Sent instantly via your Vercel Dashboard engine.</p>
            </div>
        `;

        // Send the email using the Resend API
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'onboarding@resend.dev', // Default free tier sender address
                to: 'YOUR_PERSONAL_EMAIL@GMAIL.COM', // <-- CHANGE THIS to your real email address!
                subject: `🚨 New Booking: ${customerName} - ${deviceModel}`,
                html: emailHtml
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Resend delivery dispatch failure');
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Email processing error:', error);
        return res.status(500).json({ error: 'Failed to process email dispatch' });
    }
}
