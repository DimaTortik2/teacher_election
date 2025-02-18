import { useEffect } from 'react'
import { ISubjects, useEditSubject } from '../../../shared'

import { useDeleteSubject } from '../../../shared'

import { TableCell, TableRow } from '@mui/material'

interface IProps {
	subjectsArray?: ISubjects
}

export function AdminSubjectCardsList({ subjectsArray }: IProps) {
	// const { deleteSubject, deleteSubjectIsSuccess } = useDeleteSubject()
	// const { editSubject, editSubjectIsSuccess } = useEditSubject()

	// useEffect(() => {
	// 	if (deleteSubjectIsSuccess || editSubjectIsSuccess) {
	// 		refetchSubjects()
	// 	}
	// }, [deleteSubjectIsSuccess, refetchSubjects, editSubjectIsSuccess])

	return (
		<>
			{subjectsArray?.map(subject => (
				<TableRow key={subject.id}>
					<TableCell
						sx={{ color: 'white', fontSize: '1.1rem', width: '30%' }}
						align='center'
					>
						{subject.title}
					</TableCell>
					<TableCell
						sx={{ color: 'white', fontSize: '1.1rem', width: '70%' }}
						align='center'
					>
						{subject.id}
					</TableCell>
				</TableRow>
			))}
		</>
	)
}
