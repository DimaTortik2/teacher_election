import { ITheme } from './atoms'

export const THEMES_ARR: ITheme[] = ['black', 'white', 'purple', 'gray']
export const THEMES_COLOR_CLASSNAME: {
	[key in ITheme]: string
} = {
	black: 'bg-black',
	white: 'bg-white',
	purple: 'bg-purple-400',
	gray: 'bg-zinc-400',
}

export const THEMES_BG_URLS = {
	gray: '/layout-bg2.jpg',
	black: '/layout-bg2.jpg',
	purple: '/layout-bg2.jpg',
	white: '/layout-bg2.jpg',
}
