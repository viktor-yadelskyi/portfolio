import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import betterUkraineImg from '@/public/betterurkaine.png';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const;

export const experiencesData = [
	{
		title: "Ternopil State Ivan Pul'uj Technical University",
		location: 'Ternopil',
		description: "Graduated with Master's degree in Computer Science",
		icon: React.createElement(LuGraduationCap),
		date: '2019',
	},
	{
		title: 'Placeholder jobOne',
		location: 'Freelance',
		description: 'Created first commertial project',
		icon: React.createElement(CgWorkAlt),
		date: 'Jul 2021 - Oct 2021',
	},
	{
		title: 'Student && trainee Software Engineer',
		location: 'EPAM Systems',
		description:
			'Successfully entered and completed the laboratory and took part in the first full-fledged large project',
		icon: React.createElement(FaReact),
		date: '2022 - present',
	},
] as const;

//TODO: replace placeholder IMG

export const projectsData = [
	{
		title: 'Placeholder',
		description:
			'I took part in a short-term commercial project in the e-commerce domain. My responsibilities included creating markup and writing front-end logic by using React.',
		tags: ['React', 'TypeScript', 'Redux'],
		imageUrl: rmtdevImg,
	},
	{
		title: 'Better Ukraine',
		description: 'Placeholder2',
		tags: ['React', 'Redux', 'SCSS', 'TypeScript', 'Redux Saga', 'MUI'],
		imageUrl: betterUkraineImg,
	},
	{
		title: 'Placeholder3',
		description: 'Placeholder3',
		tags: ['React', 'TypeScript', 'Redux'],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const skillsData = [
	'HTML',
	'SCSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Git',
	'Redux',
] as const;
