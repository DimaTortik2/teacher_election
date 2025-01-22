import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import sendIcon from '../../../../public/send-message-icon.svg'
import {
	Control,
	Controller,
	FieldErrors,
} from 'react-hook-form'
import { ITeacherReview } from '../../../shared'

import { MessageInput } from './message-input'

interface IProps {
	className?: string
	onHeightChange: (height: number) => void
	control: Control<ITeacherReview>
	onTextAreaTouch: () => void
	errors: FieldErrors<ITeacherReview>
}

export function MesssageForm({
	className,
	onHeightChange,
	control,
	onTextAreaTouch,
	errors,
}: IProps) {
	const formRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!formRef.current) return
		const observer = new ResizeObserver(() => {
			if (formRef.current && onHeightChange) {
				onHeightChange(formRef.current.offsetHeight)
			}
		})

		observer.observe(formRef.current)
		return () => observer.disconnect()
	}, [onHeightChange])

	return (
		<div
			ref={formRef}
			className={clsx(
				'bg-zinc-700 transition-colors text-white  text-xl flex items-start flex-col ',
				className
			)}
		>
			<div className='w-full flex justify-between gap-3'>
				<p className=' sm:text-xl text-lg'>Оставьте мнение</p>
				<span className='text-zinc-400 sm:text-lg text-base text-center'>
					Ваша запись пройдет модерацию
				</span>
			</div>
			<div className='flex gap-3 items-end pt-2 w-full'>
				<div className='border-b-zinc-400 border-b-2 px-1 w-full'>
					<MessageInput errorMessage={errors.message?.message} onTextAreaTouch={onTextAreaTouch} control={control} />
				</div>
				<button type='submit' className=' text-white'>
					<img src={sendIcon} alt='Ок' className='h-10' />
				</button>
			</div>
		</div>
	)
}
