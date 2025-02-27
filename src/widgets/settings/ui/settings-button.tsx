import { useState } from 'react'
import EditIcon from '../../../../public/settings-icon.svg'
import { SettingsMenu } from './settings-menu'

export function SettingsButton() {
	const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)

	return (
		<div>
			<button onClick={() => setIsMenuVisible(prev => !prev)}>
				<img src={EditIcon} alt='settings' className='h-8 m-2' />
			</button>
			{isMenuVisible && <SettingsMenu />}
		</div>
	)
}
