import { SyncLoader } from "react-spinners"

interface IProps {
	index : number
	title: string
}

export function OptimisticCard({ title, index }: IProps) {
	return (
		<li
			className={
				'py-4 px-4 bg-zinc-700 transition-colors text-white rounded-xl text-xl w-full flex justify-between'
			}
			key={index}
		>
			<div className='w-4/6 my-wrap-text'>{title}</div>
			<SyncLoader color='rgb(161 161 170)' />
		</li>
	)
}
