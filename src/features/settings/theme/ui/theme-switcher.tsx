import { useAtom } from 'jotai'
import { themeSyncAtom } from '../model/atoms'
import { THEMES_ARR, THEMES_COLOR_CLASSNAME } from '../model/theme-consts'
import clsx from 'clsx'

export function ThemeSwitcher() {
	const [theme, setTheme] = useAtom(themeSyncAtom)
	return (
		<>
			<div className='flex gap-2 mt-4'>
				{THEMES_ARR.map(t => (
					<div key={t} className='flex flex-col gap-1 items-center'>
						<button
							key={t}
							onClick={() => setTheme(t)}
							className={clsx(
								'px-4 py-4 rounded-full',
								THEMES_COLOR_CLASSNAME[t]
							)}
							type='button'
						/>
						{theme === t && (
							<div className='h-[3px] rounded-2xl w-5/6 bg-white opacity-20'></div>
						)}
					</div>
				))}
			</div>
		</>
	)
}
