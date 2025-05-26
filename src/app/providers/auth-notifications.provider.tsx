import { Outlet } from 'react-router'
import { UiNotification } from '../../shared/ui/notifications'

export function AuthNotificationsProvider() {
	return (
		<div className='flex items-center justify-center h-screen w-screen overflow-hidden relative'>
			<UiNotification className='absolute top-0 rounded-b-xl' />
			<Outlet />
		</div>
	)
}
