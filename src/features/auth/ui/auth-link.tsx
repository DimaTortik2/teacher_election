import { ROUTES } from '@/app/model/constants'
import clsx from 'clsx'
import { Link } from 'react-router'

interface IProps {
	type: 'tosignin' | 'tosignup'
	className?: string
}

export function AuthBackLink({ type, className }: IProps) {
	return (
		<div className={clsx(className, 'inline-block')}>
			{type === 'tosignin' && (
				<Link className='p-0 m-0' to={ROUTES.signin}>
					Войти
				</Link>
			)}
			{type === 'tosignup' && (
				<Link className='p-0 m-0' to={ROUTES.signup}>
					Создать
				</Link>
			)}
		</div>
	)
}
