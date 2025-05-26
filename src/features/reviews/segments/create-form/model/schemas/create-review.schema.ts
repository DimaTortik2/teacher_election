import { z } from 'zod'

export const createTeacherReviewSchema = z.object({
	freebie: z
		.number({ required_error: 'и это поле оцени' })
		.min(1, 'и это поле оцени')
		.max(5),

	friendliness: z
		.number({ required_error: 'и это поле оцени' })
		.min(1, 'и это поле оцени')
		.max(5),

	strictness: z
		.number({ required_error: 'и это поле оцени' })
		.min(1, 'и это поле оцени')
		.max(5),

	smartless: z
		.number({ required_error: 'и это поле оцени' })
		.min(1, 'и это поле оцени')
		.max(5),

	experienced: z
		.number({ required_error: 'и это поле оцени' })
		.min(1, 'и это поле оцени')
		.max(5),

	message: z.string().nullable().optional(),
})
