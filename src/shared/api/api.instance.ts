import axios from 'axios'

export const instance = axios.create({
	baseURL: 'https://teachers-election-backend.onrender.com',
	headers: {
		/////////////////
	},
})