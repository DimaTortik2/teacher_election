import clsx from 'clsx'
import { AdminLink } from '@/pages/admin/panel/ui/admin-link'
import { ROUTES } from '@/app/model/constants'

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
			<AdminLink href={ROUTES.adminReviews}>Проверить комменты</AdminLink>
			<AdminLink href={ROUTES.adminTechers}>Управлять учителями</AdminLink>
			<AdminLink href={ROUTES.adminSubjects}>Управлять предметами</AdminLink>
		</ul>
	)
}
