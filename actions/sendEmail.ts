'use server';

import { Resend } from 'resend';
import { validateString, getErrorMessage } from '@/lib/helpers';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	const senderEmail = formData.get('senderEmail');
	const message = formData.get('senderMessage');

	if (!validateString(senderEmail, 50)) {
		return {
			error: 'Invalid sender adress',
		};
	}

	if (!validateString(message, 500)) {
		return {
			error: 'Invalid sender message',
		};
	}

	// TODO: replace hardcoded elements
	try {
		await resend.emails.send({
			from: 'Contact email <onboarding@resend.dev>',
			to: 'yadelskyiviktor@gmail.com',
			subject: 'Message from contact form portfolio',
			reply_to: senderEmail as string,
			text: message as string,
		});
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		}
	}
};
