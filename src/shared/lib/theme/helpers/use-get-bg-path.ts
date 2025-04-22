import { useAtomValue } from 'jotai'
import { themeSyncAtom } from '../model/atoms/atoms'

export function useGetBgPath() {
	const themeName = useAtomValue(themeSyncAtom)
	return {
		gray: '/layout-bg2.jpg',
		black: '/layout-bg2.jpg',
		purple: '/layout-bg2.jpg',
		white: '/layout-bg2.jpg',
	}[themeName]
}
