'use client';


import { useTheme } from '@/context/theme-context';
import { BsMoonStars, BsSun } from 'react-icons/bs';


export default function ThemeSwitcher() {
	const {theme, toggleTheme} = useTheme();

	return (
		<button
			className="fixed flex items-center justify-center bg-gray-950 bg-opacity-80 w-[3rem] h-[3rem] bottom-5 right-5 backdrop-blur-[0.5rem] border border-gray-950 border-opacity-40 shadow-2xl rounded-full hover:scale-[1.15] active:scale-105 transition-all shadow-2xl dark:bg-white dark:border-white transition-all"
			onClick={toggleTheme}
		>
			{theme === 'light' ? (
				<BsMoonStars color="white" />
			) : (
				<BsSun color="black" />
			)}
		</button>
	);
}
