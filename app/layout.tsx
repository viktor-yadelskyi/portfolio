import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer';
import ThemeSwitcher from '@/components/theme-switcher';
import AppContextProvider from '@/context/app-provider-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Viktor Yadelskyi | Portfolio',
	description: 'Viktor Yadelskyi personal portfolio',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 revative dark:bg-gray-900 dark:text-gray-50 dark-text-opacity-90`}
			>
				<div className="bg-[#fbe2e3] relative top-[-6rem] -z-10 right-[11rem] h-[31.25rem] max-w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
				<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] max-w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />

				<AppContextProvider>
					<Header />
					{children}
					<Footer />
					<ThemeSwitcher />
				</AppContextProvider>
			</body>
		</html>
	);
}
