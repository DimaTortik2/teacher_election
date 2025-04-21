import { useSetAtom } from 'jotai'
import { ReactNode, useEffect } from 'react'
import { initializeThemeAtom } from '../model/atoms/atoms'

export function HydrateAtoms({ children }: { children: ReactNode }) {
	const setInitializeTheme = useSetAtom(initializeThemeAtom)
	useEffect(() => {
		setInitializeTheme()
	}, [setInitializeTheme])
	return <>{children}</>
}
