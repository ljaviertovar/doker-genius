import Head from "next/head"

import Footer from "../ui/Footer"
import Header from "../ui/Header"

interface Props {
	children: React.ReactNode | React.ReactNode[]
	title: string
	pageDescription: string
	imageUrl?: string
}

export default function MainLayout({ children, imageUrl, pageDescription, title }: Props) {
	return (
		<>
			<Head>
				<title>{title}</title>

				<meta name='description' content={pageDescription} />

				<meta name='og:title' content={title} />
				<meta name='og:description' content={pageDescription} />

				{imageUrl && <meta name='og:image' content={imageUrl} />}
			</Head>

			<Header />

			<main className='w-10/12 m-auto'>{children}</main>

			<Footer />
		</>
	)
}
