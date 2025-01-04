import clsx from 'clsx'
import { Link } from 'react-router'

interface IProps {
	type: 'signIn' | 'signUp'
	className?: string
}

export function AuthBackLink({ type, className }: IProps) {
	return (
		<div
			className={clsx(
				className,
			)}
		>
			{type === 'signIn' && <Link to={'/sign-in'}>Войти</Link>}
			{type === 'signUp' && <Link to={'/'}>Зарегистрироваться</Link>}
		</div>
	)
}
