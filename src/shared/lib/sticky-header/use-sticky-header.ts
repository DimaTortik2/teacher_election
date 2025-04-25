import { useEffect, useRef, useState } from 'react'

export function useStickyHeader() {
	const [isScrolled, setIsScrolled] = useState(false)
	const scrollContainerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			if (scrollContainerRef.current) {
				const scrollPosition = scrollContainerRef.current.scrollTop
				setIsScrolled(scrollPosition > 200)
			}
		}

		const container = scrollContainerRef.current
		if (container) {
			container.addEventListener('scroll', handleScroll)
		}

		// Очищаем слушатель при размонтировании
		return () => {
			if (container) {
				container.removeEventListener('scroll', handleScroll)
			}
		}
	}, [])

	return {
		isScrolled,
		scrollContainerRef,
	}
}
