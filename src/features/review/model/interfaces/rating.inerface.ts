import { IPostTeacherReview } from './teacher-review.interface'

export interface ICategory {
	rusName: string
	engName: keyof Omit<IPostTeacherReview, 'teacherId'>
}

export type ICategories = ICategory[]
