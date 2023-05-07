import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ThemeButton() {
	const [mounted, setMounted] = useState(false)

	const { systemTheme, theme, setTheme } = useTheme()
	const currentTheme = theme === "system" ? systemTheme : theme

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<button type='button' onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}>
			{currentTheme === "dark" ? (
				<FontAwesomeIcon icon={faSun} className='w-4 h-4 text-gray-400' />
			) : (
				<FontAwesomeIcon icon={faMoon} className='w-4 h-4 text-blue-500' />
			)}
		</button>
	)
}
