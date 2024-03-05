'use server';

export const sendEmail = async (formData: FormData) => {
	formData.get('senderEmail');
	formData.get('senderMessage');
};
