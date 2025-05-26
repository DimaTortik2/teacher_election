import SettingsIcon from '@mui/icons-material/Settings'
import { useState } from 'react'
import { IconButton } from '@/shared/ui/icons/icon-button'
import { SettingsMenu } from '../ui/settings-menu'

export function SettingsButton() {
	const [isMenuVisible, setIsMenuVisible] = useState(false)

	return (
		<>
			<IconButton
				onClick={() => setIsMenuVisible(prev => !prev)}
				icon={<SettingsIcon className='text-theme-300' />}
			/>
			<SettingsMenu
				isVisible={isMenuVisible}
				onClose={() => setIsMenuVisible(false)}
			/>
		</>
	)
}
