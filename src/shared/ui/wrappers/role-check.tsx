import { Outlet } from 'react-router'
import { useGetRole } from '../../api/queries/auth.queries'
import { useEffect } from 'react'

export function RoleWrapper() {
	// const { isRoleError, isRoleLoading, isRoleSuccess } = useGetRole()

	// useEffect(() => {
	// 	if (isRoleSuccess) {
	// 		console.log()
	// 	}
	// }, [isRoleSuccess])

	return <Outlet />
}
