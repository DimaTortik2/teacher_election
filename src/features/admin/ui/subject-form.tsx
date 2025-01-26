import { KeyboardEvent, useEffect } from 'react'

import { Button } from '../../../shared/ui/button/button'
import { useForm } from 'react-hook-form'
import { ChangeEvent } from 'react'
import { ISubject } from '../../../shared'

interface IProps {
	handleClick: () => void
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	value: string
}

export function SubjectForm({ handleClick, value, onChange }: IProps) {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
		setValue,
	} = useForm<Omit<ISubject, 'id'>>({
		mode: 'onChange', // Валидировать при изменении
	})

	const handlerKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
		if (e.code === 'Enter') {
			reset()
			setValue('title',value)
		}
	}

	useEffect(() => {
		console.log('errors', errors)
	}, [errors])

	return (
		<form
			onSubmit={handleSubmit(handleClick)}
			className='flex flex-col content-center items-center w-full'
			onKeyDown={handlerKeyDown}
		>
			<Button type='submit' className='m-3'>
				Добавить предмет
			</Button>
			<div className='py-4 bg-zinc-700 transition-colors text-white px-10 rounded-xl text-xl w-full flex items-center mb-4 flex-col'>
				<input
					type='text'
					{...register('title', {
						required: 'навзание предмета',
						minLength: {
							value: 4,
							message: 'навзание предмета > 3 букв',
						},
					})}
					className='py-3 bg-zinc-400 transition-colors px-10 rounded-xl text-2xl text-zinc-800 w-full flex items-start'
					value={value}
					onChange={onChange}
				/>
				{errors.title && <p className='mt-2'>{errors.title.message}</p>}
			</div>
		</form>
	)
}
