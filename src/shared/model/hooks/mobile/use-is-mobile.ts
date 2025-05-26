import { useEffect, useState } from 'react'

export function useIsMobile(maxWidth: number) {
	const [isMobile, setIsMobile] = useState(window.innerWidth < maxWidth)

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < maxWidth)
		window.addEventListener('resize', handleResize)
		handleResize()
		return () => window.removeEventListener('resize', handleResize)
	}, [maxWidth])

	return {
		isMobile,
	}
}
