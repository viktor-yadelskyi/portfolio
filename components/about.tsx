'use client';

import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/useSectionInView';

export default function About() {
	const { ref } = useSectionInView('About', 0.85);

	return (
		<motion.section
			id="about"
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				I have a {`master's`} degree in computer science and more than three
				years of web development experience. {`I'm`} experienced in building and
				maintaining responsive websites. I possess proficient knowledge of main
				frontend technologies: JavaScript, React, React Hooks, Redux; Also I
				know how to work with: CSS preprocessors (SASS/ LESS),Bootstrap,FlexBox,
				Grid, Ajax, npm/yarn, webpack, and Git.
			</p>
			<p>
				For all of my works, I have maintained one common thing, i.e, cleanness.
				My code is always well structured so that any child can easily follow
				along with it. Finally, I try to think of the target audience and code
				accordingly by fully understanding the flow and logic.
			</p>
		</motion.section>
	);
}
