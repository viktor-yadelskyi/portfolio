'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/hooks/useSectionInView';

export default function Projects() {
	const { ref } = useSectionInView('Projects');

	return (
		<section ref={ref} id="projects" className="scroll-mt-28 mb-28">
			<SectionHeading>Projects</SectionHeading>
			<div>
				{projectsData.map((project) => (
					<React.Fragment key={project.title}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
