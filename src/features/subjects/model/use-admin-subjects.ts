import { useState } from 'react'
import { useGetPaginatedSubjects, usePostSubject } from '../api/queries/sibject.queries'

export function useAdminSubjects() {
	const [page, setPage] = useState<number>(0)
	const [limit, setLimit] = useState<number>(5)
	const [title, setTitle] = useState<string | undefined>(undefined)

	const {
		data,
		getPaginatedSubjectsIsLoading,
		getPaginatedSubjectsIsSuccess,
		getPaginatedSubjectsIsError,
		refetchPaginatedSubjects,
	} = useGetPaginatedSubjects({ page, limit, title })

	const { postSubject, postSubjectIsSuccess } = usePostSubject()

	return {
		setPage,
		setLimit,
		setTitle,
		data,
		getPaginatedSubjectsIsLoading,
		getPaginatedSubjectsIsSuccess,
		getPaginatedSubjectsIsError,
		refetchPaginatedSubjects,
		postSubject,
		postSubjectIsSuccess,
		page,
		limit,
	}
}
