import { Provider } from 'jotai'
import { Outlet } from 'react-router'
import { reviewsApprovementStore } from '../store/reviews-approvement.store'

export function ReviewsApprovementPorvider() {
	return (
		<Provider store={reviewsApprovementStore}>
			<Outlet />
		</Provider>
	)
}
