import MainLayout from "@/components/layouts/MainLayout"
import useDockerfileGenerator from "../hooks/useDockerfileGenerator"
import { dockerfilePlaceholder } from "@/data/placeholders"
import CodeDockerFile from "@/components/ui/CodeDockerFile"

export default function HomePage() {
	const { generate, generating, error, dockerfile } = useDockerfileGenerator()

	const handleSubmit = (ev: React.SyntheticEvent) => {
		ev.preventDefault()
		console.log(ev.target)
		const target = ev.target as typeof ev.target & {
			prompt: { value: string }
		}
		generate(target.prompt.value)
	}

	return (
		<MainLayout title={"Doker Genius"} pageDescription={"Dockerfiles Generator"}>
			<div className='flex flex-col items-center justify-center h-screen'>
				<h1 className='text-4xl font-bold mb-4'>Doker Genius</h1>

				<div className='flex gap-6 w-full'>
					<div className='w-2/6'>
						<form onSubmit={handleSubmit}>
							<label className='text-lg font-semibold mb-2'>Enter the instructions for your Dockerfile:</label>

							{/* <textarea
					className={`appearance-none border-0 rounded-lg w-full py-2 px-3 bg-custom-gray-bg dark:bg-custom-dark-gray text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline ${
						isThemeDark ? "placeholder-dark" : ""
					}`} */}
							<textarea
								className={`appearance-none border-0 rounded-lg w-full py-2 px-3 bg-custom-gray-bg dark:bg-custom-dark-gray text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline`}
								id='inputText'
								rows={3}
								placeholder='e.g. Write a dockerfile to dockerize a React app using npm start.'
								// value={prompt}
								name='prompt'
								// onChange={ev => setPrompt(ev.target.value)}
								// onKeyDown={ev => {
								// 	if (ev.key === "Enter") {
								// 		console.log(ev.target)
								// 		handleSubmit(ev)
								// 	}
								// }}
								required
							/>

							{error && <div>Error</div>}
							<button
								className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg'
								type='submit'
								disabled={generating}
							>
								{generating ? "Generating..." : "Generate Dockerfile"}
							</button>
						</form>
					</div>

					<div className='w-4/6'>
						<CodeDockerFile textCode={(dockerfile as string) ?? dockerfilePlaceholder} />
					</div>
				</div>
			</div>
		</MainLayout>
	)
}
