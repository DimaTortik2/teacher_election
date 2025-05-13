import { ICategoryNames } from '../../features/review'

export const QUERY_KEYS = {
	auth: 'auth',
	subject: 'subjects',
	manySubjects: 'manysubjects',
	role: 'role',
	teacher: 'teachers',
	token: 'token',
	comment: 'comment',
	review: 'teacher-reviews',
	adminSubject: 'admin-subject',
	adminTeacher: 'admin-teacher',
	postReview: 'post-review',
}

export const ROUTES = {
	signin: '/sign-in',
	signup: '/',
	teachers: '/teachers',
}

export const CATEGORIES: ICategoryNames = [
	{
		rusName: 'Дружелюбность',
		engName: 'friendliness',
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
