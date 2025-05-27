import { Skeleton } from '@mui/material'

export function SkeletonTeacherCard() {
	return (
		<div className='flex flex-col gap-1 items-center justify-center w-[220px] rounded-2xl bg-theme-600 p-3'>
			<Skeleton
				width={200}
				height={200}
				variant='rounded'
				animation='wave'
				sx={{ borderRadius: 3 }}
			/>

			<div className='items-start justify-start w-full '>
				<Skeleton width={150} animation='wave' />
				<Skeleton width={100} animation='wave' />
				<Skeleton width={100} animation='wave' />
			</div>
		</div>
	)
}
