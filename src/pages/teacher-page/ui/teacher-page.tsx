// import { Rating } from '@mui/material'

// export function TeacherPage() {
// 	return (
// 		<div
// 			className='w-screen sm:w-[90vw] lg:w-[1000px]
// 			 h-screen sm:h-[90vh]
// 			 bg-zinc-600 flex flex-col items-center justify-start sm:rounded-xl relative  sm:border-4 sm:border-zinc-500'
// 		>
// 			<div className='w-full p-2 flex flex-col lg:flex-row sm:items-start items-center'>
// 				<img
// 					src='/wallpaper.png'
// 					alt='препод'
// 					className='w-80 rounded-2xl border-4 border-zinc-500'
// 				/>
// 				<div className='flex flex-row lg:flex-col p-2 gap-2'>
// 					<p className='text-left my-wrap-text'>
// 						{'Задний фон для пк скаать онлайн и без регистрации'}
// 					</p>
// 					<p className='text-left text-[rgba(255,255,255,0.5)] my-wrap-text'>
// 						{'блюр обои супер крутые евер замазанные '}
// 					</p>
// 				</div>
// 				<div className='lg:p-2 p-x-2 flex flex-col pl-3 sm:absolute lg:relative sm:top-0 sm:right-0 sm:p-4 w-full sm:w-auto'>
// 					<Rating
// 						name='size-small'
// 						readOnly
// 						defaultValue={3.5}
// 						precision={0.5}
// 					/>
// 					<p className='text-left text-[rgba(255,255,255,0.5)] my-wrap-text'>
// 						{'ср. оценка'}
// 					</p>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

import { TeacherInfo } from '../../../shared'

export function TeacherPage() {
	return (
		<div
			className='w-screen sm:w-[90vw] lg:w-[1000px]
			 h-screen sm:h-[90vh]
			 bg-zinc-600 flex flex-col items-center justify-start sm:rounded-xl relative  sm:border-4 sm:border-zinc-500'
		>
			<TeacherInfo
				fullName='синий задний фон'
				rating={3}
				subject='инструктажи'
				imgSrc='https://teachers-election-backend.onrender.com/4282988808761354180.jpg'
			/>
		</div>
	)
}

