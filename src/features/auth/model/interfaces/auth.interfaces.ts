import { z } from 'zod'
import { signInSchema, signUpSchema } from '../schemas/schemas'

export type ISignInForm = z.infer<typeof signInSchema>
export type ISignUpForm = z.infer<typeof signUpSchema>
export type ISignUp = Omit<ISignUpForm, 'password_repeat'>
export type ISignIn = ISignInForm

export interface IAuthResponse {
	message: string
}
export interface IRole {
	email: string
	role: string
}
