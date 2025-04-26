import { useEffect, useRef, useState } from 'react'

export function useStickyHeader() {
	const [isScrolled, setIsScrolled] = useState(false)
	const scrollContainerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			if (scrollContainerRef.current) {
				const scrollPosition = scrollContainerRef.current.scrollTop
				setIsScrolled(scrollPosition > 235) // 350(teacherInfo - 300px + reviewFilter - 50px) - 115px(teacherInfoMinimaze - 65px ,reviewFilter - 50px)
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
	}, [])

	return {
		isScrolled,
		scrollContainerRef,
	}
}
