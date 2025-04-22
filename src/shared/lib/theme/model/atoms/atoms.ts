import { atom } from 'jotai'

export type ITheme = 'purple' | 'black' | 'white' | 'gray'
const themeAtom = atom<ITheme>('gray')

export const themeSyncAtom = atom(
	get => get(themeAtom),
	(_, set, newTheme: ITheme) => {
		set(themeAtom, newTheme)
		document.documentElement.setAttribute('data-theme', newTheme)
		localStorage.setItem('theme', newTheme)
	}
)
export const initializeThemeAtom = atom(null, (_, set) => {
	const savedTheme = localStorage.getItem('theme') as ITheme
	if (savedTheme) {
		set(themeSyncAtom, savedTheme)
	} else {
		set(themeSyncAtom, 'gray')
	}
})
