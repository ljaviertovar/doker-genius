// import BaseImageSelection from "@/components/step1/BaseImageSelection"
// import ToolDependecies from "@/components/step2/ToolDependecies"
// import { useState } from "react"
// import EnvironmentConfig from "../components/step3/EnvironmentConfig"
// import Execution from "@/components/step4/Execution"
// import Customization from "@/components/step5/Customization"
// import Preview from "@/components/step6/Preview"
// import Generation from "@/components/step7/Generation"

// const steps = [
// 	{
// 		id: 1,
// 		name: "Selecciona la imagen base",
// 		component: <BaseImageSelection />,
// 	},
// 	{
// 		id: 2,
// 		name: "Selección de herramientas y dependencias",
// 		component: <ToolDependecies />,
// 	},
// 	{
// 		id: 3,
// 		name: "Configuración del entorno",
// 		component: <EnvironmentConfig />,
// 	},
// 	{
// 		id: 4,
// 		name: "Comandos de inicio",
// 		component: <Execution />,
// 	},
// 	{
// 		id: 5,
// 		name: "Customizacion",
// 		component: <Customization />,
// 	},
// 	{
// 		id: 6,
// 		name: "Preview",
// 		component: <Preview />,
// 	},
// 	{
// 		id: 7,
// 		name: "Generation",
// 		component: <Generation />,
// 	},
// ]

// export default function HomePage() {
// 	const [currentStep, setCurrentStep] = useState(1)

// 	const handleNext = () => {
// 		setCurrentStep(currentStep + 1)
// 	}

// 	const handlePrevious = () => {
// 		setCurrentStep(currentStep - 1)
// 	}

// 	const handleReset = () => {
// 		setCurrentStep(1)
// 	}

// 	const currentStepObj = steps.find(step => step.id === currentStep)

// 	return (
// 		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
// 			<div className='flex flex-col items-center justify-center h-screen'>
// 				{/* Título de la página */}
// 				<h1 className='text-3xl font-bold mb-8'>Generador de Dockerfile</h1>
// 				{/* Descripción de la página */}
// 				<p className='text-lg text-center mb-16'>
// 					Esta aplicación te ayudará a generar un archivo Dockerfile paso a paso para tus aplicaciones.
// 				</p>
// 				{/* Botón para comenzar */}
// 				<button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>Comenzar</button>
// 			</div>
// 		</main>

// 		// <div className='flex flex-col items-center'>
// 		// 	<h1 className='text-2xl font-bold mt-8'>{currentStepObj.name}</h1>
// 		// 	<div className='mt-8 w-3/4'>{currentStepObj.component}</div>
// 		// 	<div className='flex mt-8'>
// 		// 		{currentStep > 1 && (
// 		// 			<button
// 		// 				className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
// 		// 				onClick={handlePrevious}
// 		// 			>
// 		// 				Anterior
// 		// 			</button>
// 		// 		)}
// 		// 		{currentStep < steps.length && (
// 		// 			<button
// 		// 				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r'
// 		// 				onClick={handleNext}
// 		// 			>
// 		// 				Siguiente
// 		// 			</button>
// 		// 		)}
// 		// 		{currentStep === steps.length && (
// 		// 			<button
// 		// 				className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r'
// 		// 				onClick={handleReset}
// 		// 			>
// 		// 				Empezar de nuevo
// 		// 			</button>
// 		// 		)}
// 		// 	</div>
// 		// </div>
// 	)
// }

import { useState } from "react"
import ChatGPT from "chatgpt"

export default function HomePage() {
	const [dockerfile, setDockerfile] = useState("")
	const [instructions, setInstructions] = useState("")

	const generateDockerfile = async () => {
		// const chatGPT = new ChatGPT("")
		const result = await chatGPT.generate({
			prompt: instructions,
			maxTokens: 1024,
		})
		setDockerfile(result.data[0].text)
	}

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<h1 className='text-4xl font-bold mb-4'>Generador de Dockerfile</h1>
			<label className='text-lg font-semibold mb-2'>Ingrese las instrucciones para su Dockerfile:</label>
			<textarea
				className='p-2 border border-gray-300 rounded-lg w-96 h-64 mb-4'
				value={instructions}
				onChange={e => setInstructions(e.target.value)}
			/>
			<button
				className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg'
				onClick={generateDockerfile}
			>
				Generar Dockerfile
			</button>
			{dockerfile && (
				<div className='mt-8'>
					<label className='text-lg font-semibold mb-2'>Dockerfile:</label>
					<textarea className='p-2 border border-gray-300 rounded-lg w-96 h-64' value={dockerfile} readOnly />
				</div>
			)}
		</div>
	)
}
