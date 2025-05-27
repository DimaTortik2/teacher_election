import { useEffect, useRef, useState } from 'react'

export function useStickyHeader(scrollPos: number) {
	const [isScrolled, setIsScrolled] = useState(false)
	const scrollContainerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			if (scrollContainerRef.current) {
				const scrollPosition = scrollContainerRef.current.scrollTop
				setIsScrolled(scrollPosition > scrollPos)
			}
		}

		const container = scrollContainerRef.current
		if (container) {
			container.addEventListener('scroll', handleScroll)
		}

		return () => {
			if (container) {
				container.removeEventListener('scroll', handleScroll)
			}
		}
	}, [scrollPos])

	return {
		isScrolled,
		scrollContainerRef,
	}
}
