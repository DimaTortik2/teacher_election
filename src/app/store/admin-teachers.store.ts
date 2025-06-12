// import { ISelectedSupjects } from '@/features/subjects/admin/segments/select'
import { atom, createStore } from 'jotai'

export const AdminTeachersStore = createStore()

export const selectedTeacherIdAtom = atom<string | undefined>(undefined)

export const isAddTeacherModalVisibleAtom = atom<boolean>(false)
export const isDeleteTeacherModalVisibleAtom = atom<boolean>(false)
export const isEditTeacherModalVisibleAtom = atom<boolean>(false)

// export const selectedSubjectsAtom = atom<ISelectedSupjects>([])

AdminTeachersStore.set(selectedTeacherIdAtom, undefined)
// AdminTeachersStore.set(selectedSubjectsAtom, [])

AdminTeachersStore.set(isAddTeacherModalVisibleAtom, false)
AdminTeachersStore.set(isDeleteTeacherModalVisibleAtom, false)
AdminTeachersStore.set(isEditTeacherModalVisibleAtom, false)
