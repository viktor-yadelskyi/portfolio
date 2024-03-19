'use client';

import { useState, useEffect } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';

type Theme = 'light' | 'dark';

export default function ThemeSwitcher() {
	const [theme, setTheme] = useState<Theme>('light');

	const toggleThemeHandler = () => {
		if (theme === 'light') {
			setTheme('dark');

			window.localStorage.setItem('theme', 'dark');
			document.documentElement.classList.add('dark');
			return;
		}

		if (theme === 'dark') {
			setTheme('light');

			window.localStorage.setItem('theme', 'light');
			document.documentElement.classList.remove('dark');
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme') as Theme | null;

		if (localTheme) {
			setTheme(localTheme);
			if (localTheme === 'dark') {
				document.documentElement.classList.add('dark');
			}
			return;
		}
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');

			window.localStorage.setItem('theme', 'dark');
			return;
		}

		if (window.matchMedia('(prefers-color-scheme: light)').matches) {
			setTheme('light');

			document.documentElement.classList.remove('dark');
			window.localStorage.setItem('theme', 'light');
		}
	}, []);

	return (
		<button
			className="fixed flex items-center justify-center bg-gray-950 bg-opacity-80 w-[3rem] h-[3rem] bottom-5 right-5 backdrop-blur-[0.5rem] border border-gray-950 border-opacity-40 shadow-2xl rounded-full hover:scale-[1.15] active:scale-105 transition-all shadow-2xl dark:bg-white dark:border-white transition-all"
			onClick={toggleThemeHandler}
		>
			{theme === 'light' ? (
				<BsMoonStars color="white" />
			) : (
				<BsSun color="black" />
			)}
		</button>
	);
}
