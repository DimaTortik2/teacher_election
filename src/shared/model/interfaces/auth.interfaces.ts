export interface ISignUp {
	email: string
	password: string
	codeWord: string
}

export interface ISignIn {
	email: string
	password: string
}

export interface IAuthResponse {
	id: string
	email: string
}
