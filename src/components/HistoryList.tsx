import { useGenerateStore } from "../store/useGenerateStore"
interface Props {
	setPrompt: (value: string) => void
}

export default function HistoryList({ setPrompt }: Props) {
	const prompts = useGenerateStore(state => state.prompts)

	return (
		<div className='p-4 rounded-md  dark:bg-custom-dark-900 border border-custom-dark-800 h-fit'>
			<h3 className='font-semibold dark:text-custom-dark-50 mb-4'>My Prompts:</h3>
			{prompts.map(p => (
				<div
					key={p}
					className='text-md border border-custom-dark-800 appearance-none rounded-md w-full p-4 bg-custom-gray-bg dark:bg-custom-dark-950 text-gray-700 dark:text-custom-dark-150 dark:hover:text-custom-dark-50 leading-tight mb-2 mt-2 dark:hover:border-white hover:cursor-pointer'
					onClick={() => setPrompt(p)}
				>
					{p}
				</div>
			))}
		</div>
	)
}
