// WhatsApp integration utility
const WHATSAPP_NUMBER = '27630206053'; // TLS Commercial Parts WhatsApp number
const WHATSAPP_LINK = 'https://wa.me/message/HBNN47EW2DUXP1'; // TLS Commercial Parts custom WhatsApp link

export const sendWhatsAppOrder = (product) => {
    const message = `Hi! I'm interested in the following product:\n\n*Product:* ${product.name}\n*Category:* ${product.category}\n\nPlease confirm availability and provide pricing details.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
};

export const getWhatsAppChatLink = () => {
    return WHATSAPP_LINK;
};
