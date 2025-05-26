import { IApprovementSolution } from '@/features/reviews/admin/segments/forms'
import { atom, createStore } from 'jotai'

export const reviewsApprovementStore = createStore()

// export const reviewsAtom = atom<[]>([])

export const currentApprovementAtom = atom<IApprovementSolution | null>(null)

export const isApprovementModalVisibleAtom = atom<boolean>(false)

reviewsApprovementStore.set(currentApprovementAtom, null)
// reviewsApprovementStore.set(reviewsAtom, [])
reviewsApprovementStore.set(isApprovementModalVisibleAtom, false)
