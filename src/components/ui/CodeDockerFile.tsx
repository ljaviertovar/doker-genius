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
				// style={isThemeDark ? dracula : vs}
				style={gradientDark}
				wrapLines={true}
				showLineNumbers={false}
				// lineNumberStyle={{ color: isThemeDark ? "gray" : "#ccc" }}
				lineNumberStyle={{ color: "#ccc" }}
				customStyle={{
					maxHeight: "none",
					height: "auto",
					overflow: "visible",
					wordWrap: "break-word",
					paddingRight: "2rem",
					// color: "inherit",
					// backgroundColor: isThemeDark ? "#1D1D1D" : "#F8F8F8",
					// backgroundColor: "#1D1D1D",
					borderRadius: "0.5rem",
					padding: "1rem",
				}}
				lineProps={{ style: { whiteSpace: "pre-wrap" } }}
			>
				{textCode}
			</SyntaxHighlighter>
		</div>
	)
}
