import { useState } from 'react'
import EditIcon from '../../../../public/settings-icon.svg'
import { SettingsMenu } from './settings-menu'
export function SettingsWidget() {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	return (
		<div>
			<button onClick={() => setIsVisible(prev => !prev)}>
				<img src={EditIcon} alt='settings' className='h-8 m-2' />
			</button>
			{isVisible && <SettingsMenu />}
		</div>
	)
}
