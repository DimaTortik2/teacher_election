import { useMutation, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/app/model/constants'
import {
	ICreateTeacher,
	IEditTeacher,
} from '../../model/interfaces/admin-teacher.interface'
import { adminTeachersService } from '../services/admin-teachers.service'
import { useGetTeachers } from '@/features/teachers'

export const usePostTeacher = () => {
	const queryClient = useQueryClient()
	const { refetchTeachers } = useGetTeachers()

	const {
		mutate: postTeacher,
		isPending: postTeacherIsLoading,
		isSuccess: postTeacherIsSuccess,
		isError: postTeacherIsError,
	} = useMutation({
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.adminTeacher }),
		mutationKey: [QUERY_KEYS.teacher],
		mutationFn: async (data: ICreateTeacher) =>
			await adminTeachersService.createOne(data),
		onSuccess: () => refetchTeachers(),
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
	const { refetchTeachers } = useGetTeachers()

	const {
		mutate: deleteTeacher,
		isPending: deleteTeacherIsLoading,
		isSuccess: deleteTeacherIsSuccess,
		isError: deleteTeacherIsError,
	} = useMutation({
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.adminTeacher }),
		mutationKey: [QUERY_KEYS.teacher],
		mutationFn: async (id: string) => await adminTeachersService.deleteOne(id),
		onSuccess: () => refetchTeachers(),
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
	const { refetchTeachers } = useGetTeachers()

	const {
		mutate: editTeacher,
		isPending: editTeacherIsLoading,
		isSuccess: editTeacherIsSuccess,
		isError: editTeacherIsError,
	} = useMutation({
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.adminTeacher }),
		mutationKey: [QUERY_KEYS.teacher],
		mutationFn: async ({ id, data }: IEditTeacher) =>
			await adminTeachersService.editOne({ id, data }),
		onSuccess: () => refetchTeachers(),
	})

	return {
		editTeacher,
		editTeacherIsLoading,
		editTeacherIsSuccess,
		editTeacherIsError,
	}
}
