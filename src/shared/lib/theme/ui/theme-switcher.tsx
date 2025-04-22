import { useAtom } from 'jotai'
import { themeSyncAtom } from '../model/atoms/atoms'
import { THEMES_ARR } from '../model/theme-consts'
import clsx from 'clsx'
import { useState } from 'react'
import { ResetIcon } from '../../../ui/icons'

export function ThemeSwitcher() {
	const [isClicked, setIsClicked] = useState<boolean>(false)
	const [theme, setTheme] = useAtom(themeSyncAtom)

	return (
		<>
			{!isClicked ? (
				<button onClick={() => setIsClicked(true)}>
					<ResetIcon className='h-8 m-2 text-theme-500' />
				</button>
			) : (
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
			)}
		</>
	)
}
