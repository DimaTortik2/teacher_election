import { KeyboardEvent, useState } from 'react'
import { Button } from '../../../shared/ui/buttons-links/button'
import { useForm } from 'react-hook-form'
import { ChangeEvent } from 'react'
import { UseMutateFunction } from '@tanstack/react-query'
import { ISubject } from '../../../features/subjects'
import clsx from 'clsx'
import { useSetAtom } from 'jotai'
import { isAddSubjectModalVisibleAtom } from '../../../app/store/subjects.store'
import ClearIcon from '@mui/icons-material/Clear'
import { useIsMobile } from '../../../shared/lib/mobile'
import { STYLE_CONSTANTS } from '../../../app/style/style-constants'

interface IProps {
	postSubject: UseMutateFunction<
		ISubject,
		Error,
		Pick<ISubject, 'title'>,
		unknown
	>
	className?: string
}

export function SubjectForm({ postSubject, className }: IProps) {
	const setIsModalVisible = useSetAtom(isAddSubjectModalVisibleAtom)
	const { isMobile } = useIsMobile(640)
	const [inputText, setInputText] = useState('')

	const handleClick = () => {
		postSubject({ title: inputText })
		setInputText('')
		setIsModalVisible(false)
	}

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value)
	}

	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
		setValue,
	} = useForm<Omit<ISubject, 'id'>>({
		mode: 'onChange',
	})

	const handlerKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
		if (e.code === 'Enter') {
			reset()
			setValue('title', inputText)
		}
	}

	return (
		<form
			onSubmit={handleSubmit(handleClick)}
			className={clsx(
				'fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.8)] z-50',
				className
			)}
			onKeyDown={handlerKeyDown}
			onClick={() => setIsModalVisible(false)}
		>
			<div
				className='relative w-full max-w-lg mx-4 bg-zinc-700 rounded-2xl transition-all transform'
				onClick={e => e.stopPropagation()}
			>
				{/* Header */}
				<div className='flex items-center justify-between p-4 border-b border-zinc-600'>
					<h2 className='text-xl font-semibold text-white'>Добавить предмет</h2>
					<button
						onClick={() => setIsModalVisible(false)}
						className='p-1 rounded-full hover:bg-zinc-600 transition-colors'
					>
						<ClearIcon className='text-zinc-400' />
					</button>
				</div>

				{/* Form Content */}
				<div className='p-6'>
					{errors.title && (
						<p className='mb-2 text-sm text-red-300'>{errors.title.message}</p>
					)}

					<div
						className={clsx(
							'flex',
							isMobile ? 'flex-col gap-4' : 'flex-row gap-3'
						)}
					>
						<div className='flex-1 flex-col flex justify-center'>
							{isMobile && (
								<label className='block text-sm font-medium text-zinc-300 mb-1'>
									Название
								</label>
							)}
							<input
								type='text'
								{...register('title', {
									required: 'Введите название предмета',
									minLength: {
										value: 4,
										message: 'Название предмета должно быть больше 3 букв',
									},
								})}
								className={STYLE_CONSTANTS.input}
								value={inputText}
								onChange={onChange}
							/>
						</div>
						<Button
							type='submit'
							className={clsx(
								'px-6 py-2 text-white bg-zinc-600 hover:bg-zinc-800',
								'rounded-lg transition-colors',
								isMobile ? 'w-full' : 'whitespace-nowrap'
							)}
						>
							Добавить предмет
						</Button>
					</div>
				</div>
			</div>
		</form>
	)
}
