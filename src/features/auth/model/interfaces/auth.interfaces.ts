
import { z } from 'zod'
import { signInSchema, signUpSchema } from '../schemas/schemas'

export type ISignIn = z.infer<typeof signInSchema>
export type ISignUpForm = z.infer<typeof signUpSchema>
export type ISignUp = Pick<ISignUpForm, 'email' | 'password'| 'codeWord'>


export interface IAuthResponse {
	message : string
}
export interface IRole {
	email : string
	role : string
}