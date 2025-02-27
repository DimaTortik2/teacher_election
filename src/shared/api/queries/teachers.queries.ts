import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../../shared/model/constants'
import { useInfiniteQuery } from '@tanstack/react-query'
import { teacherService } from '../../../features/teachers'



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
