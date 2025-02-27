import { useEffect, useRef, useState } from 'react'

interface IProps {
	handleHeightChange: (height: number) => void
	inputHeight: number
}

export function useHeightControl({ handleHeightChange, inputHeight }: IProps) {
	const contentRef = useRef<HTMLDivElement | null>(null)
	const prevHeightRef = useRef<number>(0)

	const [isTextareaTuched, setIsTextareaTuched] = useState<boolean>(false)

	const handleTextareaTouch = () => {
		if (!isTextareaTuched) {
			setIsTextareaTuched(true)
			prevHeightRef.current = inputHeight
		}
	}

	useEffect(() => {
		if (
			contentRef.current &&
			prevHeightRef.current !== inputHeight &&
			isTextareaTuched
		) {
			const { scrollTop } = contentRef.current

			contentRef.current.scrollTo({
				top: scrollTop + (inputHeight - prevHeightRef.current), //прокрутить на то ,что изменилось
				behavior: 'smooth',
			})
			prevHeightRef.current = inputHeight
		}
	}, [inputHeight, isTextareaTuched])

	///


		const formRef = useRef<HTMLDivElement | null>(null)
	
		useEffect(() => {
			if (!formRef.current) return
			const observer = new ResizeObserver(() => {
				if (formRef.current && handleHeightChange) {
					handleHeightChange(formRef.current.offsetHeight)
				}
			})
	
			observer.observe(formRef.current)
			return () => observer.disconnect()
		}, [handleHeightChange])
	
	

	return { contentRef, handleTextareaTouch, formRef }
}
