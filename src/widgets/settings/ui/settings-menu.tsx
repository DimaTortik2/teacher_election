import SettingsIcon from '@mui/icons-material/Settings'
import { IconButton } from '@/shared/ui/icons/icon-button'
import { Layout } from './layout'
import { SettingsList } from './settings-list'

export function SettingsMenu({
	onClose,
	isVisible,
}: {
	onClose: () => void
	isVisible: boolean
}) {
	return (
		<Layout
			headerActions={[
				<IconButton
					onClick={onClose}
					icon={<SettingsIcon className='text-theme-300' />}
				/>,
			]}
			isVisible={isVisible}
			list={<SettingsList />}
		/>
	)
}
