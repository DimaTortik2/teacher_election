import { SettingsButton } from '@/widgets/settings'
import { TeacherCardList } from '@/features/teachers/segments/list'
import { Layout } from './layout'
import { TeacherFilter } from '@/features/teachers/segments/filter'

export function TeachersPage() {
	return (
		<Layout
			filter={<></>}
			menu={<SettingsButton />}
			list={<TeacherCardList />}
		/>
	)
}
