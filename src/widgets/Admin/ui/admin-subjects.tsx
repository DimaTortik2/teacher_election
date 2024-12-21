import { AdminSubjectCard } from '../../../features/admin-features'
import { Button } from '../../../shared/ui/button'

export function AdminSubjects() {
	return (
		<div
			className='w-screen md:w-[80vw]
		 h-[90vh]
		 bg-zinc-600 flex flex-col items-center justify-start rounded-xl relative border-4 border-zinc-500 p-2'
		>
			<Button className='m-3'>Добавить предмет</Button>
			<div className='overflow-auto w-full rounded-xl custom-scrollbar p-4'>
				<AdminSubjectCard className='mt-2 mb-2' subject='Физика' />
				<AdminSubjectCard className='mt-2 mb-2' subject='Физика' />
				<AdminSubjectCard className='mt-2 mb-2' subject='Физика' />
				<AdminSubjectCard className='mt-2 mb-2' subject='Физика' />
				<AdminSubjectCard className='mt-2 mb-2' subject='Физика' />
				<AdminSubjectCard className='mt-2 mb-2' subject='Физика' />
				<AdminSubjectCard className='mt-2 mb-2' subject='Физика' />
				<AdminSubjectCard className='mt-2 mb-2' subject='Физика' />
				<AdminSubjectCard className='mt-2 mb-2' subject='Физика' />
				<AdminSubjectCard className='mt-2 mb-2' subject='Физика' />
				<AdminSubjectCard className='mt-2 mb-2' subject='Физика' />
				<AdminSubjectCard className='mt-2 mb-2' subject='Физика' />
				<AdminSubjectCard className='mt-2 mb-2' subject='Физика' />
				<AdminSubjectCard className='mt-2 mb-2' subject='Физика' />
				<AdminSubjectCard className='mt-2 mb-2' subject='Физика' />
			</div>
		</div>
	)
}
