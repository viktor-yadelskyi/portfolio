'use client';

import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/hooks/useSectionInView';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';

export default function Contact() {
	const { ref } = useSectionInView('Contact');

	const sendFormDataHandler = async (formData: FormData) => {
		const { error } = await sendEmail(formData);

		if (error) {
			alert(error);
			return;
		}

		alert('Email sent successfully!');
	};

	return (
		<motion.section
			ref={ref}
			id="contact"
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
		>
			<SectionHeading>Contact me</SectionHeading>

			<p className="text-gray-700 -mt-6 dark:text-white/80">
				Please contact me directly at{' '}
				<a className="underline" href="mailto:yadelskyiviktor@gmail.com">
					yadelskyiviktor@gmail.com
				</a>{' '}
				or through this form.
			</p>

			<form
				className="flex flex-col mt-10 dark:text-black/80"
				action={sendFormDataHandler}
			>
				<input
					className="h-14 rounded-lg borderBlack p-4 focus:outline-gray-900 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all "
					name="senderEmail"
					type="email"
					placeholder="Your email"
					maxLength={50}
					required
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 focus:outline-gray-900 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all resize-none"
					name="senderMessage"
					placeholder="Your message (max length 500)"
					maxLength={500}
					required
				/>
				<SubmitBtn />
			</form>
		</motion.section>
	);
}
