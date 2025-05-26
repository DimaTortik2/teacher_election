import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { teacherService } from '../service/teachers.service'
import { QUERY_KEYS } from '@/app/model/constants'
import { ITeacher } from '../../model/interfaces/teachers.interface'
import { formatInfinityData } from '@/shared/model/hooks/format-infinity-data/format-infinity-data'

export const useGetTeachers = () => {
	const {
		data: rawData,
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

	const data = formatInfinityData<ITeacher>(rawData)

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
