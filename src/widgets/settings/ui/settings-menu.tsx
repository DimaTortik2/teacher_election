import { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import { ThemeSwitcher } from '../../../shared/lib/theme'
import { LogOutSetting } from '../../../features/settings'
import { useIsMobile } from '../../../shared/lib/mobile'

export function SettingsMenu() {
	const settingItems = [
		{ label: 'Темы', components: [<ThemeSwitcher />] },
		{
			label: 'Персонально',
			components: [
				<div className='border-4 border-theme-500 flex justify-center text-white rounded-xl px-4 py-[10px]'>
					Сменить имя
				</div>,
				<LogOutSetting />,
			],
		},
	]

	const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({})
	const { isMobile } = useIsMobile(768)

	const toggleItem = (idx: number) => {
		if (!isMobile) return
		setOpenItems(prev => ({
			...prev,
			[idx]: !prev[idx],
		}))
	}

	const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)

	return (
		<div>
			<button
				onClick={() => setIsMenuVisible(prev => !prev)}
				className='m-2 p-1 rounded-full hover:bg-zinc-600 transition-colors'
			>
				<SettingsIcon className='text-theme-300'/>
				{/* <img src={EditIcon} alt='settings' className='h-8 m-2' /> */}
			</button>
			{isMenuVisible && (
				<div className='absolute w-full h-screen bg-zinc-800 rounded-b-2xl top-0 right-0 z-10 flex flex-col gap-3 pt-2'>
					<div className='w-full flex justify-end'>
						<button
							onClick={() => setIsMenuVisible(prev => !prev)}
							className='m-2 p-1 rounded-full hover:bg-zinc-600 transition-colors'
						>
							{/* <img src={EditIcon} alt='settings' className='h-8 m-2' /> */}
							<SettingsIcon className='text-theme-300'/>
						</button>
					</div>
					{/* main */}
					<div className='w-full flex flex-col gap-5 px-4'>
						{settingItems.map((setting, idx) => (
							<div key={idx} className='flex flex-col md:flex-row gap-5'>
								<div
									className='flex p-4 cursor-pointer w-full md:w-1/3 text-zinc-400 opacity-50 text-xl justify-center md:justify-start border-2 rounded-lg border-theme-400 md:border-0'
									onClick={() => toggleItem(idx)}
								>
									{setting.label}
								</div>
								{(openItems[idx] || !isMobile) && (
									<div className=' w-full flex items-center gap-5 md:w-2/3 justify-center md:justify-start'>
										{setting.components.map((component, i) => (
											<div key={i}>{component}</div>
										))}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
