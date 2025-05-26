import { SubjectsFilter } from '../subjects-filter'

export function TeacherFilter() {
	return (
		<div className='flex'>
			<p className='flex text-center items-center px-2'>Фильтрация</p>
			<SubjectsFilter buttonText='По предмету' />
		</div>
	)
}
