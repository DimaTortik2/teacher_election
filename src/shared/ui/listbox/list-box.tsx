import { ReactNode } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { ISubjectsResponse } from '../../../features/subjects'
import { ITeacherForm } from '../../../features/teachers'

interface IProps {
	subjectsArray?: ISubjectsResponse[]
	children: ReactNode
	register?: UseFormRegister<ITeacherForm>
}

export function MyListBox({ subjectsArray, children, register }: IProps) {
	return (
		<select
			{...(register ? register('subject', { required: true }) : {})}
			size={7}
			className=' bg-[rgba(63,63,70,0.96)] w-40 rounded-2xl text-white text-center
		 border-zinc-400 custom-scrollbar rounded-scrollbar border-2 overflow-auto overflow-x-hidden'
			style={{
				maxHeight: '30vh', // Ограничение высоты
				overflowY: 'auto', // Прокрутка по вертикали
			}}
		>
			{subjectsArray?.map(subjects =>
				subjects.data?.map((subject, index:number) => (
					<option
						key={index}
						className='p-2 cursor-pointer hover:bg-zinc-800 transition-colors my-wrap-text'
						value={JSON.stringify({
							subjectId: subject.id,
							title: subject.title,
						})}
					>
						{subject.title}
					</option>
				))
			)}
			{children}
		</select>
	)
}
