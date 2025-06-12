import Tooltip from '@mui/material/Tooltip'
import clsx from 'clsx'
import { useState } from 'react'
import { ListShorterModal } from '../list-shorter-modal'

export function ListShorter({
	list,
	maxCount = 2,
	className,
}: {
	list?: string[]
	maxCount?: number
	className?: string
}) {
	const [isModalVisible, setIsModalVisible] = useState(false)

	if (!list) return <></>

	const isBigList = list.length > maxCount

	const allList = list.join(', ')
	const startList = list.slice(0, maxCount).join(', ')
	const restList = list.slice(maxCount).join(', ')

	return (
		<div className={clsx('flex', className)}>
			<span className='max-w-[200px]'>{isBigList ? startList : allList}</span>

			{isBigList && (
				<div>
					<Tooltip
						title={restList}
						componentsProps={{
							tooltip: {
								sx: {
									fontSize: '1rem',
								},
							},
						}}
					>
						<span
							className='ml-2 opacity-50 select-none cursor-pointer'
							onClick={() => setIsModalVisible(true)}
						>
							ещё {list.length - maxCount}
						</span>
					</Tooltip>
				</div>
			)}
			<ListShorterModal
				isVisible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
			>
				<div className='w-[90vw] max-w-[900px] min-h-[300px] p-5'>
					<div>
						<p>{restList}</p>
					</div>
				</div>
			</ListShorterModal>
		</div>
	)
}
