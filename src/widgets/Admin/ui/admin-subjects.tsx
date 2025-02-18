import { useEffect, useState } from 'react'
import { AdminSubjectCardsList, SubjectForm } from '../../../features/admin'
import { ChangeEvent } from 'react'
import { usePostSubject, useGetSubjects } from '../../../shared'
import Table from '@mui/material/Table'
import { TablePagination } from '@mui/material'
import { SubjectBodyTable, SubjectHeadTable } from '../../../features/subject'
import { useGetPaginatedSubjects } from '../../../shared/api/queries/subject.queries'

export function AdminSubjects() {
	const [page, setPage] = useState<number>(0)
	const [limit, setLimit] = useState<number>(5)
	const [title, setTitle] = useState<string | undefined>(undefined)

	const {
		data,
		getPaginatedSubjectsIsLoading,
		getPaginatedSubjectsIsSuccess,
		getPaginatedSubjectsIsError,
		refetchPaginatedSubjects,
	} = useGetPaginatedSubjects({ page, limit, title })

	const { postSubject, postSubjectIsSuccess } = usePostSubject()
	const [inputText, setInputText] = useState('')

	const handleButtonClick = () => {
		postSubject({ title: inputText })
		setInputText('')
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value)
	}

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setLimit(parseInt(event.target.value, 10))
	}

	const handleChangePage = (event: unknown, nextPage: number) => {
		console.log('PAGGGGEE  = ', nextPage)
		setPage(nextPage)
		console.log('page =', page)
	}

	return (
		<div
			className='w-screen md:w-[80vw]
		 h-[90vh]handleClick
		 bg-zinc-600 flex flex-col items-center justify-start rounded-xl relative border-4 border-zinc-500 p-2'
		>
			<SubjectForm
				handleClick={handleButtonClick}
				value={inputText}
				onChange={handleInputChange}
			/>

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
