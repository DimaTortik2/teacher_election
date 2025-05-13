import { BasicModal } from '../../../shared/ui/modal/basic-modal'

interface IProps {
	onClose: () => void
	onDeleteMany: () => void
}
export function DeleteSubjectsModal({ onClose, onDeleteMany }: IProps) {
	return (
		<BasicModal onClose={onClose} className=' w-full max-w-lg mx-2'>
			<div className='w-full h-full flex gap-10 mt-10 flex-col justify-center items-center text-xl'>
				<p className='mt-auto text-center'>
					Вы точно хотите <span className='text-red-300'>удалить </span>
					предметы ?
				</p>
				<button
					type='button'
					className='mt-auto w-full py-2 bg-zinc-600 hover:bg-zinc-800 rounded-b-2xl'
					onClick={onDeleteMany}
				>
					Подтвердить
				</button>
			</div>
		</BasicModal>
	)
}
