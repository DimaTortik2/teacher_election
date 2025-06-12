import { z } from 'zod'

export const EditTeacherSchema = z.object({
	fullName: z.string().min(1, 'Имя не забудь').optional(),
	selectedSubjects: z
		.array(
			z.object({
				id: z.string(),
				title: z.string(),
			})
		)
		.min(1, 'Предмет не забудь')
		.optional(),
	file: z.array(z.instanceof(File)).optional().nullable(),
})
