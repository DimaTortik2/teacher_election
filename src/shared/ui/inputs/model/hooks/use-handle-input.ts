import { useEffect, useRef } from 'react'
import debounce from 'lodash.debounce'

export function useHandleInput() {
	const inputRef = useRef<HTMLTextAreaElement | null>(null)

	const changeInputHeight = () => {
		const textArea = inputRef.current
		if (!textArea) return

		// textArea.style.height = 'auto'
		// const scrollHeight = textArea.scrollHeight
		// const maxHeight = 8 * parseFloat(getComputedStyle(textArea).lineHeight)
		// textArea.style.height = `${Math.min(scrollHeight, maxHeight)}px`

		textArea.style.height = 'auto' // Сбрасываем высоту для корректного измерения scrollHeight

		const computedStyle = getComputedStyle(textArea)
		const lineHeight = parseFloat(computedStyle.lineHeight)
		const paddingTop = parseFloat(computedStyle.paddingTop)
		const paddingBottom = parseFloat(computedStyle.paddingBottom)
		// const borderTopWidth = parseFloat(computedStyle.borderTopWidth); // Если есть видимые границы
		// const borderBottomWidth = parseFloat(computedStyle.borderBottomWidth); // Если есть видимые границы
		// const verticalBorders = borderTopWidth + borderBottomWidth;
		// В вашем CSS border-bottom: 2px, border-top не задан явно (будет 0 или унаследован)
		const verticalBorders =
			parseFloat(computedStyle.borderBottomWidth) +
			parseFloat(computedStyle.borderTopWidth)

		// Максимальная высота для КОНТЕНТА ВНУТРИ TEXTAREA (включая padding, так как scrollHeight его включает)
		const maxContentScrollHeight = 8 * lineHeight + paddingTop + paddingBottom

		// Текущая высота контента (включая padding)
		const currentScrollHeight = textArea.scrollHeight

		if (currentScrollHeight > maxContentScrollHeight) {
			// Если контент превышает максимум, устанавливаем высоту элемента на maxContentScrollHeight + borders
			textArea.style.height = `${maxContentScrollHeight + verticalBorders}px`
			textArea.style.overflowY = 'auto' // Показываем скролл
		} else {
			// Иначе, устанавливаем высоту по содержимому (scrollHeight уже включает padding) + borders
			textArea.style.height = `${currentScrollHeight + verticalBorders}px`
			textArea.style.overflowY = 'hidden' // Скрываем скролл, если он был
		}

		// Гарантируем, что высота не меньше min-height (если она установлена в CSS)
		// или рассчитанной высоты для одной строки.
		const minHeightCSS = parseFloat(computedStyle.minHeight)
		const singleLineCalculatedScrollHeight =
			lineHeight + paddingTop + paddingBottom
		const singleLineCalculatedElementHeight =
			singleLineCalculatedScrollHeight + verticalBorders

		const actualMinHeight = Math.max(
			minHeightCSS || 0,
			singleLineCalculatedElementHeight
		)

		if (parseFloat(textArea.style.height) < actualMinHeight) {
			textArea.style.height = `${actualMinHeight}px`
		}
	}

	useEffect(() => {
		changeInputHeight()
	}, [])

	const handleInput = debounce(changeInputHeight, 100)

	return {
		handleInput,
		inputRef,
	}
}

// export function useHandleInput() {
// 	const inputRef = useRef<HTMLTextAreaElement | null>(null)

// 	const changeInputHeight = () => {
// 		const textArea = inputRef.current
// 		if (!textArea) return
// 		textArea.style.height = 'auto'
// 		const scrollHeight = textArea.scrollHeight
// 		const maxHeight = 8 * parseFloat(getComputedStyle(textArea).lineHeight)
// 		textArea.style.height = `${Math.min(scrollHeight, maxHeight)}px`
// 	}

// 	useEffect(() => {
// 		changeInputHeight()
// 	}, [])

// 	const handleInput = debounce(changeInputHeight, 100)

// 	return {
// 		handleInput,
// 		inputRef,
// 	}
// }
