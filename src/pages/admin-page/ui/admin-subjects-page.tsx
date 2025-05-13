import Table from '@mui/material/Table'
import { TablePagination } from '@mui/material'
import {
	SubjectBodyTable,
	SubjectHeadTable,
	SubjectToolsTable,
	useAdminSubjects,
	useAdminSubjectTable,
} from '../../../features/subjects'
import { AdminLayout } from '../../../widgets/layouts/admin/ui/admin-layout'
import { DeleteSubjectsModal, SubjectForm } from '../../../widgets/subjects'

export function AdminSubjectsPage() {
	const {
		postSubject,
		setLimit,
		setPage,
		page,
		data,
		limit,
		deleteSubjects,
		selectedSubjectsIds,
		isDeleteModalVisible,
		setIsDeleteModalVisible,
		isAddSubjectModalVisible,
	} = useAdminSubjects()

	const { handleChangeRowsPerPage, handleChangePage } = useAdminSubjectTable({
		setLimit,
		setPage,
	})

	return (
		<AdminLayout text='Управление предметами'>
			<div className='w-screen md:w-[80vw] h-[90vh] bg-zinc-600 flex flex-col items-center justify-start rounded-xl  border-4 border-zinc-500 '>
				{isAddSubjectModalVisible && (
					<SubjectForm postSubject={postSubject} className='absolute top-0' />
				)}
				{isDeleteModalVisible && (
					<DeleteSubjectsModal
						onDeleteMany={() => deleteSubjects(selectedSubjectsIds)}
						onClose={() => setIsDeleteModalVisible(false)}
					/>
				)}
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
					// labelDisplayedRows={() => ''}
					onPageChange={handleChangePage}
				/>
			</div>
		</AdminLayout>
	)
}
