import { useState } from 'react'
import { LogOutModal } from '../../../features/settings/ui/log-out-modal'
import { ThemeSwitcher } from '../../../shared/lib/theme'

export function SettingsMenu() {
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

	const settings = [{ label: 'Выйти', onClick: () => setIsModalVisible(true) }]

	return (
		<div className='absolute w-full h-screen bg-zinc-800 rounded-b-2xl top-16 right-0 z-10 flex flex-col gap-3 p-2'>
			{settings.map((setting, i) => (
				<button
					className='bg-theme-700 flex justify-center text-white rounded-2xl'
					onClick={setting.onClick}
					key={i}
				>
					{setting.label}
				</button>
			))}

			<LogOutModal
				isVisible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
			/>
			<ThemeSwitcher />
		</div>
	)
}
