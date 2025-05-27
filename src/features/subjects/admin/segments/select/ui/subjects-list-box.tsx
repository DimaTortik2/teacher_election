import { UseFormRegister } from 'react-hook-form'
import { ITeacherForm } from '@/features/teachers/admin'
import { useGetSubjects } from '@/features/subjects'
import { InfinityList } from '@/shared/ui/list/infinity-list'
import { SubjectItem } from './subject-item'

interface IProps {
	register?: UseFormRegister<ITeacherForm>
	isRequired?: boolean
}

export function SubjectsListBox({ register, isRequired }: IProps) {
	const {
		data,
		hasNextPage,
		fetchNextPage,
		getSubjectsIsLoading,
		isFetchingNextPage,
	} = useGetSubjects()

	console.log(register, isRequired) // пока так

	return (
		// <select
		// 	{...(register ? register('subject', { required: isRequired }) : {})}
		// 	size={7}
		// 	className=' bg-theme-600 w-40 rounded-2xl text-white text-center
		//  border-theme-400 custom-scrollbar rounded-scrollbar border-2 overflow-auto overflow-x-hidden'
		// 	style={{
		// 		maxHeight: '30vh', // Ограничение высоты
		// 		overflowY: 'auto', // Прокрутка по вертикали
		// 	}}
		// >
		// 	{data?.map((subject: ISubject) => (
		// 		<option
		// 			key={subject.id}
		// 			className='p-2 cursor-pointer hover:bg-theme-800 transition-colors my-wrap-text'
		// 			value={JSON.stringify({
		// 				subjectId: subject.id,
		// 				title: subject.title,
		// 			})}
		// 		>
		// 			{subject.title}
		// 		</option>
		// 	))}
		// </select>

		<InfinityList
			fetchNextPage={fetchNextPage}
			hasNextPage={hasNextPage}
			isFetchingNextPage={isFetchingNextPage}
			isLoading={getSubjectsIsLoading}
			renderItem={subject => (
				<SubjectItem
					key={subject.id}
					title={subject.title}
					value={JSON.stringify({
						subjectId: subject.id,
						title: subject.title,
					})}
				/>
			)}
			items={data}
			className={
				'bg-theme-600 w-40 rounded-2xl text-white text-center border-theme-400 custom-scrollbar rounded-scrollbar border-2 overflow-auto overflow-x-hidden max-h-[30vh]'
			}
			loaderSize={10}
		/>
	)
}
