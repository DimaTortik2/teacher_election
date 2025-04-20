import { z } from 'zod'

export const signInSchema = z.object({
	email: z.string().min(1, 'Не забудь email').email('Не похоже на email'),
	password: z
		.string()
		.min(6, 'Минимально 6 символов')
		.max(32, 'Максимально 32 символа'),
})

export const signUpSchema = z
	.object({
		email: z.string().min(1, 'Не забудь email').email('Не похоже на email'),
		password: z
			.string()
			.min(6, 'Минимально 6 символов')
			.max(32, 'Максимально 32 символа'),
		password_repeat: z
			.string()
			.min(6, 'Минимально 6 символов')
			.max(32, 'Максимально 32 символа'),
		codeWord: z.string().min(1,'Обязательно'),
		nickName: z.string().optional().nullable(),
	})
	.refine(data => data.password === data.password_repeat, {
		message: 'Пароли должны совпадать',
		path: ['password_repeat'],
	})
