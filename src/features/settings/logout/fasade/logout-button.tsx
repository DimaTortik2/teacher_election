import { useState } from 'react'
import { LogOutModal } from '../ui/logout-modal'

export function LogoutButton() {
	const [isModalVisible, setIsModalVisible] = useState(false)

	return (
		<>
			<button
				className='border-4 border-theme-500 flex justify-center text-white rounded-xl px-4 py-[10px]'
				onClick={() => setIsModalVisible(true)}
			>
				Выйти
			</button>

			<LogOutModal
				isVisible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
			/>
		</>
	)
}
