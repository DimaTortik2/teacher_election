import { SubjectsMenu } from '../../../widgets/user'

export function TeacherFilter() {
	return (
		<div className='flex'>
			<p className='flex text-center items-center px-2'>Фильтрация</p>
			<SubjectsMenu buttonText='По предмету' />
		</div>
	)
}
