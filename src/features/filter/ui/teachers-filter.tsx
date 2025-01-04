import { SelectChangeEvent } from '@mui/material'
import { SubjectsMenu } from '../../../widgets/user'

const onClick = (event: SelectChangeEvent<string>) => {
	console.log(event.target.value)
}

export function TeacherFilter() {
	return (
		<div className='w-full flex bg-zinc-800 py-2'>
			<p className='flex text-center items-center px-2'>Фильтрация</p>
			<SubjectsMenu handleClick={onClick} buttonText='По предмету' />
		</div>
	)
}
