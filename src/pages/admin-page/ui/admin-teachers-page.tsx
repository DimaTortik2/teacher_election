import { AdminTeachers } from "../../../widgets/Admin";

export function AdminTeachersPage() {
	return (
		<div className='w-screen h-screen flex flex-col items-center'>
			<h1 className='flex content-center items-center h-[10vh] text-start text-2xl sm:text-[2.5rem] mb-2'>
				Управление учителями
			</h1>
			<AdminTeachers/>
		</div>
	)
}
