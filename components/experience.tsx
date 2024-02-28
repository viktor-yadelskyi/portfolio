'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/hooks/useSectionInView';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';

export default function Experience() {
	const { ref, inView } = useSectionInView('Experience');

	return (
		<section
			ref={ref}
			id="experience"
			className="w-full scroll-mt-28 mb-28 sm:mb-40"
		>
			<SectionHeading>My Experience</SectionHeading>

			<VerticalTimeline lineColor="#e5e7eb" animate={true}>
				{experiencesData.map((item) => (
					<VerticalTimelineElement
						key={item.title}
						visible={inView}
						contentStyle={{
							background: '#f3f4f6',
							boxShadow: 'none',
							border: '1px solid rgba(0, 0 ,0, 0.05)',
							textAlign: 'left',
							padding: '1.3rem 2rem',
						}}
						contentArrowStyle={{
							borderRight: '0.4rem solid #9ca3af',
						}}
						date={item.date}
						icon={item.icon}
						iconStyle={{
							background: 'white',
							fontSize: '1.5rem',
						}}
					>
						<h3 className="font-semibold capitalize">{item.title}</h3>
						<p className="!mt-0 normal">{item.location}</p>
						<p className="!mt-1 !font-normal text-gray-700">
							{item.description}
						</p>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</section>
	);
}
