// WhatsApp integration utility
const WHATSAPP_NUMBER = '+27719794438'; // TLS Commercial Parts WhatsApp number

export const sendWhatsAppOrder = (product) => {
    const message = `Hi! I'm interested in ordering the following product:\n\n*Product:* ${product.name}\n*Category:* ${product.category}\n*Price:* ${product.price}\n*Condition:* ${product.condition}\n\nPlease confirm availability and provide payment details.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
};

export const getWhatsAppChatLink = () => {
    return `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`;
};
