import { useEffect } from 'react';
import type { SectionName } from '@/lib/types';

import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';

export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
	const { ref, inView } = useInView({
		threshold,
	});

	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(sectionName);
		}
	}, [inView, timeOfLastClick, setActiveSection, sectionName]);

	return { ref, inView };
}
