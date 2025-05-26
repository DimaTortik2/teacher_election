import { useSetAtom } from 'jotai'
import { ReactNode, useEffect } from 'react'
import { initializeThemeAtom } from '../../features/settings/theme/model/atoms'

export function ThemesProvider({ children }: { children: ReactNode }) {
	const setInitializeTheme = useSetAtom(initializeThemeAtom)
	useEffect(() => {
		setInitializeTheme()
	}, [setInitializeTheme])
	return <>{children}</>
}
