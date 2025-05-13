import { useAtom, useAtomValue } from 'jotai'
import {
	selectedSubjectsIdsAtom,
	subjectsAtom,
} from '../../../app/store/subjects.store'

export function useAdminSubjectsHeadTableLogic() {
	const [selectedSubjects, setSelectedSubjects] = useAtom(
		selectedSubjectsIdsAtom
	)

	const subjects = useAtomValue(subjectsAtom)

	const handleSelectAllSubjects = () => {
		if (subjects?.length !== selectedSubjects.length) {
			setSelectedSubjects(subjects.map(el => el.id))
		} else {
			setSelectedSubjects([])
		}
	}

	return {
		selectedSubjects,
		onSelectAllSubjects: handleSelectAllSubjects,
	}
}
