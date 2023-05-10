import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

import { generateMessages } from "@/data/prompts"
import { validateInputPrompt } from "@/utils/validations"

type Data =
	| {
			message: string
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

	if (!validateInputPrompt(prompt)) {
		res.status(200).json({
			message: "Invalid Prompt",
			dockerfile:
				"I'm sorry, I'm not sure what you mean. Could you please provide more context or clarify your request?",
		})
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
					...generateMessages,
					{
						role: "user",
						content: prompt.trim(),
					},
				],
			},
		})

		const choices = data.choices
		let message = choices[0].message.content

		res.status(200).json({
			message: "ok",
			dockerfile: message,
		})
	} catch (err) {
		console.log(err)
		return res.status(500).json({ message: "Error generating Dockerfile" })
	}
}
