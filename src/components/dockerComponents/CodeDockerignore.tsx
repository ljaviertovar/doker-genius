import dynamic from "next/dynamic"
const SyntaxHighlighter = dynamic(() => import("react-syntax-highlighter"))
import { gradientDark } from "react-syntax-highlighter/dist/cjs/styles/hljs"
import CopyButton from "../ui/CopyButton"
import { dockerfilePlaceholder } from "@/data/placeholders"

interface Props {
	textCode: string
}

export default function CodeDockerignore({ textCode }: Props) {
	return (
		<div className='p-4 rounded-md  dark:bg-custom-dark-900 border border-custom-dark-800 h-fit'>
			<div className='flex justify-between'>
				<h3 className='font-semibold dark:text-custom-dark-50 mb-4'>
					<pre>.dockerignore</pre>
				</h3>
				<div className=''>
					<CopyButton textCode={textCode ?? dockerfilePlaceholder} />
				</div>
			</div>

			<SyntaxHighlighter
				language='bash'
				style={gradientDark}
				wrapLines={true}
				showLineNumbers={false}
				lineNumberStyle={{ color: "#ccc" }}
				customStyle={{
					maxHeight: "none",
					height: "auto",
					overflow: "visible",
					wordWrap: "break-word",
					paddingRight: "3rem",
					borderRadius: "0.3rem",
					padding: "1rem",
				}}
				lineProps={{ style: { whiteSpace: "pre-wrap" } }}
			>
				{textCode}
			</SyntaxHighlighter>
		</div>
	)
}
