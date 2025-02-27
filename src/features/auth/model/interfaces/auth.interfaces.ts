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
	message : string
}
export interface IRole {
	email : string
	role : string
}