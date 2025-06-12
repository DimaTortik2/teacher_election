import { ReactNode } from 'react'
import { BasicModal } from '../modal/basic-modal'

export function ListShorterModal({
	isVisible,
	onClose,
	children,
}: {
	isVisible: boolean
	onClose: () => void
	children: ReactNode
}) {
	return (
		<BasicModal isVisible={isVisible} onClose={onClose} title={'Остальное'}>
			{children}
		</BasicModal>
	)
}
