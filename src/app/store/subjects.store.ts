import { atom, createStore } from 'jotai'
import { ISubject } from '../../features/subjects'

export const tableStore = createStore()

export const selectedSubjectsIdsAtom = atom<string[]>([])

export const subjectsAtom = atom<ISubject[]>([])

export const isAddSubjectModalVisibleAtom = atom<boolean>(false)
export const isDeleteSubjectModalVisibleAtom = atom<boolean>(false)


tableStore.set(selectedSubjectsIdsAtom, [])
tableStore.set(subjectsAtom, [])
tableStore.set(isAddSubjectModalVisibleAtom, false)
tableStore.set(isDeleteSubjectModalVisibleAtom, false)
