export const validateInputPrompt = (prompt: string): boolean => {
	const regex =
		/(write|validate|create|generate|application|docker|dockerfile|dockerize|app|application|write a dockerfile|create a dockerfile|generate a dockerfile|generate dockerfile|create dockerfile|write dockerfile|escribe|valida|crea|genera|aplicacion|escribe un dockerfile|crea un dockerfile|genera un dockerfile|escribe dockerfile|crea dockerfile|genera dockerfile)/gi

	const matches = prompt.match(regex)
	console.log(matches)

	if (matches && matches.length >= 3) return true

	return false
}
