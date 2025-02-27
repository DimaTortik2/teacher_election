import clsx from 'clsx'
import { useState } from 'react'
import crossIcon from '../../../../public/cross-icon.svg'
import editIcon from '../../../../public/edit-icon.svg'
interface IProps {
	onOpenEditTools: (idx: number) => void
	onCloseEditTools: () => void
	visibleIdx: number | null
	title: string
	className?: string
	onDelete: () => void
	onEdit: (title: string) => void
	currentIdx: number
}

export function AdminSubjectCard({
	onOpenEditTools,
	onCloseEditTools,
	visibleIdx,
	title,
	className,
	onDelete,
	onEdit,
	currentIdx,
}: IProps) {
	const [inputText, setInputText] = useState<string>(title)

	const handleEdit = (title: string) => {
		onEdit(title)
		onCloseEditTools()
	}

	return (
		<li
			className={clsx(
				className,
				'py-4 px-4 bg-zinc-700 transition-colors text-white rounded-xl text-xl w-full flex  justify-between'
			)}
		>
			{currentIdx === visibleIdx ? (
				<div className='flex gap-1 sm:gap-3 justify-between items-center ml-1 w-full'>
					<input
						type='text'
						className=' border-b-blue-50 border-b-[1px] w-1/2 bg-zinc-700 text-white flex items-start h-[2rem] appearance-none focus:outline-none focus:ring-0 focus:border-none'
						id='editInput'
						defaultValue={title}
						style={{
							maxWidth: `${inputText.length + 1}ch`,
						}}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setInputText(e.target.value)
						}
						autoFocus
					/>

					<div className='flex gap-3 items-center justify-center'>
						<button
							className='px-2 sm:px-4 py-1 bg-zinc-500 hover:bg-zinc-600 transition-colors rounded-xl'
							onClick={() => handleEdit(inputText)}
						>
							Ок
						</button>
						<button onClick={onCloseEditTools}>
							<img src={editIcon} className='h-8 w-8' />
						</button>
					</div>
				</div>
			) : (
				<>
					<div className='my-wrap-text'>{title}</div>
					<div className='flex gap-3 justify-end'>
						<button
							onClick={() => {
								onOpenEditTools(currentIdx)
								console.log('tilte = ', title, 'len', title.length)
							}}
						>
							<img src={editIcon} className='h-8' />
						</button>

						<button onClick={onDelete}>
							<img src={crossIcon} className='h-8' />
						</button>
					</div>
				</>
			)}
		</li>
	)
}
