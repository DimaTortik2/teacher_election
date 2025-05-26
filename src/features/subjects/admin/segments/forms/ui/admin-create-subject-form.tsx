import { KeyboardEvent, useState } from 'react'
import { Button } from '@/shared/ui/buttons/button'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'
import { useSetAtom } from 'jotai'
import { isAddSubjectModalVisibleAtom } from '@/app/store/subjects-table.store'
import { ISubject } from '@/features/subjects/model/interfaces/subject.interfaces'
import { usePostSubject } from '@/features/subjects/admin/api/queries/admin-subjects.queries'
import { COMPONENTS_CLASSNAMES } from '@/app/model/style-constants'
import { useIsMobile } from '@/shared/model/hooks/mobile/use-is-mobile'

export function AdminCreateSubjectForm() {
	const { postSubject } = usePostSubject()

	const setIsModalVisible = useSetAtom(isAddSubjectModalVisibleAtom)
	const { isMobile } = useIsMobile(640)
	const [inputText, setInputText] = useState('')

	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
		setValue,
	} = useForm<Omit<ISubject, 'id'>>({
		mode: 'onChange',
	})

	const onSubmit = () => {
		postSubject({ title: inputText })
		setInputText('')
		setIsModalVisible(false)
	}

	const handlerKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
		if (e.code === 'Enter') {
			reset()
			setValue('title', inputText)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} onKeyDown={handlerKeyDown}>
			<div
				className='relative w-full max-w-lg bg-zinc-700 rounded-2xl transition-all transform'
				onClick={e => e.stopPropagation()}
			>
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
								className={COMPONENTS_CLASSNAMES.input}
								value={inputText}
								onChange={e => setInputText(e.target.value)}
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
