import { ICategories } from "@/features/reviews/segments/create-form";
import { PromiseInfinity } from "@/shared/model/interfaces/interfaces";

export interface ITeacher {
	id: string
	photo: string
	subject: { title: string; id: string } | string
	fullName: string
	avgRatings: { [key in keyof ICategories]: number }
	avgRating : number
}

export type ITeachers = ITeacher[]

export type ITeachersResponse = PromiseInfinity<ITeacher>
