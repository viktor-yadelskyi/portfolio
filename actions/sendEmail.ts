'use server';

import React from 'react';
import { Resend } from 'resend';
import { validateString, getErrorMessage } from '@/lib/helpers';
import ContactFormEmail from '@/email/contact-form-email';

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

	try {
		await resend.emails.send({
			from: 'Contact portfolio email <onboarding@resend.dev>',
			to: 'yadelskyiviktor@gmail.com',
			subject: 'Message from contact form portfolio',
			reply_to: senderEmail as string,
			react: React.createElement(ContactFormEmail, {
				message: message as string,
				senderEmail: senderEmail as string,
			}),
		});
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		};
	}
};
