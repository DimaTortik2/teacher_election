import { selectedSubjectsIdsAtom } from '@/app/store/subjects-table.store'
import { ModalBottomButton } from '@/shared/ui/buttons/modal-bottom-button'
import { useAtomValue } from 'jotai'
import { useDeleteSubjects } from '@/features/subjects/admin/api/queries/admin-subjects.queries'

export function AdminDeleteSubjectsForm() {
	const selectedSubjectsIds = useAtomValue(selectedSubjectsIdsAtom)
	const { deleteSubjects } = useDeleteSubjects()

	const handleDeleteMany = () => {
		deleteSubjects(selectedSubjectsIds)
	}

	return (
		<div className='w-full h-full flex gap-10 mt-10 flex-col justify-center items-center text-xl'>
			<p className='mt-auto text-center p-5'>
				Вы точно хотите <span className='text-red-300'>удалить </span>
				предметы ?
			</p>
			<ModalBottomButton onClick={handleDeleteMany}>
				Подтвердить
			</ModalBottomButton>
		</div>
	)
}
