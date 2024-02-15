import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';

export default function Projects() {
	return (
		<section id="projects" className='scroll-mt-28'>
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
