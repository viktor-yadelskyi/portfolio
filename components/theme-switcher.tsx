'use client';

import { useState } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';

type Theme = 'light' | 'dark';

export default function ThemeSwitcher() {
	const [theme, setTheme] = useState<Theme>('light');

	const toggleThemeHandler = () => {
		if (theme === 'light') {
			return setTheme('dark');
		}
		if (theme === 'dark') {
			setTheme('light');
		}
	};

	return (
		<button
			className="fixed flex items-center justify-center bg-gray-950 bg-opacity-80 w-[3rem] h-[3rem] bottom-5 right-5 backdrop-blur-[0.5rem] border border-gray-950 border-opacity-40 shadow-2xl rounded-full hover:scale-[1.15] active:scale-105 transition-all shadow-2xl"
			onClick={toggleThemeHandler}
		>
			{theme === 'light' ? (
				<BsMoonStars color="white" />
			) : (
				<BsSun color="white" />
			)}
		</button>
	);
}
