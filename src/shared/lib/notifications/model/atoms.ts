import { atom, useSetAtom } from 'jotai'
import { INotification } from './types/types'

export const notificationTextAtom = atom<string>('')
export const notificationTypeAtom = atom<INotification>('loading')

export const UseDisplayNotification = () => {
	const setNotificationText = useSetAtom(notificationTextAtom)
	const setNotificationType = useSetAtom(notificationTypeAtom)

	const displayNotification = ({
		type,
		text,
		time,
	}: {
		type: INotification
		text: string
		time?: number
	}) => {
		setNotificationText(text)
		setNotificationType(type)
    console.log({time})
		if (time) {
			setTimeout(() => setNotificationText(''), time)
		}
	}

	return {
		displayNotification,
	}
}
