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
		title: 'Placeholder',
		location: 'Placeholder',
		description: 'Placeholder smt about school',
		icon: React.createElement(LuGraduationCap),
		date: '2019',
	},
	{
		title: 'Placeholder',
		location: 'Placeholder',
		description: 'Placeholder',
		icon: React.createElement(CgWorkAlt),
		date: '2019 - 2021',
	},
	{
		title: 'Placeholder',
		location: 'Placeholder',
		description: 'Placeholder',
		icon: React.createElement(FaReact),
		date: '2021 - present',
	},
] as const;

//TODO: replace placeholder IMG

export const projectsData = [
	{
		title: 'Placeholder',
		description: 'Placeholder',
		tags: ['React', 'TypeScript', 'Redux'],
		imageUrl: rmtdevImg,
	},
	{
		title: 'Better Ukraine',
		description: 'Placeholder',
		tags: ['React', 'Redux', 'SCSS', 'TypeScript', 'Redux Saga', 'MUI'],
		imageUrl: betterUkraineImg,
	},
	{
		title: 'Placeholder',
		description: 'Placeholder',
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
