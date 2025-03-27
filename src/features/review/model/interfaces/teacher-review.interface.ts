import { ICategories } from "./catigories.interface"

export interface ITeacherReview extends ICategories {
	id: string
	message?: string | null
}

export interface IPostTeacherReview extends Omit<ITeacherReview, 'id'> {
	teacherId: string
}