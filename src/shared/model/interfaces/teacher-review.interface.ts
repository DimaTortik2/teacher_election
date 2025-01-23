export interface ITeacherReview {
	id: string
	freebie: number
	frinedliness: number
	strictness: number
	smartless: number
	experienced: number
	message?: string
}

export interface IPostTeacherReview extends Omit<ITeacherReview, 'id'> {
	teacherId: string
}
