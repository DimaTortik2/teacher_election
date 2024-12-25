import { useEffect, useState } from 'react'
import { ISignUp, usePostSignUp } from '../../../shared'

import { SignUpForm } from '../../../features/sign-up-form'
import { AuthTitle } from '../../../shared'
import { Notification } from '../../../shared/ui/notification/notification'
import { useNavigate } from 'react-router-dom'

export function SignUpPage() {
	const navigate = useNavigate()

	const { signUp, signUpIsLoading, signUpIsSuccess, signUpIsError } =
		usePostSignUp()

	const [showNotification, setShowNotification] = useState(false)
	const [type, setType] = useState<'success' | 'info' | 'error'>('info')

	const handleSignUp = (data: ISignUp) => {
		signUp(data)
	}

	useEffect(() => {
		if (signUpIsSuccess) {
			setShowNotification(true)
			setType('success')

			const timer = setTimeout(() => setShowNotification(false), 5000)

			navigate('/teachers')

			return () => {
				clearTimeout(timer)
			}
		}
		if (signUpIsError) {
			setShowNotification(true)
			setType('error')
			const timer = setTimeout(() => setShowNotification(false), 5000)
			return () => clearTimeout(timer)
		}
		if (signUpIsLoading) {
			setShowNotification(true)
			setType('info')

			const timer = setTimeout(() => setShowNotification(false), 100000)

			return () => clearTimeout(timer)
		}
	}, [signUpIsSuccess, signUpIsLoading, signUpIsError, navigate])

	return (
		<div className='w-screen h-screen flex items-center justify-center'>
			<section
				className='w-screen sm:w-[calc((1vh_+_1vw)*25)] xl:w-[500px]
		 h-screen sm:h-[90vh]
		 bg-zinc-600 flex flex-col items-center justify-center sm:rounded-xl relative  sm:border-4 sm:border-zinc-500 '
			>
				<AuthTitle>Регистрация</AuthTitle>
				<div>
					<SignUpForm onSignUp={handleSignUp} />
				</div>
			</section>

			<Notification
				className='absolute left-0 bottom-0 '
				type={type}
				isVisible={showNotification}
			/>
		</div>
	)
}
