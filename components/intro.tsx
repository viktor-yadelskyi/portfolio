'use client';

import { motion } from 'framer-motion';

export default function Intro() {
	return (
		<section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
			<motion.p
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
			>
				<span className="font-bold">{`Hello, I'm Viktor.`}</span> {`I'm a`}{' '}
				<span className="font-bold">software engineer</span> with{' '}
				<span className="font-bold">3 years</span> of experience. I enjoy
				building <span className="italic">sites & apps</span>. My focus is{' '}
				<span className="underline">React</span>.
			</motion.p>
		</section>
	);
}
