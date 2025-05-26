import { useState } from 'react'
import { useIsMobile } from '@/shared/model/hooks/mobile/use-is-mobile'
import { SETTINGS_ITEMS } from '../model/settings-const'

export function SettingsList() {
	const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({})

	const { isMobile } = useIsMobile(768)

	const toggleItem = (idx: number) => {
		if (!isMobile) return
		setOpenItems(prev => ({
			...prev,
			[idx]: !prev[idx],
		}))
	}

	return (
		<div className='w-full flex flex-col gap-5 px-4'>
			{SETTINGS_ITEMS.map((setting, idx) => (
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
	)
}
