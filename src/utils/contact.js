export const phoneNumber = '6285161705767'; 
const message = 'Halo BuahKuy!';
const encodedMessage = encodeURIComponent(message);
export const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;