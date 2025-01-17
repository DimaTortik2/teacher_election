import { Alert, AlertColor, AlertPropsColorOverrides } from '@mui/material'
import { OverridableStringUnion } from '@mui/types'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface IProps {
	className?: string
	isSuccess: boolean
	isError: boolean
	isLoading: boolean
}

type Status = OverridableStringUnion<AlertColor, AlertPropsColorOverrides>

interface ISeverity {
	success: Status
	error: Status
	info: Status
}

export function Notification({
	className,
	isSuccess,
	isError,
	isLoading,
}: IProps) {
	const navigate = useNavigate()
	const [showNotification, setShowNotification] = useState(false)

	const [type, setType] = useState<'success' | 'info' | 'error'>('info')

	useEffect(() => {
		if (isSuccess) {
			setShowNotification(true)
			setType('success')

			const timer = setTimeout(() => setShowNotification(false), 5000)

			navigate('/teachers')

			return () => {
				clearTimeout(timer)
			}
		}
		if (isError) {
			setShowNotification(true)
			setType('error')
			const timer = setTimeout(() => setShowNotification(false), 5000)
			return () => clearTimeout(timer)
		}
		if (isLoading) {
			setShowNotification(true)
			setType('info')

			return () => setShowNotification(false)
		}
	}, [isSuccess, isLoading, isError, setShowNotification, navigate])

	const messages = {
		success: 'Успешно',
		error: 'Проверьте свои данные',
		info: 'загрузка',
	}

	const severity: ISeverity = {
		success: 'success',
		error: 'error',
		info: 'info',
	}

	return showNotification ? (
		<Alert className={className} variant='filled' severity={severity[type]}>
			{messages[type]}
		</Alert>
	) : (
		<></>
	)
}
