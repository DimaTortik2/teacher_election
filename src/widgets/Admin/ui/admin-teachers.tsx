import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import {
	useGetTeachers,
	usePostTeacher,
} from '../../../shared/api/queries/teachers.queries'
import { AdminTeacherCardsList } from './admin-teacher-card-list'
import { TeacherForm } from '../../../features/admin'
import { BasicModal, Button, ITeacherForm } from '../../../shared'

export function AdminTeachers() {
	const { data, hasNextPage, refetchTeachers, fetchNextPage } = useGetTeachers()

	const { postTeacher, postTeacherIsSuccess } = usePostTeacher()

	const [modalIsVisible, setIsModalVisible] = useState(false)

	const handleBtnClick = () => {
		setIsModalVisible(prev => !prev)
	}
	const handleCloseBtn = () => {
		setIsModalVisible(prev => !prev)
	}

	const [ref, inView] = useInView()
	useEffect(() => {
		if (inView && hasNextPage) {
			console.log('inview')
			fetchNextPage()
		}

		if (postTeacherIsSuccess) {
			refetchTeachers()
			console.log('data', data)
		}
	}, [
		inView,
		fetchNextPage,
		postTeacherIsSuccess,
		refetchTeachers,
		data,
		hasNextPage,
	])

	const handlePostTeacher = (data: ITeacherForm) => {
		console.log('ITEACHERDATA = ', data)
		postTeacher(data)
	}
	return (
		<div
			className='w-screen md:w-[80vw]
		 h-[90vh]handleClick
		 bg-zinc-600 flex flex-col items-center justify-start rounded-xl relative border-4 border-zinc-500 p-2'
		>
			<Button onClick={() => handleBtnClick()} className='mb-2'>
				Добавить учителя
			</Button>
			{modalIsVisible && (
				<BasicModal
					className='w-full h-full absolute top-0 p-1'
					onClose={handleCloseBtn}
				>
					<TeacherForm
						// postTeacher={postTeacher}
						onPost={handlePostTeacher}
					/>
				</BasicModal>
			)}

			<AdminTeacherCardsList
				refetchTeachers={refetchTeachers}
				teachersArray={data?.pages}
			>
				<li ref={ref}>⠀</li>
			</AdminTeacherCardsList>
		</div>
	)
}
