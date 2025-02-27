import { useState } from 'react'
import { BasicModal } from '../../../shared/ui/modal/basic-modal'
import { Button } from '../../../shared/ui/buttons-links/button'
import { AdminTeacherCardsList, ITeacherForm, useAdminTeachers } from '../../../features/teachers'
import { TeacherForm } from './admin-teacher-form'

export function AdminTeachers() {
	const { data, refetchTeachers, postTeacher, ref } = useAdminTeachers()

	const [modalIsVisible, setIsModalVisible] = useState(false)

	const handleBtnClick = () => {
		setIsModalVisible(prev => !prev)
	}
	const handleCloseBtn = () => {
		setIsModalVisible(prev => !prev)
	}

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
					<TeacherForm onPost={handlePostTeacher} />
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
