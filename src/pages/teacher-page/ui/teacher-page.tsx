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
