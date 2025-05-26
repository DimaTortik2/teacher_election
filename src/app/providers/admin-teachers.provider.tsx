import { Provider } from 'jotai'
import { Outlet } from 'react-router'
import { AdminTeachersStore } from '../store/admin-teachers.store'

export function AdminTeachersProvider() {
	return (
		<Provider store={AdminTeachersStore}>
			<Outlet />
		</Provider>
	)
}
