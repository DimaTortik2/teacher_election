import { Checkbox, TableCell, TableRow } from '@mui/material'
import { ISubject } from '../../../features/subjects'

interface IProps {
	subject: ISubject
	isChecked: boolean
	onSelect: (id: string) => void
}

export function AdminSubjectTableRow({ subject, isChecked, onSelect }: IProps) {
	const handleCheckboxClick = () => {
		onSelect(subject.id)
	}

	return (
		<>
			<TableRow
				key={subject.id}
				sx={{ backgroundColor: isChecked ? '#3f3f46' : '' }}
			>
				<TableCell padding='checkbox'>
					<Checkbox
						onClick={handleCheckboxClick}
						checked={isChecked}
						color='primary'
						id={subject.id}
					/>
				</TableCell>
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
		</>
	)
}
