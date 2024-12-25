import { AdminLinksList } from '../../../widgets/Admin'
import { AdminTitle } from '../../../features/admin-features'

export function AdminPage() {
	return (
		<div className='flex flex-col items-center justify-center w-screen h-screen relative'>
			<img
				src='/snow.png'
				alt='snow'
				className='h-[150px] w-full scale-105 sm:w-[500px] absolute top-[-35px] sm:right-[-20px]'
			/>

			<AdminTitle>{'Stas'}</AdminTitle>
			<AdminLinksList className={'pl-[2vw] pr-[2vw]'} />
		</div>
	)
}
