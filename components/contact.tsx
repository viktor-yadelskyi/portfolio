'use client';

import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/hooks/useSectionInView';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
	const { ref } = useSectionInView('Contact');

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

			<p className="text-gray-700 -mt-6">
				Please contact me directly at{' '}
				<a className="underline" href="mailto:yadelskyiviktor@gmail.com">
					yadelskyiviktor@gmail.com
				</a>{' '}
				or trough this form.
			</p>

			<form
				className="flex flex-col mt-10"
				action={async (formData) => {
					await sendEmail(formData);
				}}
			>
				<input
					className="h-14 rounded-lg borderBlack p-4 focus:outline-gray-900"
					name="senderEmail"
					type="email"
					placeholder="Your email"
					maxLength={50}
					required
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 focus:outline-gray-900"
					name="senderMessage"
					placeholder="Your message (max length 500)"
					maxLength={500}
					required
				/>
				<button
					type="submit"
					className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:bg-gray-950 focus:scale-110 hover:scale-110 active:scale-105"
				>
					Contact{' '}
					<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
				</button>
			</form>
		</motion.section>
	);
}
