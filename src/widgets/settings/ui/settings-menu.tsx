import { SettingLogOut } from './setting-log-out'

export function SettingsMenu() {
	return (
		<div className='absolute w-[150px] bg-zinc-800 rounded-b-2xl top-16 right-0 z-10 flex flex-col gap-3 p-2'>
			<SettingLogOut />
		</div>
	)
}
