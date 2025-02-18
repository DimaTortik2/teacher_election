import { TableBody } from '@mui/material'
import { AdminSubjectCardsList } from '../../admin'
import { useGetSubjects } from '../../../shared/api/queries/subject.queries'
import { useEffect } from 'react'
import { ISubjects } from '../../../shared/model/interfaces/subject.interfaces'

interface IProps {
	subjectsArray?: ISubjects
}
export function SubjectBodyTable({ subjectsArray }: IProps) {
	useEffect(() => {
		if (subjectsArray) {
			console.log('subjectsArray = ', subjectsArray)
		}
	}, [subjectsArray])

	return (
		<TableBody>
			<AdminSubjectCardsList
				subjectsArray={subjectsArray}
			></AdminSubjectCardsList>
		</TableBody>
	)
}
