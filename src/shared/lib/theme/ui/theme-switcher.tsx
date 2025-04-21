import { useAtom } from 'jotai'
import { themeSyncAtom } from '../model/atoms/atoms'
import { THEMES_ARR } from '../model/theme-consts'
import clsx from 'clsx'

export function ThemeSwitcher() {
	const [theme, setTheme] = useAtom(themeSyncAtom)

	return (
		<div className='flex gap-2 mt-4'>
			{THEMES_ARR.map(t => (
				<button
					key={t}
					onClick={() => setTheme(t)}
					className={clsx(
						'px-4 py-2 rounded',
						theme === t ? 'bg-theme-500' : 'bg-theme-400'
					)}
					type='button'
				>
					{t}
				</button>
			))}
		</div>
	)
}
