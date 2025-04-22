import { ReactNode } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { ISubject } from '../../../features/subjects'
import { ITeacherForm } from '../../../features/teachers'
import { InfinityData } from '../../../shared/model/interfaces/interfaces'

interface IProps {
	subjectsArray?: InfinityData<ISubject>[]
	children: ReactNode
	register?: UseFormRegister<ITeacherForm>
	isRequired?: boolean
}

export function SubjectListBox({
	subjectsArray,
	children,
	register,
	isRequired,
}: IProps) {
	return (
		<select
			{...(register ? register('subject', { required: isRequired }) : {})}
			size={7}
			className=' bg-theme-600 w-40 rounded-2xl text-white text-center
		 border-theme-400 custom-scrollbar rounded-scrollbar border-2 overflow-auto overflow-x-hidden'
			style={{
				maxHeight: '30vh', // Ограничение высоты
				overflowY: 'auto', // Прокрутка по вертикали
			}}
		>
			{subjectsArray?.map(subjects =>
				subjects.data?.map((subject: ISubject, index: number) => (
					<option
						key={index}
						className='p-2 cursor-pointer hover:bg-theme-800 transition-colors my-wrap-text'
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
