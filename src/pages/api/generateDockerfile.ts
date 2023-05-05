import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

type Data =
	| {
			message: "ok"
			dockerfile: string
	  }
	| {
			message: string
	  }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method != "POST") {
		return res.status(405).json({ message: "Method not allowed." })
	}

	const { prompt } = req.body
	if (!prompt) {
		return res.status(400).json({ message: "Prompt not found." })
	}

	try {
		const { data } = await axios({
			method: "POST",
			url: "https://api.openai.com/v1/chat/completions",
			headers: {
				Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
				"Content-Type": "application/json",
			},
			data: {
				max_tokens: 400,
				temperature: 0.5,
				model: "gpt-3.5-turbo",
				messages: [
					{ role: "system", content: "Act as a Docker expert." },
					{
						role: "assistant",
						content:
							"Sure, I'd be happy to help! What would you like to know or need assistance with regarding Docker?",
					},
					{
						role: "user",
						content: `I want to create Dockerfiles, so I will share with you a {text} describing the Dockerfile I want you to write. The Dockerfile must comply with the following rules:
						- The Dockerfile should use the best practices recommended by Docker.
						- The Dockerfile file must have commented each instruction it contains.
						- Add the necessary instructions to the Dockerfile file to make it do what I have asked you to do.
						- Add supplementary instructions or suggestions to the Dockerfile file.
						- Return just the dockerfile.
						- Do NOT write any explanation.

						Answer OK if you understand the rules.`,
					},
					{
						role: "assistant",
						content:
							"OK, I understand the rules. Please share the {text} describing the Dockerfile you want me to write, and I will do my best to create a Dockerfile that meets your requirements.",
					},
					{
						role: "user",
						content: "Write a dockerfile to dockerize a React app using npm start.",
					},
					{
						role: "assistant",
						content:
							'# Use an official Node.js runtime as a parent image\nFROM node:14.16.0-alpine3.13\n\n# Set the working directory to /app\nWORKDIR /app\n\n# Copy the package.json and package-lock.json to the container\nCOPY package*.json ./\n\n# Install dependencies\nRUN npm install --production --silent\n\n# Copy the rest of the application code to the container\nCOPY . .\n\n# Build the React app for production\nRUN npm run build\n\n# Expose port 80 for the container\nEXPOSE 80\n\n# Start the React app when the container starts\nCMD ["npm", "run", "start"]',
					},
					{
						role: "user",
						content: prompt.trim(),
					},
				],
			},
		})

		const choices = data.choices
		let message = choices[0].message.content

		res.status(200).json(message)
	} catch (err) {
		console.log(err)
		return res.status(500).json({ message: "Error generating Dockerfile" })
	}
}
