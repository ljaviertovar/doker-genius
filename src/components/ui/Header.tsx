import React from "react"
// import ThemeButton from "./ThemeButton"

export default function Header() {
	return (
		<header className='text-center p-4 mb-8'>
			{/* <ThemeButton /> */}
			<h1 className='text-5xl font-bold mb-0 font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600'>
				DokerGenius
			</h1>
			<h2 className='text-2xl  text-custom-dark-50 '>Dockerfile validator and generator</h2>
		</header>
	)
}
