import dynamic from "next/dynamic"
const SyntaxHighlighter = dynamic(() => import("react-syntax-highlighter"))
import { gradientDark } from "react-syntax-highlighter/dist/cjs/styles/hljs"

interface Props {
	textCode: string
}

export default function CodeDockerFile({ textCode }: Props) {
	return (
		<div>
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
