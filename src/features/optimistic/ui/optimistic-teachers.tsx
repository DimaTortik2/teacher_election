import { useMutationState } from '@tanstack/react-query'
import { OptimisticCard } from '../../../shared/ui/optimistic/optimistic-card'
import { QUERY_KEYS } from '../../../shared/model/constants'
import { ICreateTeacher } from '../../teachers'

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
