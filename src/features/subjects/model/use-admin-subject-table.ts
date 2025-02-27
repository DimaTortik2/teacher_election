interface IProps {
	setLimit: React.Dispatch<React.SetStateAction<number>>
	setPage: React.Dispatch<React.SetStateAction<number>>
}

export function useAdminSubjectTable({ setLimit, setPage }: IProps) {
	
	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setLimit(parseInt(event.target.value, 10))
	}

	const handleChangePage = (event: unknown, nextPage: number) => {
		setPage(nextPage)
	}

	return {
		handleChangeRowsPerPage,
		handleChangePage,
	}
}