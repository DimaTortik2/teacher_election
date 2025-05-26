import { useNavigate } from 'react-router'
import { useSignOut } from '@/features/auth'
import { BasicModal } from '@/shared/ui/modal/basic-modal'
import { ModalBottomButton } from '@/shared/ui/buttons/modal-bottom-button'

export function LogOutModal({
	isVisible,
	onClose,
}: {
	isVisible: boolean
	onClose: () => void
}) {
	const { signOut } = useSignOut()

	const navigate = useNavigate()

	const handleSignOut = () => {
		signOut()
		navigate('/')
	}

	return (
		<BasicModal isVisible={isVisible} onClose={onClose}>
			<div className='w-full max-w-[350px] rounded-2xl flex flex-col items-center justify-center pt-3'>
				<h1 className='p-2 mt-4 text-2xl'>
					Вы точно хотите <span className='text-red-300'>выйти</span> ?
				</h1>
				<label className='my-6 mx-4 text-lg text-center'>
					Вы выйдете с акканта и Вас перенаправит на страницу регистрации
				</label>
				<div className='w-full flex justify-center'>
					<ModalBottomButton onClick={handleSignOut}>
						Подтвердить
					</ModalBottomButton>
				</div>
			</div>
		</BasicModal>
	)
}
