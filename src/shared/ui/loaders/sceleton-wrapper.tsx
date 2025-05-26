import { ReactNode } from 'react'
import Skeleton from '@mui/material/Skeleton'

export function SceletonWrapper({
	children,
	isLoading,
	variant = 'rounded',
	width = 100,
	height = 32,
	className,
}: {
	children: ReactNode
	isLoading: boolean
	variant?: 'circular' | 'rectangular' | 'rounded' | 'text'
	width?: number
	height?: number
	className?: string
}) {
	return isLoading ? (
		<div className={className}>
			<Skeleton
				animation='wave'
				variant={variant}
				width={width}
				height={height}
			>
				<>{children}</>
			</Skeleton>
		</div>
	) : (
		<>{children}</>
	)
}
