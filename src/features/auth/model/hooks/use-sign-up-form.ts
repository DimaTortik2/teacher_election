import { useEffect } from 'react'
import { useDisplayNotification } from '@/shared/ui/notifications'
import { ISignUp } from '../interfaces/auth.interfaces'
import { useSignUp } from '../../api/queries/auth.queries'

export function useSignUpForm() {
	const { signUp, signUpIsLoading } = useSignUp()
	const { displayNotification } = useDisplayNotification()

	useEffect(() => {
		if (signUpIsLoading) {
			displayNotification({ text: 'Загрузка...', type: 'loading' })
		}
	}, [signUpIsLoading, displayNotification])

	const onSubmit = (data: ISignUp) => {
		signUp(data)
	}

	return {
		onSubmit,
	}
}
