'use client';
import { useState, useEffect, createContext, useContext } from 'react';

type Theme = 'light' | 'dark';
type ThemeContextType = {
	theme: Theme;
	toggleTheme: () => void;
};

interface ThemeContextProviderProps {
	children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
	children,
}: ThemeContextProviderProps) {
	const [theme, setTheme] = useState<Theme>('light');

	const toggleTheme = () => {
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
			document.documentElement.classList.add('dark');
			return;
		}

		if (!localTheme) {
			window.localStorage.setItem('theme', 'light');
			return;
		}
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);

	if (context === null) {
		throw new Error('useTheme must be used within a ThemeContextProvider');
	}
	return context;
}
