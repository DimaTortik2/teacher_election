import { useAtom, useAtomValue } from 'jotai'
import {
	selectedSubjectsIdsAtom,
	subjectsAtom,
} from '@/app/store/subjects-table.store'

export const useAdminSubjectsBodyTableLogic = () => {
	const [selectedSubjectsIds, setSelectedSubjectsIds] = useAtom(
		selectedSubjectsIdsAtom
	)
	const subjects = useAtomValue(subjectsAtom)

	const handleSelectSubject = (id: string) => {
		if (!selectedSubjectsIds.includes(id)) {
			setSelectedSubjectsIds(prev => [...prev, id])
		} else {
			setSelectedSubjectsIds(prev => [...prev.filter(el => el !== id)])
		}
	}

	return {
		selectedSubjectsIds,
		subjects,
		onSelectSubject: handleSelectSubject,
	}
}
