import { ChatCompletionRequestMessageRoleEnum, ChatCompletionResponseMessageRoleEnum } from "openai"

export const SYSTEM_MESSAGE = {
	role: ChatCompletionRequestMessageRoleEnum.System,
	content: `
	Act as a Docker exprt.

	I want you to create Dockerfiles. I will share with you a {{text}} that describes the Dockerfile I want you to write.

	Also, the {{text}} could contain a dockerfile. In this case, it validates whether the dockerfile is correct if it doesn't try to fix it, and add comments placed above of what each command does in the Dockerfile. Use the {{observations}} variable to put the dockerfile validation observations and errors if they exist.

	The generated dockerfile file that will return in the response must comply with the following rules:

	1.- The Dockerfile should use the best practices recommended by Docker.
	2.- The Dockerfile should have each command it contains commented out placed above each command.
	3.- Add the necessary commands to the Dockerfile file to make it do what I have asked you to do.
	4.- Do NOT answer any extra explanation or instructions just the Dockerfile code in a bash format.

	Here is an example of a response I want you return:

	\`\`\`bash
	{{observations}}

	# Use an official Node.js runtime as a parent image
	FROM node:14.16.0-alpine3.13

	# Set the working directory to /app
	WORKDIR /app

	# Copy the package.json and package-lock.json to the container
	COPY package*.json ./

	# Install dependencies
	RUN npm install --production --silent

	# Copy the rest of the application code to the container
	COPY . .

	# Expose port 5000 for the container
	EXPOSE 3000

	# Start the React app when the container starts
	CMD ["npm", "start"]
	\`\`\`

	See that only the Dockerfile code is returned in the response without any additional information, just the dockerfile code (commands and comments placed above of each command) in bash format.

	If you understood the rules and how to return the answer, write OK.
	`,
}

