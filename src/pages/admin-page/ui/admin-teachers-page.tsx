import { useState } from 'react'
import {
	AdminTeacherCardsList,
	ITeacherForm,
	useAdminTeachers,
} from '../../../features/teachers'
import { Button } from '../../../shared/ui/buttons-links/button'
import { BasicModal } from '../../../shared/ui/modal/basic-modal'
import { AdminLayout } from '../../../widgets/layouts/admin/ui/admin-layout'
import { CreateTeacherForm, EditTeacherForm } from '../../../widgets/teachers'

export function AdminTeachersPage() {
	const { data, postTeacher, ref, editTeacher, deleteTeacher } =
		useAdminTeachers()

	const handlePostTeacher = (postData: ITeacherForm) => {
		console.log('postData = ', postData)
		postTeacher(postData)
	}

	const handleDeleteTeacher = (id: string) => {
		deleteTeacher(id)
	}

	const handleEditTeacher = (editData: Partial<ITeacherForm>) => {
		if (editData.photo?.length === 0) editData.photo = undefined
		console.log('editData', editData)
		editTeacher({ data: editData, id: ediingTeacherId })
	}

	const [createToolsAreVisible, setCreateToolsAreVisible] = useState(false)
	const [editToolsAreVisible, setEditToolsAreVisible] = useState<boolean>(false)
	const [ediingTeacherId, setEditingTeacherId] = useState<string>('')

	const handleBtnClick = () => {
		setCreateToolsAreVisible(prev => !prev)
	}

	const handleCloseBtn = () => {
		setCreateToolsAreVisible(false)
		setEditToolsAreVisible(false)
	}

	const handleClickEditTeacher = (id: string) => {
		setEditToolsAreVisible(true)
		setEditingTeacherId(id)
	}

	return (
		<AdminLayout text='Управление учителями'>
			<div
				className='w-screen md:w-[80vw]
		 h-[90vh]handleClick
		 bg-zinc-600 flex flex-col items-center justify-start rounded-xl relative border-4 border-zinc-500 p-2'
			>
				<Button onClick={() => handleBtnClick()} className='mb-2'>
					Добавить учителя
				</Button>

				{createToolsAreVisible && (
					<BasicModal
						className='w-full h-full absolute top-0 p-1'
						onClose={handleCloseBtn}
					>
						<CreateTeacherForm onSubmit={handlePostTeacher} />
					</BasicModal>
				)}

				{editToolsAreVisible && (
					<BasicModal
						className='w-full h-full absolute top-0 p-1'
						onClose={handleCloseBtn}
					>
						<EditTeacherForm
							onSubmit={handleEditTeacher}
							id={ediingTeacherId}
						/>
					</BasicModal>
				)}

				<AdminTeacherCardsList
					teachersArray={data?.pages}
					onEdit={handleClickEditTeacher}
					onDelete={handleDeleteTeacher}
				>
					<li ref={ref}>⠀</li>
				</AdminTeacherCardsList>
			</div>
		</AdminLayout>
	)
}
