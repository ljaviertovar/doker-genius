import React from "react"
// import ThemeButton from "./ThemeButton"

export default function Header() {
	return (
		<header className='text-center p-4 mb-8'>
			{/* <ThemeButton /> */}
			<h1 className='text-4xl font-bold mb-0 font-mono'>DokerGenius</h1>
			<h2 className='text-2xl font-semibold text-custom-dark-50 '>Dockerfile validator and generator</h2>
		</header>
	)
}
