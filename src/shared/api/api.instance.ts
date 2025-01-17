import axios from 'axios'
import { tokenService } from './services/token.service'

const instance = axios.create({
	baseURL: 'https://teachers-election-backend.onrender.com',
	withCredentials: true,
})

instance.interceptors.response.use(
	config => {
		return config
	},
	error => {
		const originalRequest = error.config
		if (
			error.response.status == 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				tokenService.refresh()
				return instance.request(originalRequest)
			} catch (e) {
				console.log(e)
			}
		}
	}
)

export { instance }
