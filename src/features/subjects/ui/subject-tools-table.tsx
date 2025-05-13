import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useAtomValue, useSetAtom } from 'jotai'
import {
	isAddSubjectModalVisibleAtom,
	isDeleteSubjectModalVisibleAtom,
	selectedSubjectsIdsAtom,
} from '../../../app/store/subjects.store'

export function SubjectToolsTable() {
	const setAddModalVisible = useSetAtom(isAddSubjectModalVisibleAtom)
	const selectedSubjectsIds = useAtomValue(selectedSubjectsIdsAtom)
	const setIsDeleteModalVisible = useSetAtom(isDeleteSubjectModalVisibleAtom)

	return (
		<div className='bg-zinc-700 rounded-t-xl w-full p-2 flex  justify-center'>
			{selectedSubjectsIds.length > 0 && (
				<button
					className='mr-auto p-1 rounded-full hover:bg-zinc-600 transition-colors'
					onClick={() => setIsDeleteModalVisible(true)}
				>
					<DeleteIcon />
				</button>
			)}
			{selectedSubjectsIds.length === 1 && (
				<button className=' p-1 rounded-full hover:bg-zinc-600 transition-colors'>
					<EditIcon />
				</button>
			)}
			<button
				className='ml-auto p-1 rounded-full hover:bg-zinc-600 transition-colors'
				onClick={() => setAddModalVisible(true)}
			>
				<AddIcon />
			</button>
		</div>
	)
}
