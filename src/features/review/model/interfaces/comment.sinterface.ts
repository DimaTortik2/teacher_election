import { ICategories } from './catigories.interface'

interface IUser {
	nickName: string | null
	id: string
}

export interface IReviewResponse extends ICategories {
	id: string
	isChecked: boolean
	message?: string | null
	likesCount: 0
	teacherId: string
	user: IUser
}
