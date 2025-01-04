import { useMutation, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../model/constants'
import { teacherService } from '../services/teacher.service'
import type {
	ICreateTeacher,
} from '../../model/interfaces/teacher.interface'
import { useInfiniteQuery } from '@tanstack/react-query'

export const usePostTeacher = () => {
	const queryClient = useQueryClient()

	const {
		mutate: postTeacher,
		isPending: postTeacherIsLoading,
		isSuccess: postTeacherIsSuccess,
		isError: postTeacherIsError,
	} = useMutation({
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.subjects }),
		mutationKey: [QUERY_KEYS.teacher],
		mutationFn: async (data: ICreateTeacher) =>
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

export const useDeleteTeacher = () => {
	const queryClient = useQueryClient()

	const {
		mutate: deleteTeacher,
		isPending: deleteTeacherIsLoading,
		isSuccess: deleteTeacherIsSuccess,
		isError: deleteTeacherIsError,
	} = useMutation({
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.subjects }),
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
