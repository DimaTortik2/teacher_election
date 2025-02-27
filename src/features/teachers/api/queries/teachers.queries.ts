import { useMutation, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../../../shared/model/constants'
import { ITeacherForm } from '../../model/interfaces/teacher-form.interface'
import { teacherService } from '../services/teacher.service'

export const usePostTeacher = () => {
	const queryClient = useQueryClient()

	const {
		mutate: postTeacher,
		isPending: postTeacherIsLoading,
		isSuccess: postTeacherIsSuccess,
		isError: postTeacherIsError,
	} = useMutation({
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.subject }),
		mutationKey: [QUERY_KEYS.teacher],
		mutationFn: async (data: ITeacherForm) =>
			await teacherService.createOne(data),
	})

	return {
		postTeacher,
		postTeacherIsLoading,
		postTeacherIsSuccess,
		postTeacherIsError,
	}
}

export const useDeleteTeacher = () => {
	const queryClient = useQueryClient()

	const {
		mutate: deleteTeacher,
		isPending: deleteTeacherIsLoading,
		isSuccess: deleteTeacherIsSuccess,
		isError: deleteTeacherIsError,
	} = useMutation({
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.subject }),
		mutationKey: [QUERY_KEYS.teacher],
		mutationFn: async (id: string) => await teacherService.deleteOne(id),
	})

	return {
		deleteTeacher,
		deleteTeacherIsLoading,
		deleteTeacherIsSuccess,
		deleteTeacherIsError,
	}
}

export const useEditTeacher = () => {
	const queryClient = useQueryClient()

	const {
		mutate: editTeacher,
		isPending: editTeacherIsLoading,
		isSuccess: editTeacherIsSuccess,
		isError: editTeacherIsError,
	} = useMutation({
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.subject }),
		mutationKey: [QUERY_KEYS.teacher],
		mutationFn: async (id: string) => await teacherService.editOne(id),
	})

	return {
		editTeacher,
		editTeacherIsLoading,
		editTeacherIsSuccess,
		editTeacherIsError,
	}
}
