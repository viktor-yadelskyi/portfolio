'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from '@/hooks/useSectionInView';

export default function Intro() {
	const { ref } = useSectionInView('Home');

	return (
		<section
			ref={ref}
			id="home"
			className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
		>
			<motion.h1
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
			</motion.h1>

			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
			>
				<Link
					href="#contact"
					className="group flex items-center bg-gray-900 text-white px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-white/20"
				>
					Contact me here{' '}
					<BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
				</Link>

				<a
					className="group flex items-center bg-white px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
					href="/Viktor_Yadelskyi.pdf"
					download
				>
					Download CV{' '}
					<HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
				</a>

				<a
					className="flex items-center bg-white p-4 gap-2 text-gray-700 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://www.linkedin.com/in/viktor-yadelskyi/"
					target="_blank"
				>
					<BsLinkedin />
				</a>

				<a
					className="flex items-center bg-white p-4 gap-2 text-gray-700  text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://github.com/viktor-yadelskyi"
					target="_blank"
				>
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	);
}
