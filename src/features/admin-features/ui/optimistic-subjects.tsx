import { useMutationState } from '@tanstack/react-query'
import { ISubject, QUERY_KEYS } from '../../../shared'
import { OptimisticCard } from './optimistic-card'

export function OptimisticSubjects() {
	const pendingSubjects = useMutationState<ISubject>({
		filters: { mutationKey: [`${QUERY_KEYS.subjects}`], status: 'pending' },
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
