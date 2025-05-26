import {
	isDeleteTeacherModalVisibleAtom,
	selectedTeacherIdAtom,
} from '@/app/store/admin-teachers.store'
import { useGetTeacher } from '@/features/teachers/api/queries/teachers.queries'
import { ModalBottomButton } from '@/shared/ui/buttons/modal-bottom-button'
import { TeacherPreview } from '@/features/teachers/admin/segments/forms/ui/teacher-preview'
import { useAtomValue, useSetAtom } from 'jotai'

export function AdminDeleteTeacherForm() {
	const id = useAtomValue(selectedTeacherIdAtom)
	const SetIsDeleteModalIsVisible = useSetAtom(isDeleteTeacherModalVisibleAtom)

	const handleDeleteOne = () => {
		console.log('deleted ', id)
		SetIsDeleteModalIsVisible(false)
	}

	const { data } = useGetTeacher(id)

	return (
		<div className='w-screen max-w-[600px] h-full flex gap-5 mt-5 flex-col justify-center items-center '>
			<p className='w-full pl-[18px] text-xl'>
				Вы точно хотите <span className='text-red-300'>удалить </span>
				препода ?
			</p>
			<TeacherPreview
				fullName={data?.fullName}
				subject={data?.subject}
				imgSrc={data?.photo}
			/>
			<ModalBottomButton
				className='bg-red-400 hover:bg-red-300'
				onClick={handleDeleteOne}
			>
				Подтвердить
			</ModalBottomButton>
		</div>
	)
}
