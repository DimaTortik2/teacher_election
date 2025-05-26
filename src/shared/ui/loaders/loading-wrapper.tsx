import { COLORS } from '@/app/model/style-constants'
import { ReactNode } from 'react'
import { SyncLoader } from 'react-spinners'

export function LoadingWrapper({
	children,
	isLoading,
	className,
}: {
	children: ReactNode
	isLoading: boolean
	className?: string
}) {
	return isLoading ? (
		<div className={className}>
			<SyncLoader color={COLORS.gray500} />
		</div>
	) : (
		<>{children}</>
	)
}
