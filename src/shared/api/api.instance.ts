import axios from 'axios'
import errorCatch from './api.error'

const instance = axios.create({
	baseURL: 'https://teachers-election-backend.onrender.com',
	withCredentials: true,
})
let retryCount = 0

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config
		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired ' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry &&
			retryCount < 2
		) {
			originalRequest._isRetry = true
			retryCount += 1
			return instance.get('/tokens')
		}

		throw error
	}
)

export { instance }
