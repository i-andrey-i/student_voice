import { Navigate, Outlet } from 'react-router-dom'

export const AuthorizationRoutes = () => {
	const userId = sessionStorage.getItem('userId')
	const isAuthorised = userId !== null
	return isAuthorised ? <Outlet /> : <Navigate to='login' replace />
}
