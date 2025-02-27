import { TableCell, TableRow } from '@mui/material'
import { ISubjects } from '../../../features/subjects'

interface IProps {
	subjectsArray?: ISubjects
}

export function AdminSubjectCardsList({ subjectsArray }: IProps) {
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
