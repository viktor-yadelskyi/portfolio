"use client";

import SectionHeading from './section-heading';
import { motion } from 'framer-motion';


export default function About() {
	return (
		<motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				I have master degree in computer science and more than three years of
				web development experience. {`I'm`} experienced in building and
				maintaining responsive websites. I possess proficient knowledge on main
				frontend technologies: JavaScript, React, React Hooks, Redux; Also I
				know how to work with: CSS preprocessors (SASS/ LESS),Bootstrap,FlexBox,
				Grid, Ajax, npm/yarn, webpack, and Git. For all of my works, I have
				maintained one common thing, i.e, cleanness.
			</p>
			<p>
				My code is always well structured so that any child can easily follow
				along with it. Finally, I try to think of the targeted audience and code
				accordingly by fully understanding the flow and logic.
			</p>
		</motion.section>
	);
}
