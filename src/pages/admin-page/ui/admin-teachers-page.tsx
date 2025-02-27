import { AdminLayout } from '../../../widgets/layouts/admin/ui/admin-layout'
import { AdminTeachers } from '../../../widgets/teachers'

export function AdminTeachersPage() {
	return (
		<AdminLayout text='Управление учителями'>
			<AdminTeachers />
		</AdminLayout>
	)
}
