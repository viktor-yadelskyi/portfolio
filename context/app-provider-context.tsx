import ActiveSectionContextProvider from "./active-section-context";
import ThemeContextProvider from "./theme-context";

interface AppContextProviderProps {
	children: React.ReactNode;
}

export default function AppContextProvider({
	children,
}: AppContextProviderProps) {
	return (
		<ThemeContextProvider>
			<ActiveSectionContextProvider>
				{children}
			</ActiveSectionContextProvider>
		</ThemeContextProvider>
	);
}
