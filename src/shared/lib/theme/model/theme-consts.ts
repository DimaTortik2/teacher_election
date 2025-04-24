import { ITheme } from './atoms/atoms'

export const THEMES_ARR: ITheme[] = ['black', 'white', 'purple', 'gray']
export const THEMES_COLOR_CLASSNAME: {
	[key in ITheme]: string
} = {
	black: 'bg-black',
	white: 'bg-white',
	purple: 'bg-purple-400',
	gray: 'bg-zinc-400',
}
