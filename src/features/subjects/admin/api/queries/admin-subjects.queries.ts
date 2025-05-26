import { useMutation, useQueryClient } from '@tanstack/react-query'
import { subjectService } from '../services/admin-subject.service'
import { ISubject } from '../../../model/interfaces/subject.interfaces'
import { QUERY_KEYS } from '@/app/model/constants'

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

export const useDeleteSubjects = () => {
	const queryClient = useQueryClient()

	const {
		mutate: deleteSubjects,
		isPending: deleteSubjectsIsLoading,
		isSuccess: deleteSubjectsIsSuccess,
		isError: deleteSubjectsIsError,
	} = useMutation({
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.subject }),
		mutationKey: [QUERY_KEYS.subject],
		mutationFn: async (ids: string[]) => await subjectService.deleteMany(ids),
	})

	return {
		deleteSubjects,
		deleteSubjectsIsLoading,
		deleteSubjectsIsSuccess,
		deleteSubjectsIsError,
	}
}
