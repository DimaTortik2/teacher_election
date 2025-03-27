import { IPostTeacherReview } from './teacher-review.interface'

export interface ICategoryName {
	rusName: string
	engName: keyof Omit<IPostTeacherReview, 'teacherId'>
}

export type ICategoryNames = ICategoryName[]
