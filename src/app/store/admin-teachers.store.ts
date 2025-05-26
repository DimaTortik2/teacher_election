import { atom, createStore } from 'jotai'

export const AdminTeachersStore = createStore()

export const selectedTeacherIdAtom = atom<string | undefined>()

export const isAddTeacherModalVisibleAtom = atom<boolean>(false)
export const isDeleteTeacherModalVisibleAtom = atom<boolean>(false)
export const isEditTeacherModalVisibleAtom = atom<boolean>(false)

AdminTeachersStore.set(selectedTeacherIdAtom, undefined)

AdminTeachersStore.set(isAddTeacherModalVisibleAtom, false)
AdminTeachersStore.set(isDeleteTeacherModalVisibleAtom, false)
AdminTeachersStore.set(isEditTeacherModalVisibleAtom, false)
