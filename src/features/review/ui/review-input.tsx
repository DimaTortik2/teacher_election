import { Control, Controller } from 'react-hook-form'
import { useRef, useState } from 'react'
import debounce from 'lodash.debounce'
import clsx from 'clsx'
import { IPostTeacherReview } from '../model/interfaces/teacher-review.interface'

interface IProps {
	control: Control<Omit<IPostTeacherReview, 'teacherId'>>
	onTextAreaTouch: () => void
	errorMessage: string | undefined
}

export function MessageInput({
	control,
	onTextAreaTouch,
	errorMessage,
}: IProps) {
	const inputRef = useRef<HTMLTextAreaElement | null>(null)
	const [inputText, setInputText] = useState<string>('')

	console.log(inputText)//пока так 

	
	//функция обернута в debounce для оптимизации, она тут нужна!
	const handleInput = debounce(
		(event: React.FormEvent<HTMLTextAreaElement>) => {
			const textArea = inputRef.current
			if (!textArea) return

			textArea.style.height = 'auto'
			const scrollHeight = textArea.scrollHeight
			const maxHeight = 8 * parseFloat(getComputedStyle(textArea).lineHeight)
			textArea.style.height = `${Math.min(scrollHeight, maxHeight)}px`
			setInputText((event.target as HTMLTextAreaElement).value)
		},
		100
	)

	return (
		<Controller
			name='message'
			control={control}
			rules={{ required: true }}
			render={({ field }) => (
				<textarea
					value={field.value || ''} // Явно задаем значение с fallback
					onChange={field.onChange} // Явно передаем onChange
					onBlur={field.onBlur} // Явно передаем onBlur
					placeholder={errorMessage ? errorMessage : 'Препод ващеее....'}
					ref={inputRef}
					name='postContent'
					rows={1}
					cols={1}
					onInput={handleInput}
					className={clsx(
						' bg-transparent border-0 transition-colors rounded-xl text-xl text-zinc-100 w-full flex items-start justify-center custom-scrollbar rounded-scrollbar inverse-colors resize-none placeholder:text-zinc-600 appearance-none focus:outline-none focus:ring-0 focus:border-none ',
						errorMessage && 'placeholder:text-red-400'
					)}
					id='messageInput'
					onClick={onTextAreaTouch}
				/>
			)}
		/>
	)
}
