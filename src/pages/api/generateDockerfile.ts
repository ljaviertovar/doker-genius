import type { NextApiRequest, NextApiResponse } from "next"
import { Configuration, ChatCompletionRequestMessageRoleEnum, OpenAIApi } from "openai"

import { validateInputPrompt } from "@/utils/validations"
import { EXAMPLE_MESSAGES, SYSTEM_MESSAGE } from "@/data/prompts"
import { getDockerfileText, getInnerText } from "@/utils/texts"

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
		return res.status(200).json({
			message: "Invalid Prompt",
			dockerfile:
				"I'm sorry, I'm not sure what you mean. Could you please provide more context or clarify your request?",
		})
	}

	try {
		const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY })
		const openai = new OpenAIApi(configuration)

		const completion = await openai.createChatCompletion({
			model: "gpt-3.5-turbo",
			messages: [
				SYSTEM_MESSAGE,
				...EXAMPLE_MESSAGES,
				{
					role: ChatCompletionRequestMessageRoleEnum.User,
					content: prompt,
				},
			],
		})

		const resp = completion.data.choices[0].message?.content ?? ""

		let dockerfile = getInnerText(resp, "```bash", "```")
		dockerfile = dockerfile.replaceAll("```bash", "").replaceAll("```", "")
		return res.status(200).json({ dockerfile, message: "ok" })
	} catch (err) {
		console.log(err)
		return res.status(500).json({ message: "Error generating Dockerfile" })
	}
}
