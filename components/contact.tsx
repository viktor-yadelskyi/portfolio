'use client';

import SectionHeading from './section-heading';
import { useSectionInView } from '@/hooks/useSectionInView';

export default function Contact() {
	const { ref } = useSectionInView('Contact');
	return (
		<section ref={ref} id="contact">
			<SectionHeading>Contact</SectionHeading>
		</section>
	);
}
