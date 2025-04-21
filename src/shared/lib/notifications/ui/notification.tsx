import { useAtomValue } from 'jotai'
import { notificationTextAtom, notificationTypeAtom } from '../model/atoms'
import clsx from 'clsx'

export function UiNotification({ className }: { className: string }) {
	const text = useAtomValue(notificationTextAtom)
	const type = useAtomValue(notificationTypeAtom)

	console.log({ type })
	console.log({ text })

	const bgStyle = {
		error: 'bg-red-400 shadow-red-400 shadow-lg',
		success: 'bg-green-400 shadow-green-400 shadow-lg',
		info: 'bg-gray-400 shadow-gray-400 shadow-lg',
		loading: 'bg-blue-600 shadow-blue-600 shadow-lg',
	}[type]

	return text ? (
		<div
			className={clsx(
				'w-full min-[500px]:w-[400px] py-4 flex justify-center items-center font-bold z-10',
				bgStyle,
				className
			)}
		>
			{text}
		</div>
	) : (
		<></>
	)
}
