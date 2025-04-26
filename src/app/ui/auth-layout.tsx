import { Outlet } from 'react-router'
import {
	UiNotification,
} from '../../shared/lib/notifications'

export function AuthLayout() {


	return (
		<div className='flex items-center justify-center h-screen w-screen overflow-hidden relative'>
			<UiNotification className='absolute top-0 rounded-b-xl' />
			<Outlet />
		</div>
	)
}
