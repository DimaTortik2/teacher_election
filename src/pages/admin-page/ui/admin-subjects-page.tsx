import { AdminSubjects } from '../../../widgets/subjects/ui/admin-subjects'
import { AdminLayout } from '../../../widgets/layouts/admin/ui/admin-layout'

export function AdminSubjectsPage() {
	return (
		<AdminLayout text='Управление предметами'>
			<AdminSubjects />
		</AdminLayout>
	)
}
