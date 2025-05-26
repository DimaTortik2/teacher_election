import { ICategories } from './catigories.interface'

export interface IPostTeacherReview extends Omit<ITeacherReview, 'id'> {
	teacherId: string
}


export interface IReviewResponse extends ICategories {
	id: string
	isChecked: boolean
	message?: string | null
	likesCount: 0
	teacherId: string
	user: IUser
	avgRating: number
}

interface IUser {
	nickName: string | null
	id: string
}

export interface ITeacherReview extends ICategories {
	id: string
	message?: string | null
}

