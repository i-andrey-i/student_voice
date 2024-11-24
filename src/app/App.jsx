import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthorizationPage from '../pages/AuthorizationPage/AuthorizationPage'
import './App.module.css'
import AdminMainPage from '../pages/AdminMainPage/AdminMainPage'
import { AuthorizationRoutes } from './Road'
import RatingAdminPage from '../pages/RatingAdminPage/RatingAdminPage'

function App() {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigate to='/login' replace />} />
				<Route path='mainAdminPage/:id' element={<AdminMainPage />} />
				<Route path='mainAdminPage/rating' element={<RatingAdminPage/>} />

				<Route element={<AuthorizationRoutes />}>
					<Route path='login' element={<AuthorizationPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
