import MainLayout from "@/components/layouts/MainLayout"
import useDockerfileGenerator from "../hooks/useDockerfileGenerator"
import { dockerfilePlaceholder, inputPlaceholder } from "@/data/placeholders"
import CodeDockerFile from "@/components/ui/CodeDockerFile"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy } from "@fortawesome/free-solid-svg-icons"
import GenerateButton from "@/components/ui/GenerateButton"

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
			<div className='w-full mb-12 text-center'>
				<h1 className='text-4xl font-bold mb-2'>Doker Genius</h1>
				<h2 className='text-2xl font-semibold text-custom-dark-50'>Dockerfile validator and generator</h2>
			</div>
			<div className='flex gap-6 w-full'>
				<div className='w-2/6 dark:bg-custom-dark-900 p-4 rounded-lg border border-custom-dark-800'>
					<form onSubmit={handleSubmit}>
						<label className='text-lg text-custom-dark-50'>Enter the instructions for your Dockerfile:</label>
						<textarea
							className={`border border-custom-dark-800 appearance-none rounded-lg w-full p-4 bg-custom-gray-bg dark:bg-custom-dark-950 text-gray-700 dark:text-custom-dark-50 leading-tight mb-4 mt-2`}
							rows={6}
							placeholder={inputPlaceholder}
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

						<GenerateButton generating={generating} />
					</form>
				</div>

				<div className='w-4/6 dark:bg-custom-dark-900 p-4 rounded-lg border border-custom-dark-800 relative'>
					<div className='absolute right-8 top-8'>
						<button
							type='button'
							title='Copy'
							className='dark:bg-custom-dark-950 border border-custom-dark-50 hover:border-white text-custom-dark-50 hover:text-white font-semibold py-2 px-4 rounded-lg'
						>
							<FontAwesomeIcon icon={faCopy} />
						</button>
					</div>
					<CodeDockerFile textCode={(dockerfile as string) ?? dockerfilePlaceholder} />
				</div>
			</div>
		</MainLayout>
	)
}
