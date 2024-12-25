import { AdminSubjects } from '../../../widgets/Admin/ui/admin-subjects'

export function AdminSubjectsPage() {
	return (
		<div className='w-screen h-screen flex flex-col items-center'>
			<h1 className='flex content-center items-center h-[10vh] text-start text-2xl sm:text-[2.5rem] mb-2'>
				Управление предметами
			</h1>
			<AdminSubjects />
		</div>
	)
}
