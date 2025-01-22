import { Control, Controller } from 'react-hook-form'
import { ITeacherReview } from '../../../shared'
import { useRef, useState } from 'react'
import debounce from 'lodash.debounce'

interface IProps {
	control: Control<ITeacherReview>
	onTextAreaTouch: () => void
}

export function MessageInput({ control, onTextAreaTouch }: IProps) {
	const inputRef = useRef<HTMLTextAreaElement | null>(null)
	const [inputText, setInputText] = useState<string>('')

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
			render={({ field }) => (
				<textarea
					{...field}
					placeholder='Препод ващеее....'
					ref={inputRef}
					name='postContent'
					rows={1}
					cols={1}
					onInput={handleInput}
					className=' bg-transparent border-0 transition-colors rounded-xl text-xl text-zinc-100 w-full flex items-start justify-center custom-scrollbar rounded-scrollbar inverse-colors resize-none placeholder:text-zinc-600 appearance-none focus:outline-none focus:ring-0 focus:border-none '
					id='messageInput'
					onClick={onTextAreaTouch}
				/>
			)}
		/>
	)
}
