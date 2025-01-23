import * as yup from 'yup'

export const createTeacherReviewSchema = yup.object({
	freebie: yup
		.number()
		.min(1, 'и это поле оцени')
		.max(5)
		.required('и это поле оцени'),
	frinedliness: yup
		.number()
		.min(1, 'и это поле оцени')
		.max(5)
		.required('и это поле оцени'),
	strictness: yup
		.number()
		.min(1, 'и это поле оцени')
		.max(5)
		.required('и это поле оцени'),
	smartless: yup
		.number()
		.min(1, 'и это поле оцени')
		.max(5)
		.required('и это поле оцени'),
	experienced: yup
		.number()
		.min(1, 'и это поле оцени')
		.max(5)
		.required('и это поле оцени'),
	message: yup.string(),
})
