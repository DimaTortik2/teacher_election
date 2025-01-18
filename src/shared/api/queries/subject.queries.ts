import { useMutation, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../model/constants'
import { subjectService } from '../services/subject.service'
import type { ISubject } from '../../model/interfaces/subject.interfaces'
import { useInfiniteQuery } from '@tanstack/react-query'

export const usePostSubject = () => {
	const queryClient = useQueryClient()

	const {
		mutate: postSubject,
		isPending: postSubjectIsLoading,
		isSuccess: postSubjectIsSuccess,
		isError: postSubjectIsError,
	} = useMutation({
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.subject }),
		mutationKey: [QUERY_KEYS.subject],
		mutationFn: async (data: Pick<ISubject, 'title'>) =>
			await subjectService.createOne(data),
	})

	return {
		postSubject,
		postSubjectIsLoading,
		postSubjectIsSuccess,
		postSubjectIsError,
	}
}

export const useGetSubjects = () => {
	const {
		data,
		isPending: getSubjectsIsLoading,
		isSuccess: getSubjectsIsSuccess,
		isError: getSubjectsIsError,
		hasNextPage,
		isFetchingNextPage,
		refetch: refetchSubjects,
		fetchNextPage,
	} = useInfiniteQuery({
		queryKey: [QUERY_KEYS.subject],
		queryFn: async ({ pageParam }) =>
			await subjectService.findMany(pageParam.toString()),
		initialPageParam: 0,
		getNextPageParam: lastPage => lastPage.nextCursor,
	})

	return {
		data,
		getSubjectsIsLoading,
		getSubjectsIsSuccess,
		getSubjectsIsError,
		hasNextPage,
		isFetchingNextPage,
		refetchSubjects,
		fetchNextPage,
	}
}

export const useDeleteSubject = () => {
	const queryClient = useQueryClient()

	const {
		mutate: deleteSubject,
		isPending: deleteSubjectIsLoading,
		isSuccess: deleteSubjectIsSuccess,
		isError: deleteSubjectIsError,
	} = useMutation({
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.subject }),
		mutationKey: [QUERY_KEYS.subject],
		mutationFn: async (id: string) => await subjectService.deleteOne(id),
	})

	return {
		deleteSubject,
		deleteSubjectIsLoading,
		deleteSubjectIsSuccess,
		deleteSubjectIsError,
	}
}

export const useEditSubject = () => {
	const queryClient = useQueryClient()

	const {
		mutate: editSubject,
		isPending: editSubjectIsLoading,
		isSuccess: editSubjectIsSuccess,
		isError: editSubjectIsError,
	} = useMutation({
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.subject }),
		mutationKey: [QUERY_KEYS.subject],
		mutationFn: async (args: { id: string; title: string }) =>
			await subjectService.editOne(args),
	})

	return {
		editSubject,
		editSubjectIsLoading,
		editSubjectIsSuccess,
		editSubjectIsError,
	}
}
