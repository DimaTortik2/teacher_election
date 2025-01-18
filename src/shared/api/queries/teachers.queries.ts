import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../model/constants'
import { teacherService } from '../services/teacher.service'
import { useInfiniteQuery } from '@tanstack/react-query'
import { ITeacherForm } from '../../model/interfaces/teacher-form.interface'

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

export const useGetTeachers = () => {
	const {
		data,
		isPending: getTeachersIsLoading,
		isSuccess: getTeachersIsSuccess,
		isError: getTeachersIsError,
		hasNextPage,
		isFetchingNextPage,
		refetch: refetchTeachers,
		fetchNextPage,
	} = useInfiniteQuery({
		queryKey: [QUERY_KEYS.teacher],
		queryFn: async ({ pageParam }) =>
			await teacherService.findMany(pageParam.toString()),
		initialPageParam: 0,
		getNextPageParam: lastPage => lastPage.nextCursor,
	})

	return {
		data,
		getTeachersIsLoading,
		getTeachersIsSuccess,
		getTeachersIsError,
		hasNextPage,
		isFetchingNextPage,
		refetchTeachers,
		fetchNextPage,
	}
}

export const useGetTeacher = (id?: string) => {
	const {
		data,
		isPending: getTeacherIsLoading,
		isSuccess: getTeacherIsSuccess,
		isError: getTeacherIsError,
	} = useQuery({
		queryKey: [QUERY_KEYS.teacher, id],
		queryFn: async () => await teacherService.findOne(id),
		enabled: !!id,
	})

	return {
		data,
		getTeacherIsLoading,
		getTeacherIsSuccess,
		getTeacherIsError,
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
