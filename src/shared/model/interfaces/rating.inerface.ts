import { ITeacherReview } from './teacher-review.interface'

export interface ICategory {
	rusName: string
	engName: keyof ITeacherReview
}

export type ICategories = ICategory[]
