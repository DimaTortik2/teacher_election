import { TableCell, TableHead, TableRow } from '@mui/material'

export function SubjectHeadTable() {
	return (
		<TableHead>
			<TableRow>
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
