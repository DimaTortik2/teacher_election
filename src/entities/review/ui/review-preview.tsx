import { useState } from 'react'

interface IProps {
	text: string
}

export function ReviewPreview({ text }: IProps) {
	const [isWrappedText, setIsWrappedText] = useState<boolean>(true)

	const handleButtonClick = () => {
		setIsWrappedText(prev => !prev)
	}

	const wrappedText = text.length > 250 ? text.slice(0, 250) + ' ...' : text

	return (
		<div className=' w-full flex flex-col gap-[5px] items-start text-xl px-2'>
			<div className='w-full flex items-center justify-between'>
				<p className='mr-2'> {isWrappedText ? wrappedText : text}</p>
			</div>
			<button type='button' onClick={handleButtonClick}>
				{wrappedText !== text && (
					<p className='text-base text-zinc-300'>
						{isWrappedText ? 'Читать дальше' : 'Скрыть'}
					</p>
				)}
			</button>
		</div>
	)
}
