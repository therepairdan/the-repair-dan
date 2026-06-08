export default async function handler(req, res) {
    // Only allow POST requests containing data payload
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { customerName, customerPhone, deviceModel, repairType, estimatedPrice, requestedDate, requestedTime, additionalNotes } = req.body;

        // Build a professional text format box for your notification feed
        const messageText = `
🔔 **New Repair Booking Received!**

👤 **Customer:** ${customerName}
📞 **Phone:** ${customerPhone}

🛠️ **Device:** ${deviceModel}
⚙️ **Repair:** ${repairType}
💰 **Est. Price:** £${estimatedPrice}

📅 **Requested Slot:** ${requestedDate} [${requestedTime}]
📝 **Notes:** ${additionalNotes || 'None'}
        `.trim();

        // --- PIPELINE A: DISCORD ALERTS ---
        if (process.env.DISCORD_WEBHOOK_URL) {
            await fetch(process.env.DISCORD_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: messageText })
            });
        }

        // --- PIPELINE B: TELEGRAM BOT ALERTS ---
        if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
            const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
            await fetch(telegramUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: process.env.TELEGRAM_CHAT_ID,
                    text: messageText,
                    parse_mode: 'Markdown'
                })
            });
        }

        // Send a clean success back to the user's browser wizard
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Notification system failure:', error);
        return res.status(500).json({ error: 'Failed to send notification' });
    }
}