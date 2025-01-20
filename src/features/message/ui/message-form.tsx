import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import sendIcon from '../../../../public/send-message-icon.svg'
import editIcon from '../../../../public/edit-icon.svg'

interface IProps {
	className?: string
	onHeightChange: (height: number) => void
}

export function MesssageForm({ className, onHeightChange }: IProps) {
	const [inputText, setInputText] = useState<string>('')
	const inputRef = useRef<HTMLTextAreaElement | null>(null)
	const formRef = useRef<HTMLDivElement | null>(null)
	

	const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
		const textArea = inputRef.current
		if (!textArea) return
		textArea.style.height = 'auto'

		const scrollHeight = textArea.scrollHeight
		const maxHeight = 8 * parseFloat(getComputedStyle(textArea).lineHeight)

		textArea.style.height = `${Math.min(scrollHeight, maxHeight)}px`
		setInputText((event.target as HTMLTextAreaElement).value)
	}

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
					<textarea
						placeholder='Препод ващеее....'
						ref={inputRef}
						name='postContent'
						rows={1}
						cols={40}
						onInput={handleInput}
						className=' bg-transparent border-0 transition-colors rounded-xl text-xl text-zinc-100 w-full flex items-start justify-center custom-scrollbar rounded-scrollbar inverse-colors resize-none placeholder:text-zinc-600 appearance-none focus:outline-none focus:ring-0 focus:border-none '
					/>
				</div>
				<button className=' text-white h-8'>
					<img src={sendIcon} alt='Ок' className='h-10' />
				</button>
			</div>
		</div>
	)
}
