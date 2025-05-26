import { useEffect } from 'react'
import { useDisplayNotification } from '@/shared/ui/notifications'
import { useSignIn } from '../../api/queries/auth.queries'
import { ISignIn } from '../interfaces/auth.interfaces'

export function useSignInForm() {
	const { signIn, signInIsLoading } = useSignIn()

	const { displayNotification } = useDisplayNotification()

	useEffect(() => {
		if (signInIsLoading) {
			displayNotification({ text: 'Загрузка...', type: 'loading' })
		}
	}, [signInIsLoading, displayNotification])

	const onSubmit = (data: ISignIn) => {
		signIn(data)
	}

	return {
		onSubmit,
	}
}
