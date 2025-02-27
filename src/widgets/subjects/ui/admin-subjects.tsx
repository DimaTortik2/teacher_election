import Table from '@mui/material/Table'
import { TablePagination } from '@mui/material'
import {
	SubjectBodyTable,
	SubjectHeadTable,
	useAdminSubjects,
	useAdminSubjectTable,
} from '../../../features/subjects'
import { SubjectForm } from './admin-subject-form'

export function AdminSubjects() {
	const { postSubject, setLimit, setPage, page, data, limit } =
		useAdminSubjects()

	const { handleChangeRowsPerPage, handleChangePage } = useAdminSubjectTable({
		setLimit,
		setPage,
	})

	return (
		<div
			className='w-screen md:w-[80vw]
		 h-[90vh]handleClick
		 bg-zinc-600 flex flex-col items-center justify-start rounded-xl relative border-4 border-zinc-500 p-2'
		>
			<SubjectForm postSubject={postSubject} />

			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<SubjectHeadTable />
				<SubjectBodyTable subjectsArray={data?.items} />
			</Table>
			<TablePagination
				rowsPerPageOptions={[5, 7]}
				onRowsPerPageChange={handleChangeRowsPerPage}
				component='div'
				count={data?.count || 10000000}
				rowsPerPage={limit}
				page={page}
				// labelDisplayedRows={() => ''}
				onPageChange={handleChangePage}
			/>
		</div>
	)
}
