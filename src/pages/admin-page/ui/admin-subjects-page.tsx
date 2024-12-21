import { AdminSubjects } from '../../../widgets/Admin/ui/admin-subjects'

export function AdminSubjectsPage() {
	return (
		<div className='w-screen h-screen flex flex-col items-center'>
			<h1 className='flex content-center items-center h-[10vh] text-center text-2xl sm:text-[2.5rem]'>
				Управление предметами
			</h1>
			<AdminSubjects />
		</div>
	)
}
