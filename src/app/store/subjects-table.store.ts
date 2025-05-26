import { ISubject } from '@/features/subjects'
import { atom, createStore } from 'jotai'

export const subjectsTableStore = createStore()

export const selectedSubjectsIdsAtom = atom<string[]>([])

export const subjectsAtom = atom<ISubject[]>([])

export const isAddSubjectModalVisibleAtom = atom<boolean>(false)
export const isDeleteSubjectModalVisibleAtom = atom<boolean>(false)

subjectsTableStore.set(selectedSubjectsIdsAtom, [])
subjectsTableStore.set(subjectsAtom, [])
subjectsTableStore.set(isAddSubjectModalVisibleAtom, false)
subjectsTableStore.set(isDeleteSubjectModalVisibleAtom, false)
