import { ICategoryNames } from '@/features/reviews/segments/create-form'

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
	signup: '/sign-up',
	teachers: '/',
	adminReviews: '/admin/reviews',
	adminTechers: '/admin/teachers',
	adminSubjects: '/admin/subjects',
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

export const TEACHER_IMG = {
	error: '/undefined-person-icon.jpg',
	base: 'https://console-production-6cbd.up.railway.app/api/v1/buckets/teachers-bucket/objects/download?preview=true&prefix=',
}
