'use client';

import SectionHeading from './section-heading';
import { useSectionInView } from '@/hooks/useSectionInView';

export default function Experience() {
	const { ref } = useSectionInView('Experience');
	return (
		<section ref={ref} id="experience">
			<SectionHeading>My Experience</SectionHeading>
		</section>
	);
}
