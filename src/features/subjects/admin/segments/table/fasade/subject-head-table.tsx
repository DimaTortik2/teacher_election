import { Checkbox, TableCell, TableHead, TableRow } from '@mui/material'
import { useAdminSubjectsHeadTableLogic } from '../model/hooks/use-admin-subject-head-table-logic'

export function SubjectHeadTable({ limit }: { limit: number }) {
	const { onSelectAllSubjects, selectedSubjects } =
		useAdminSubjectsHeadTableLogic()
	return (
		<TableHead>
			<TableRow>
				<TableCell padding='checkbox'>
					<Checkbox
						color='primary'
						checked={selectedSubjects.length == limit}
						onChange={onSelectAllSubjects}
						id='head-checkbox'
					/>
				</TableCell>
				<TableCell
					sx={{ color: 'white', fontSize: '1.1rem', width: '30%' }}
					align='center'
				>
					Предмет
				</TableCell>
				<TableCell
					sx={{ color: 'white', fontSize: '1.1rem', width: '70%' }}
					align='center'
				>
					ID
				</TableCell>
			</TableRow>
		</TableHead>
	)
}
