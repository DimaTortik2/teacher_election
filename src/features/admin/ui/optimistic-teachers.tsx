import { useMutationState } from '@tanstack/react-query'
import { ICreateTeacher, QUERY_KEYS } from '../../../shared'
import { OptimisticCard } from './optimistic-card'

export function OptimisticTeachers() {
	const pendingTeachers = useMutationState<ICreateTeacher>({
		filters: { mutationKey: [`${QUERY_KEYS.teacher}`], status: 'pending' },
		select: mutation => mutation.state.variables as ICreateTeacher,
	})

	return (
		<>
			{pendingTeachers.map((teacher, index) => (
				<OptimisticCard key={index} index={index} title={teacher.fullName} />
			))}
		</>
	)
}
