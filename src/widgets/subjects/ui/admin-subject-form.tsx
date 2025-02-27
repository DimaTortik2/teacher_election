import { KeyboardEvent, useEffect, useState } from 'react'
import { Button } from '../../../shared/ui/buttons-links/button'
import { useForm } from 'react-hook-form'
import { ChangeEvent } from 'react'
import { UseMutateFunction } from '@tanstack/react-query'
import { ISubject } from '../../../features/subjects'

interface IProps {
	postSubject: UseMutateFunction<
		ISubject,
		Error,
		Pick<ISubject, 'title'>,
		unknown
	>
}

export function SubjectForm({ postSubject }: IProps) {
	const [inputText, setInputText] = useState('')

	const handleClick = () => {
		postSubject({ title: inputText })
		setInputText('')
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
		mode: 'onChange', // Валидировать при изменении
	})

	const handlerKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
		if (e.code === 'Enter') {
			reset()
			setValue('title', inputText)
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
			<Button type='submit' className='m-3 bg-zinc-700'>
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
					value={inputText}
					onChange={onChange}
				/>
				{errors.title && <p className='mt-2'>{errors.title.message}</p>}
			</div>
		</form>
	)
}
