import { AdminLinksList } from "../../../widgets/admin/ui/admin-links-list";

export function AdminPage() {
	return (
		<div className='flex flex-col items-center justify-center w-screen h-screen relative'>
			<img
				src='/snow.png'
				alt='snow'
				className='h-[150px] w-full scale-105 sm:w-[500px] absolute top-[-35px] sm:right-[-20px]'
			/>

			<h1 className='text-[50px] sm:text-[100px] mb-[10vh]'>
				Добро <br /> пожаловать !
			</h1>
			<AdminLinksList className={'pl-[2vw] pr-[2vw]'} />
		</div>
	)
}
