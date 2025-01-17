import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://teachers-election-backend.onrender.com',
	withCredentials: true,
})

instance.interceptors.response.use(
	config => {
		return config
	},
	async error => {
		const originalRequest = error.config
		if (
			error.response.status == 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await instance.get(`/token`).then(res => res.data)
				return instance.request(originalRequest)
			} catch (e) {
				console.log(e)
			}
		}
	}
)

export { instance }
