import { useMemo } from "react";

interface Message {
	messageType: string;
	text: string;
}

const useMessageType = (
	messageType: string,
	messages: Message[],
) => {

	let filterdType = "";

	switch (messageType) {
		case "ChatGPT":
			filterdType = "GPT"
			break;

		case "Deepseek":
			filterdType = "DEEPSEEK"
			break;

		case "Claude":
			filterdType = "CLAUDE"
			break;

		case "Gemini":
			filterdType = "BARD"
			break;

		default:
			filterdType = ""
			break;
	}

	const filteredText = useMemo(() => {
		if (!messages || messages.length === 0) return "";

		return messages.find((msg) => msg.messageType === filterdType)?.text
	}, [messageType, messages])

	return filteredText;
}

export default useMessageType;