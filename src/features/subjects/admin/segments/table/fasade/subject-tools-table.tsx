import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useAtomValue, useSetAtom } from 'jotai'
import {
	isAddSubjectModalVisibleAtom,
	isDeleteSubjectModalVisibleAtom,
	selectedSubjectsIdsAtom,
} from '@/app/store/subjects-table.store'
import { IconButton } from '@/shared/ui/icons/icon-button'

export function SubjectToolsTable() {
	const selectedSubjectsIds = useAtomValue(selectedSubjectsIdsAtom)
	const setAddModalVisible = useSetAtom(isAddSubjectModalVisibleAtom)
	const setIsDeleteModalVisible = useSetAtom(isDeleteSubjectModalVisibleAtom)

	return (
		<div className='bg-zinc-700 rounded-t-xl w-full p-2 flex  justify-center'>
			{selectedSubjectsIds.length > 0 && (
				<IconButton
					icon={<DeleteIcon />}
					onClick={() => setIsDeleteModalVisible(true)}
					className='mr-auto p-1'
				/>
			)}
			{selectedSubjectsIds.length === 1 && (
				<IconButton
					icon={<EditIcon />}
					onClick={() => setIsDeleteModalVisible(true)}
				/>
			)}
			<IconButton
				icon={<AddIcon />}
				onClick={() => setAddModalVisible(true)}
				className='ml-auto'
			/>
		</div>
	)
}
