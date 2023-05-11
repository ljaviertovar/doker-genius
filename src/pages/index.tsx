import { useState } from "react"

import MainLayout from "@/components/layouts/MainLayout"
import CodeDockerFile from "@/components/dockerComponents/CodeDockerFile"
import GenerateButton from "@/components/ui/GenerateButton"
import CopyButton from "@/components/ui/CopyButton"
import CreateButton from "@/components/ui/CreateButton"

import useDockerfileGenerator from "../hooks/useDockerfileGenerator"

import { dockerfilePlaceholder, inputPlaceholder } from "@/data/placeholders"
import HistoryList from "@/components/HistoryList"

export default function HomePage() {
	const [prompt, setPrompt] = useState("")

	const { generate, generating, error, dockerfile } = useDockerfileGenerator()

	const handleSubmit = (ev: React.SyntheticEvent) => {
		ev.preventDefault()
		generate(prompt)
	}

	const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
		const value = ev.target?.value
		setPrompt(value)
	}

	return (
		<MainLayout title={"Doker Genius"} pageDescription={"Dockerfiles Generator"}>
			<div className='flex gap-6 w-full'>
				<section className='w-2/6'>
					<div className='p-4 rounded-md  dark:bg-custom-dark-900 border border-custom-dark-800 h-fit mb-6'>
						<form onSubmit={handleSubmit}>
							<label className='text-md text-left text-custom-dark-50 block mb-2' htmlFor='prompt'>
								Enter the prompt for your Dockerfile:
							</label>

							<textarea
								className={`text-md border border-custom-dark-800 appearance-none rounded-md w-full p-4 bg-custom-gray-bg dark:bg-custom-dark-950 text-gray-700 dark:text-custom-dark-50 leading-tight mb-2 mt-2`}
								onChange={handleChange}
								rows={6}
								placeholder={inputPlaceholder}
								name='prompt'
								value={prompt}
								required
							/>

							{error && <div>Error</div>}

							<div className='flex justify-between items-center'>
								<CreateButton />
								<span className='text-sm'>Or</span>
								<GenerateButton generating={generating} />
							</div>
						</form>
					</div>
					<HistoryList setPrompt={setPrompt} />
				</section>

				<section className='w-4/6 dark:bg-custom-dark-900 p-4 rounded-md border border-custom-dark-800 relative h-fit'>
					<div className='absolute right-8 top-8'>
						<CopyButton textCode={(dockerfile as string) ?? dockerfilePlaceholder} />
					</div>
					<CodeDockerFile textCode={(dockerfile as string) ?? dockerfilePlaceholder} />
				</section>
			</div>
		</MainLayout>
	)
}
