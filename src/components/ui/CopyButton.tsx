import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy } from "@fortawesome/free-solid-svg-icons"
interface Props {
	textCode: string
}

export default function CopyButton({ textCode }: Props) {
	const [isCopied, setIsCopied] = useState(false)

	const setCopied = () => {
		setIsCopied(true)
		setTimeout(() => {
			setIsCopied(false)
		}, 1000)
	}

	return (
		<CopyToClipboard text={textCode}>
			<button
				type='button'
				title='Copy'
				className='text-sm dark:bg-custom-dark-950 border border-custom-dark-50 hover:border-white text-custom-dark-50 hover:text-white font-semibold py-1 px-2 rounded-md'
				onClick={() => setCopied()}
			>
				{isCopied ? "Copied!" : <FontAwesomeIcon icon={faCopy} />}
			</button>
		</CopyToClipboard>
	)
}
