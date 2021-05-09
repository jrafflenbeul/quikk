export const sanitizePhone = (phone: string) => phone.replace(/ /g, "");
export const getMailToHref = (mail: string) => `mailto:${mail}`;
export const getTelHref = (phone: string) => `tel:${sanitizePhone(phone)}`;
