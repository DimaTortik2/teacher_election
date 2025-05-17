import { Outlet } from 'react-router'
import { useEffect } from 'react'
import { useGetRole } from '@/features/auth/api/queries/user.queries'

export function RoleWrapper() {
	const { data, isRoleError, isRoleSuccess } = useGetRole()

	useEffect(() => {
		if (isRoleSuccess || isRoleError) {
			console.log('role data = ', data)
		}
	}, [isRoleSuccess, isRoleError, data])

	return <Outlet />
}
