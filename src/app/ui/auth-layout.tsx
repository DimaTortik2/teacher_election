import { Outlet } from 'react-router'
import {
	// notificationTextAtom,
	// notificationTypeAtom,
	UiNotification,
} from '../../shared/lib/notifications'

// import { useSetAtom } from 'jotai'
// import { useEffect } from 'react'

export function AuthLayout() {
	// const setNotificationText = useSetAtom(notificationTextAtom)
	// const setNotificationType = useSetAtom(notificationTypeAtom)

	// useEffect(() => {
	// 	setNotificationText('загрузка...')
	// 	setNotificationType('loading')
	// }, [])

	return (
		<div className='flex items-center justify-center h-screen w-screen overflow-hidden relative'>
			<UiNotification className='absolute top-0 rounded-b-xl' />
			<Outlet />
		</div>
	)
}
