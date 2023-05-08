import { faCopy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function CopyButton() {
	return (
		<button
			type='button'
			title='Copy'
			className='text-sm dark:bg-custom-dark-950 border border-custom-dark-50 hover:border-white text-custom-dark-50 hover:text-white font-semibold py-1 px-2 rounded-md'
		>
			<FontAwesomeIcon icon={faCopy} />
		</button>
	)
}
