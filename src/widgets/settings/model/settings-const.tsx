import { ThemeSwitcher } from '@/features/settings/theme'
import { LogoutButton } from '@/features/settings/logout'

export const SETTINGS_ITEMS = [
	{ label: 'Темы', components: [<ThemeSwitcher />] },
	{
		label: 'Персонально',
		components: [
			<div className='border-4 border-theme-500 flex justify-center text-white rounded-xl px-4 py-[10px]'>
				Сменить имя
			</div>,
			<LogoutButton />,
		],
	},
]
