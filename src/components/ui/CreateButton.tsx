import { faCubesStacked } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// const LoadingDots = () => (
// 	<div className='flex space-x-2 animate-pulse'>
// 		<div className='w-2 h-2 dark:bg-custom-dark-50 rounded-full'></div>
// 		<div className='w-2 h-2 dark:bg-custom-dark-50 rounded-full'></div>
// 		<div className='w-2 h-2 dark:bg-custom-dark-50 rounded-full'></div>
// 	</div>
// )

export default function CreateButton() {
	return (
		<div className='flex flex-col relative'>
			<button type='button' className='p-px rounded-md bg-gradient-to-r from-blue-600 to-violet-600' disabled>
				<div
					className={`flex items-center gap-2 dark:text-custom-dark-50 dark::hover:text-white px-4 py-2 font-semibold rounded-md bg-custom-dark-950 opacity-60`}
				>
					<FontAwesomeIcon icon={faCubesStacked} /> Create
				</div>
			</button>
			<span className='text-xs text-custom-dark-50 absolute -bottom-4 '>Soon!</span>
		</div>
	)
}
