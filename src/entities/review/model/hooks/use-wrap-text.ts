import { useState } from 'react'

export function useWrapText(text: string | null | undefined) {
	const [isWrappedText, setIsWrappedText] = useState<boolean>(true)
	const isBigMessage = text ? text.length > 250 : false
	const wrappedText = text
		? isBigMessage
			? text.slice(0, 250) + ' ...'
			: text
		: false

	return {
		isWrappedText,
		setIsWrappedText,
		wrappedText,
		isBigMessage,
	}
}
