import { useNavigate } from 'react-router'

import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { Button, useSignOut } from '../../../shared'

export function SettingLogOut() {
	const { signOut, signOutIsSuccess } = useSignOut()

	const navigate = useNavigate()

	const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

	const handleModalIsVisible = () => {
		setIsModalVisible(prev => !prev)
	}

	const handleSignOut = () => {
		signOut()
		navigate('/')
	}

	useEffect(() => {
		if (signOutIsSuccess) {
			setIsModalVisible(false)
		}
	}, [signOutIsSuccess, navigate])

	const style = {
		color: 'white',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 350,
		bgcolor: '#27272a',
		border: '2px solid #3f3f46',
		borderRadius: '1rem',
		boxShadow: 24,
		p: 4,
	}
	return (
		<>
			<button
				className='bg-zinc-700 flex justify-center text-white rounded-2xl'
				onClick={handleModalIsVisible}
			>
				Выйти
			</button>
			<Modal
				open={isModalVisible}
				onClose={handleModalIsVisible}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						Вы точно хотите <span className='text-red-500'>выйти</span> ?
					</Typography>
					<Typography id='modal-modal-description' sx={{ mt: 2, mb: 7 }}>
						Вы выйдете с акканта и Вас перенаправит на страницу регистрации
					</Typography>
					<div className='w-full flex justify-center'>
						<Button
							onClick={handleSignOut}
							className='py-[4px] px-4 absolute bottom-2 '
						>
							Подтвердить
						</Button>
					</div>
				</Box>
			</Modal>
		</>
	)
}
