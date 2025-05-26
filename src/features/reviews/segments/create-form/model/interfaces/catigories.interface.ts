import { IPostTeacherReview } from "./reviews.interface"

export interface ICategories {
	freebie: number
	friendliness: number
	strictness: number
	smartless: number
	experienced: number
}

export interface ICategoryName {
	rusName: string
	engName: keyof Omit<IPostTeacherReview, 'teacherId'>
}

export type ICategoryNames = ICategoryName[]
