import { useState } from 'react'
import {
	AdminTeacherCardsList,
	ITeacherForm,
	useAdminTeachers,
} from '../../../features/teachers'
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
		if (editData.file?.length === 0) editData.file = undefined
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
				className='w-screen md:w-[80vw] h-[90vh]
		 bg-zinc-600 flex flex-col items-center justify-start rounded-xl border-4 border-zinc-500 p-2'
			>
				<button
					onClick={() => handleBtnClick()}
					className='mb-2 py-4 w-full rounded-2xl bg-zinc-700 hover:bg-zinc-500 transition-colors'
				>
					Добавить учителя
				</button>

				{createToolsAreVisible && (
					<BasicModal title={'добавление'} onClose={handleCloseBtn}>
						<CreateTeacherForm onSubmit={handlePostTeacher} />
					</BasicModal>
					// <CreateTeacherForm onSubmit={handlePostTeacher} />
				)}

				{editToolsAreVisible && (
					<BasicModal title={'редактирование'} onClose={handleCloseBtn}>
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
