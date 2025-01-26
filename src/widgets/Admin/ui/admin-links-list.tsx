import clsx from 'clsx'
import { AdminLink } from '../../../features/admin'

interface IProps {
	className: string
}

export function AdminLinksList({ className }: IProps) {
	return (
		<ul
			className={clsx(
				className,
				'flex flex-col md:flex-row items-center justify-center gap-[10vw] sm:gap-[5vw] cursor-pointer'
			)}
		>
			<AdminLink href='/admin/review'>Проверить комменты</AdminLink>
			<AdminLink href='/admin/teachers'>Управлять учителями</AdminLink>
			<AdminLink href='/admin/subjects'>Управлять предметами</AdminLink>
		</ul>
	)
}
