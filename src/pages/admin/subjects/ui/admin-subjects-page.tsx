import Table from '@mui/material/Table'
import { TablePagination } from '@mui/material'
import { Layout } from '../../ui/layout'
import { useAdminSubjects } from '../model/hooks/use-admin-subjects'
import {
	SubjectToolsTable,
	SubjectHeadTable,
	SubjectBodyTable,
	useAdminSubjectTable,
} from '@/features/subjects/admin/segments/table'
import {
	AdminCreateSubjectModal,
	AdminDeleteSubjectsModal,
} from '@/widgets/teachers/admin/modals/subjects'

export function AdminSubjectsPage() {
	const { setLimit, setPage, page, data, limit } = useAdminSubjects()

	const { handleChangeRowsPerPage, handleChangePage } = useAdminSubjectTable({
		setLimit,
		setPage,
	})

	return (
		<Layout text='Управление предметами'>
			<SubjectToolsTable />
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<SubjectHeadTable limit={limit} />
				<SubjectBodyTable limit={limit} />
			</Table>

			<TablePagination
				rowsPerPageOptions={[5, 7]}
				onRowsPerPageChange={handleChangeRowsPerPage}
				component='div'
				count={data?.count || 0}
				rowsPerPage={limit}
				page={Math.min(
					page,
					Math.max(0, Math.ceil((data?.count || 0) / limit) - 1)
				)}
				onPageChange={handleChangePage}
			/>

			<AdminCreateSubjectModal />
			<AdminDeleteSubjectsModal />
		</Layout>
	)
}