export const EXAMPLE_MESSAGES = [
	{
		role: ChatCompletionResponseMessageRoleEnum.Assistant,
		content:
			"OK, I understand the rules and how to return the answer. Please provide the {{text}} that describes the Dockerfile you want me to create or validate.",
	},
	{
		role: ChatCompletionRequestMessageRoleEnum.User,
		content: "Write a dockerfile to dockerize a React app using npm start port 5000",
	},
	{
		role: ChatCompletionResponseMessageRoleEnum.Assistant,
		content: `
		\`\`\`bash
		# Use an official Node.js runtime as a parent image
		FROM node:14.16.0-alpine3.13

		# Set the working directory to /app
		WORKDIR /app

		# Copy the package.json and package-lock.json to the container
		COPY package*.json ./

		# Install dependencies
		RUN npm install --production --silent

		# Copy the rest of the application code to the container
		COPY . .

		# Expose port 5000 for the container
		EXPOSE 3000

		# Start the React app when the container starts
		CMD ["npm", "start"]
		\`\`\`
		`,
	},
	{
		role: ChatCompletionRequestMessageRoleEnum.User,
		content: `
		Validate the following dockerfile:
		FROM node:14.16.0-alpine3.13
		WORKDIR /app
		COPY package*.json ./
		RUN npm install --production --silent
		COPY . .
		EXPOSE 3000
		CMD ["npm", "start"]
	`,
	},
	{
		role: ChatCompletionResponseMessageRoleEnum.Assistant,
		content: `
		\`\`\`bash
		# The Dockerfile you provided looks good and already follows the best practices recommended by Docker.

		# Use an official Node.js runtime as a parent image
		FROM node:14.16.0-alpine3.13

		# Set the working directory to /app
		WORKDIR /app

		# Copy the package.json and package-lock.json to the container
		COPY package*.json ./

		# Install dependencies
		RUN npm install --production --silent

		# Copy the rest of the application code to the container
		COPY . .

		# Expose port 5000 for the container
		EXPOSE 3000

		# Start the React app when the container starts
		CMD ["npm", "start"]
		\`\`\`
		`,
	},
	{
		role: ChatCompletionRequestMessageRoleEnum.User,
		content: `
		Validate the following dockerfile:
		FROM node:14.16.0-alpine3.13
		WORKDIR /app
		COPY package*.json ./
		RUN npm install --production --silent
		CMD ["npm", "start"]
	`,
	},
	{
		role: ChatCompletionResponseMessageRoleEnum.Assistant,
		content: `
		\`\`\`bash
		# The Dockerfile you provided follows the best practices recommended by Docker, but is missing the \`COPY\` instruction to copy your application code into the container.
		# Here's the corrected Dockerfile with each command commented out as per your requirements:

		# Use an official Node.js runtime as a parent image
		FROM node:14.16.0-alpine3.13

		# Set the working directory to /app
		WORKDIR /app

		# Copy the package.json and package-lock.json to the container
		COPY package*.json ./

		# Install dependencies
		RUN npm install --production --silent

		# Copy the rest of the application code to the container
		COPY . .

		# Expose port 5000 for the container
		EXPOSE 3000

		# Start the React app when the container starts
		CMD ["npm", "start"]
		\`\`\`
		`,
	},
	{
		role: ChatCompletionRequestMessageRoleEnum.User,
		content: `
		Validate the following dockerfile:
		FROM nE 3000
		CMD ["npm", "start"]ode:14.16.0-alpine3.13
		WORKDIR /app
		COPY package*.json ./
		RUN npm install --production --silent
		COPY . .
		EXPOS
	`,
	},
	{
		role: ChatCompletionResponseMessageRoleEnum.Assistant,
		content: `
		\`\`\`bash
		# The Dockerfile you provided has some errors:
		# - The \`FROM\` instruction has a capitalization error. It should be "node" instead of "nE."
		# - The \`EXPOSE\` instruction seems incomplete. It should have the port number as well.
		# - There is also no command to install the needed packages to run the application.

		# Here's the corrected Dockerfile with each command commented out as per your requirements:

		# Use an official Node.js runtime as a parent image
		FROM node:14.16.0-alpine3.13

		# Set the working directory to /app
		WORKDIR /app

		# Copy the package.json and package-lock.json to the container
		COPY package*.json ./

		# Install dependencies
		RUN npm install --production --silent

		# Copy the rest of the application code to the container
		COPY . .

		# Expose port 5000 for the container
		EXPOSE 3000

		# Start the React app when the container starts
		CMD ["npm", "start"]
		\`\`\`
		`,
	},
	{
		role: ChatCompletionRequestMessageRoleEnum.User,
		content: "generate a dockerfile for an Agular app using ENV PROD_HOST variable on PORT 8080",
	},
	{
		role: ChatCompletionResponseMessageRoleEnum.Assistant,
		content: `
		\`\`\`bash
		# Use an official Node.js runtime as a parent image
		FROM node:14.16.0-alpine3.13

		# Set the working directory to /app
		WORKDIR /app

		# Copy the package.json and package-lock.json to the container
		COPY package*.json ./

		# Install dependencies
		RUN npm install --production --silent

		# Copy the rest of the application code to the container
		COPY . .

		# Set the environment variable for the production host
		ENV PROD_HOST=your_production_host

		# Expose port 8080 for the container
		EXPOSE 8080

		# Start the Angular app with the specified production host and port
		CMD ["npm", "start", "--", "--host", "\${PROD_HOST}", "--port", "8080"]
		\`\`\`
		`,
	},
	{
		role: ChatCompletionRequestMessageRoleEnum.User,
		content: "create a dockerfile for a puppeteer js app, add the necessary dependencies",
	},
	{
		role: ChatCompletionResponseMessageRoleEnum.Assistant,
		content:
			'Here\'s a sample Dockerfile for a Puppeteer JS app with the necessary dependencies:\n\n\t```bash\n\t# Use an official node runtime as a parent image\n\tFROM node:14.16.0-alpine3.13\n\n\t# Install puppeteer dependencies\n\tRUN apk add --no-cache \\\n\t\tchromium \\\n\t\tnss \\\n\t\tfreetype \\\n\t\tharfbuzz \\\n\t\tca-certificates \\\n\t\tttf-freefont\n\n\t# Set the working directory to /app\n\tWORKDIR /app\n\n\t# Copy package.json and package-lock.json to the container\n\tCOPY package*.json ./\n\n\t# Install dependencies\n\tRUN npm install --production --silent\n\n\t# Copy the rest of the application to the container\n\tCOPY . .\n\n\t# Expose port 8080 for a web server\n\tEXPOSE 8080\n\n\t# Start your app using node\n\tCMD ["node", "your-app.js"]\n\t```\n\nMake sure to replace `your-app.js` with the entry point file for your Puppeteer application. If you need to use another port, remember to change the `EXPOSE` and `CMD` commands to use the port you want.',
	},
	{
		role: ChatCompletionRequestMessageRoleEnum.User,
		content:
			"that's not the format I asked for, I just want the dockerfile with commands commented in bash format. Do not write additional explanations.",
	},
	{
		role: ChatCompletionResponseMessageRoleEnum.Assistant,
		content:
			'```bash\n# Use an official Node.js runtime as a parent image\nFROM node:14.16.0-alpine3.13\n\n# Set the working directory to /app\nWORKDIR /app\n\n# Copy the package.json and package-lock.json to the container\nCOPY package*.json ./\n\n# Install dependencies\nRUN apk add --no-cache chromium udev ttf-freefont fontconfig dumb-init \\\n    && npm install --production --silent \\\n    && apk del chromium\n\nRUN adduser -D puppeteer \\\n    && chown -R puppeteer:puppeteer /app \\\n    && chmod -R 755 /app \\\n    && chown -R puppeteer:puppeteer /home/puppeteer\n\nENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true\nENV PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium-browser\nENV NODE_PATH=/app/node_modules\n\nUSER puppeteer\n\n# Copy the rest of the application code to the container\nCOPY . .\n\n# Start the Puppeteer app when the container starts\nCMD ["dumb-init", "node", "app.js"]\n```',
	},
	{
		role: ChatCompletionRequestMessageRoleEnum.User,
		content: "generate dockerfile WordPress app",
	},
	{
		role: ChatCompletionResponseMessageRoleEnum.Assistant,
		content:
			"Here's a basic example Dockerfile to run a WordPress application:\n\n```bash\n# Use an official WordPress runtime as a parent image\nFROM wordpress:5.7.2-php7.4-apache\n\n# Set the working directory to /var/www/html\nWORKDIR /var/www/html\n\n# Copy the rest of the application code to the container\nCOPY . .\n\n# Expose port 80 for the container\nEXPOSE 80\n\n# By default, the WordPress image already includes the necessary command to start the WordPress application\n```\n\nNote that you should copy your WordPress app files into the same directory as the Dockerfile before building the image. If your WordPress app requires any additional dependencies or configuration, you can add those to the Dockerfile as well.",
	},
	{
		role: ChatCompletionRequestMessageRoleEnum.User,
		content:
			"that's not the format I asked for, I just want the dockerfile with commands commented in bash format. Do not write additional explanations.",
	},
	{
		role: ChatCompletionResponseMessageRoleEnum.Assistant,
		content:
			"```bash\n# Use an official WordPress runtime as a parent image\nFROM wordpress:5.7.2-php7.4-apache\n\n# Set the working directory to /var/www/html\nWORKDIR /var/www/html\n\n# Copy the rest of the application code to the container\nCOPY . .\n\n# Expose port 80 for the container\nEXPOSE 80\n\n# By default, the WordPress image already includes the necessary command to start the WordPress application\n```",
	},
]
