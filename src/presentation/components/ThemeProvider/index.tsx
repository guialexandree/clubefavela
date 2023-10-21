import React from 'react'
import { PaperProvider } from 'react-native-paper'

type ThemeProviderProps = {
	children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	return (
		<PaperProvider>
			{children}
		</PaperProvider>
	)
}
