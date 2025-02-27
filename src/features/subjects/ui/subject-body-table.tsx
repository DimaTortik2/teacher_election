import { TableBody } from '@mui/material'
import { useEffect } from 'react'
import { AdminSubjectCardsList } from '../../../entities/subject'
import { ISubjects } from '../model/interfaces/subject.interfaces'

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
