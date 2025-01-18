import * as yup from 'yup'

export const signinSchema = yup.object({
	email: yup
		.string()
		.required('Email важен')
		.email('Тут должно быть что-то типо почты'),
	password: yup
		.string()
		.required('Пароль важен')
		.min(6, 'Пароль слишком мал, надо больше 5 символов')
		.max(32, 'Пароль слишком велик, надо меньше 33 символов'),
})
