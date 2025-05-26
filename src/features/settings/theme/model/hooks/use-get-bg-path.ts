import { useAtomValue } from 'jotai'
import { themeSyncAtom } from '../atoms'
import { THEMES_BG_URLS } from '../theme-consts'

export function useGetBgPath() {
	const themeName = useAtomValue(themeSyncAtom)
	return THEMES_BG_URLS[themeName]
}
