import { AdminLinksList } from '../../../widgets/Admin'
import { AdminTitle } from '../../../features/admin-features'

export function AdminPage() {
	return (
		<div className='flex flex-col items-center justify-center w-screen h-screen'>
			<AdminTitle>{'Dima'}</AdminTitle>
			<AdminLinksList className={'pl-[2vw] pr-[2vw]'} />
		</div>
	)
}

