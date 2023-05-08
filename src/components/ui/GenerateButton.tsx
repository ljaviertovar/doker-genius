import { faCubesStacked } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
	generating: boolean
}

const LoadingDots = () => (
	<div className='flex space-x-2 animate-pulse'>
		<div className='w-2 h-2 dark:bg-custom-dark-50 rounded-full'></div>
		<div className='w-2 h-2 dark:bg-custom-dark-50 rounded-full'></div>
		<div className='w-2 h-2 dark:bg-custom-dark-50 rounded-full'></div>
	</div>
)

export default function GenerateButton({ generating }: Props) {
	return (
		<button
			type='submit'
			className='p-px rounded-lg bg-gradient-to-r from-violet-600 to-blue-600'
			disabled={generating}
		>
			<div
				className={`flex items-center gap-2 dark: text-custom-dark-50
       dark:hover:${!generating && "text-white"} ${
					generating && "opacity-60"
				} px-4 py-2 font-semibold rounded-lg bg-custom-dark-950`}
			>
				{!generating && <FontAwesomeIcon icon={faCubesStacked} />}
				{generating ? "Generating" : "Generate"}
				{generating && <LoadingDots />}
			</div>
		</button>
	)
}
