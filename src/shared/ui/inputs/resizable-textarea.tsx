import clsx from 'clsx'
import { Noop } from 'react-hook-form'
import { useHandleInput } from './model/hooks/use-handle-input'

export function ResizableTextarea({
	value,
	onChange,
	onBlur,
	className,
}: {
	value?: string | null
	onChange?: (...event: unknown[]) => void
	onBlur?: Noop
	className?: string
}) {
	const { handleInput, inputRef } = useHandleInput()

	return (
		<textarea
			value={value || ''}
			onChange={onChange}
			onBlur={onBlur}
			placeholder='Препод ващеее....'
			ref={inputRef}
			name='postContent'
			rows={1}
			onInput={handleInput}
			className={clsx(
				'bg-transparent w-full resize-none appearance-none focus:outline-none focus:ring-0 focus:border-none transition-colors',
				className,
				!className && 'text-xl text-zinc-100 placeholder:text-zinc-600'
			)}
		/>
	)
}
