import { Alert, AlertColor, AlertPropsColorOverrides } from '@mui/material'
import { OverridableStringUnion } from '@mui/types'

interface IProps {
	type: 'success' | 'info' | 'error'
	isVisible: boolean
	className: string
}

type Status = OverridableStringUnion<AlertColor, AlertPropsColorOverrides>

interface ISeverity {
	success: Status
	error: Status
	info: Status
}

export function Notification({ type, className, isVisible}: IProps) {
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
	

	return isVisible ? (
		<Alert className={className} variant='filled' severity={severity[type]}>
			{messages[type]}
		</Alert>
	) : (
		<></>
	)
}
