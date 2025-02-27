import { useMutationState } from '@tanstack/react-query'
import { OptimisticCard } from '../../../shared/ui/optimistic/optimistic-card'
import { QUERY_KEYS } from '../../../shared/model/constants'
import { ISubject } from '../../subjects'

export function OptimisticSubjects() {
	const pendingSubjects = useMutationState<ISubject>({
		filters: { mutationKey: [`${QUERY_KEYS.subject}`], status: 'pending' },
		select: mutation => mutation.state.variables as ISubject,
	})

	return (
		<>
			{pendingSubjects.map((subject, index) => (
				<OptimisticCard key={index} index={index} title={subject.title} />
			))}
		</>
	)
}
