import { SubjectsListBox } from './subjects-list-box'
import { BasicModal } from '@/shared/ui/modal/basic-modal'
import { ModalBottomButton } from '@/shared/ui/buttons/modal-bottom-button'
import { Control, Controller, UseFormSetValue } from 'react-hook-form'
import { ICreateTeacherForm } from '@/features/teachers/admin/model/interfaces/admin-teacher.interface'
import RefreshIcon from '@mui/icons-material/Refresh'

export function SubjectsSelectModal({
	control,
	isVisible,
	onClose,
	setValue,
}: {
	control?: Control<ICreateTeacherForm>
	setValue: UseFormSetValue<ICreateTeacherForm>
	isVisible: boolean
	onClose: () => void
}) {
	return (
		<BasicModal
			isVisible={isVisible}
			onClose={onClose}
			zIndex={1301}
			hasCloseButton={false}
			title='Выбор предметов'
			headerOptionsComponent={
				<div className='ml-auto flex items-center justify-end'>
					<button
						type='button'
						onClick={() => setValue('selectedSubjects', [])}
						className='m-2 p-1 rounded-full hover:bg-zinc-600 transition-colors '
					>
						<RefreshIcon />
					</button>
				</div>
			}
		>
			<Controller
				name='selectedSubjects'
				control={control}
				render={({ field }) => (
					<SubjectsListBox
						selectedSubjects={field.value}
						onChange={field.onChange}
						className='w-[90vw] max-w-[800px] h-[50vh]'
					/>
				)}
			/>

			<ModalBottomButton onClick={onClose}>Ок</ModalBottomButton>
		</BasicModal>
	)
}
