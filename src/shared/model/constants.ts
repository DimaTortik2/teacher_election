import { ICategories } from "../../features/review"

export const QUERY_KEYS = {
	auth: 'auth',
	subject: 'subject',
	role: 'role',
	teacher: 'teacher',
	token: 'token',
	review: 'teacher-review',
	adminSubject: 'admin-subject',
	adminTeacher: 'admin-teacher',
}

export const CATEGORIES: ICategories = [
	{
		rusName: 'Дружелюбность',
		engName: 'frinedliness',
	},
	{
		rusName: 'Халявность',
		engName: 'freebie',
	},
	{
		rusName: 'Строгость',
		engName: 'strictness',
	},
	{
		rusName: 'Опыт',
		engName: 'experienced',
	},
	{
		rusName: 'Ум',
		engName: 'smartless',
	},
]
