import { useMutationState } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/app/model/constants'
import { ICreateTeacher } from '@/features/teachers/admin'

export function OptimisticTeachers() {
	const pendingTeachers = useMutationState<ICreateTeacher>({
		filters: { mutationKey: [`${QUERY_KEYS.teacher}`], status: 'pending' },
		select: mutation => mutation.state.variables as ICreateTeacher,
	})

	return (
		<>
			{pendingTeachers.map((teacher, index) => {
				console.log(teacher, index)
				return <p>потом сделаю оптимистик</p>
			})}
		</>
	)
}
// переделаю как буду делать оптимистик, знаю, что надо хранить рядом с самими компонентом
