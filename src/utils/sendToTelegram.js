/**
 * Send contact form data to Telegram
 * @param {Object} formData - Form data object
 * @returns {Promise} - Telegram API response
 */
export const sendToTelegram = async (formData) => {
    const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
        console.error('Telegram credentials not found in environment variables');
        console.log('Bot Token exists:', !!botToken);
        console.log('Chat ID exists:', !!chatId);
        throw new Error('Telegram configuration missing');
    }

    // Format the message
    const message = `
🔔 *New Contact Form Submission* 🔔

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
📦 *Package:* ${formData.package}

💬 *Message:*
${formData.message}

---
📅 *Date:* ${new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'short'
    })}
🌐 *Source:* iStore Tunisia Proposal
  `.trim();

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'Markdown',
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.description || 'Failed to send message to Telegram');
        }

        return data;
    } catch (error) {
        console.error('Error sending to Telegram:', error);
        throw error;
    }
};

/**
 * Validate Telegram configuration
 * @returns {boolean} - True if configuration is valid
 */
export const validateTelegramConfig = () => {
    const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;

    return !!(botToken && chatId);
};
