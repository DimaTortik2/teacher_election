import { useEffect, useState } from 'react'
import {
	selectedSubjectsIdsAtom,
	subjectsAtom,
} from '@/app/store/subjects-table.store'
import { useSetAtom } from 'jotai'
import { useGetPaginatedSubjects } from '@/features/subjects'

export function useAdminSubjects() {
	// mok
	// const data = {
	// 	items: [
	// 		{ title: 'salf', id: '123123', createdAt: '1' },
	// 		{ title: 'salfd', id: '1233', createdAt: '12' },
	// 		{ title: 'safadd', id: '1213', createdAt: '123' },
	// 		{ title: 'sa5465676898d', id: '12143213', createdAt: '11233' },
	// 	],
	// }
	//

	const [page, setPage] = useState<number>(0)
	const [limit, setLimit] = useState<number>(5)
	const [title, setTitle] = useState<string | undefined>(undefined)
	const setSubjects = useSetAtom(subjectsAtom)

	const {
		data,
		getPaginatedSubjectsIsLoading,
		getPaginatedSubjectsIsSuccess,
		getPaginatedSubjectsIsError,
		refetchPaginatedSubjects,
	} = useGetPaginatedSubjects({ page, limit, title })

	const setSelectedSubjectsIds = useSetAtom(selectedSubjectsIdsAtom)

	useEffect(() => {
		if (getPaginatedSubjectsIsSuccess && data) {
			setSubjects(data.items)
			setSelectedSubjectsIds([])
		}
	}, [getPaginatedSubjectsIsSuccess, setSubjects, data, setSelectedSubjectsIds])

	return {
		setPage,
		setLimit,
		setTitle,
		data,
		getPaginatedSubjectsIsLoading,
		getPaginatedSubjectsIsSuccess,
		getPaginatedSubjectsIsError,
		refetchPaginatedSubjects,
		page,
		limit,
	}
}
