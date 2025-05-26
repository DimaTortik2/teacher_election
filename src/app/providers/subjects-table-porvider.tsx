import { Provider } from 'jotai'
import { Outlet } from 'react-router'
import { subjectsTableStore } from '@/app/store/subjects-table.store'

export function SubjectsTableProvider() {
	return (
		<Provider store={subjectsTableStore}>
			<Outlet />
		</Provider>
	)
}
