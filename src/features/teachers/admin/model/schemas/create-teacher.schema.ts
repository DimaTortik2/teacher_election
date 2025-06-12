import { z } from 'zod'

export const CreateTeacherSchema = z.object({
	fullName: z.string().min(1, 'Имя не забудь'),
	selectedSubjects: z
		.array(
			z.object({
				id: z.string(),
				title: z.string(),
			})
		)
		.min(1, 'Предмет не забудь'),
	file: z.array(z.instanceof(File)).optional().nullable(),
})
