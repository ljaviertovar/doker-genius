import { useState } from "react"
import axios from "axios"

type FetchState<T> = {
	generate: (value: string) => void
	generating: boolean
	error: string | null
	dockerfile: T | null
}

export default function useDockerfileGenerator<T>(): FetchState<T> {
	const [generating, setGenerating] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [dockerfile, setDockerfile] = useState<T | null>(null)

	const generate = async (prompt: string) => {
		try {
			setGenerating(true)

			const { data, status } = await axios({
				method: "POST",
				url: "/api/generateDockerfile",
				headers: { "Content-Type": "application/json" },
				data: {
					prompt,
				},
			})

			if (status === 200) {
				setDockerfile(data)
			} else {
				setError("Error generating Dockerfile")
			}
			setGenerating(false)
		} catch (err) {
			console.log(err)
			setError("Error generating Dockerfile")
		} finally {
			setGenerating(false)
		}
	}

	return { generate, generating, error, dockerfile }
}
