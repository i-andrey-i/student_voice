import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthorizationPage from '../pages/AuthorizationPage/AuthorizationPage'
import './App.module.css'
import AdminMainPage from '../pages/AdminMainPage/AdminMainPage'
import { AuthorizationRoutes } from './Road'
import UsersPage from '../pages/UsersPage/UsersPage'
import ReviewsPage from '../features/ReviewsPage/ReviewsPage'
import StatisticInstPage from '../pages/StatisticInstPage/StatisticInstPage'

function App() {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigate to='/login' replace />} />
				<Route path='mainAdminPage/:id' element={<AdminMainPage />} />
				<Route path='mainAdminPage/rating' element={<StatisticInstPage />} />
				<Route path='mainAdminPage/users' element={<UsersPage/>} />
				<Route path='mainAdminPage/reviews' element={<ReviewsPage/>} />

				<Route element={<AuthorizationRoutes />}>
					<Route path='login' element={<AuthorizationPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
