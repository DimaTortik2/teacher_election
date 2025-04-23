import { useEffect, useState } from 'react'
import EditIcon from '../../../../public/settings-icon.svg'
import { ThemeSwitcher } from '../../../shared/lib/theme'
import { LogOutSetting } from '../../../features/settings'

export function SettingsMenu() {
	const settingItems = [
		{ label: 'Темы', components: [<ThemeSwitcher />] },
		{
			label: 'Персонально',
			components: [<LogOutSetting />, <div>Сменить имя</div>],
		},
	]

	const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
	const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({})

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768)
		window.addEventListener('resize', handleResize)
		handleResize()
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		if (!isMobile) {
			// при десктопе — показать все
			const openAll: { [key: number]: boolean } = {}
			settingItems.forEach((_, idx) => {
				openAll[idx] = true
			})
			setOpenItems(openAll)
		} else {
			// при мобилке — закрыть все
			setOpenItems({})
		}
	}, [isMobile])

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
			<button onClick={() => setIsMenuVisible(prev => !prev)}>
				<img src={EditIcon} alt='settings' className='h-8 m-2' />
			</button>
			{isMenuVisible && (
				<div className='absolute w-full h-screen bg-zinc-800 rounded-b-2xl top-0 right-0 z-10 flex flex-col gap-3 p-2'>
					<div className='w-full flex justify-end'>
						<button onClick={() => setIsMenuVisible(prev => !prev)}>
							<img src={EditIcon} alt='settings' className='h-8 m-2' />
						</button>
					</div>
					{/* main */}
					<div className='w-full flex flex-col gap-4'>
						{settingItems.map((setting, idx) => (
							<div key={idx} className='flex flex-col md:flex-row gap-4'>
								<div
									className='bg-red-200 p-4 cursor-pointer w-full md:w-1/3'
									onClick={() => toggleItem(idx)}
								>
									{setting.label}
								</div>
								{(openItems[idx] || !isMobile) && (
									<div className='bg-blue-200 w-full md:w-2/3'>
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
