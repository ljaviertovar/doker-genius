import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import { Roboto } from "@next/font/google"

const ubuntu = Roboto({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
})

import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider enableColorScheme attribute='class'>
			<div className={ubuntu.className}>
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	)
}
