import { AdminSubjectTableRow } from '../../../entities/subject'
import { TableBody } from '@mui/material'
import { useAdminSubjectsBodyTableLogic } from '../model/use-admin-subject-head-body-logic'

interface IProps {
	limit: number
}
export function SubjectBodyTable({ limit }: IProps) {
	const { selectedSubjectsIds, subjects, onSelectSubject } =
		useAdminSubjectsBodyTableLogic()

	return (
		<TableBody sx={{ height: limit === 5 ? '350px' : '450px' }}>
			{subjects?.map(subject => {
				const isChecked = selectedSubjectsIds?.some(id => subject.id === id)

				return (
					<AdminSubjectTableRow
						subject={subject}
						isChecked={isChecked}
						onSelect={onSelectSubject}
						key={subject.id}
					/>
				)
			})}

			
		</TableBody>
	)
}
