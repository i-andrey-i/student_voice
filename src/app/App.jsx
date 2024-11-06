import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthorizationPage from '../pages/AuthorizationPage/AuthorizationPage'
import './App.css'
import AdminMainPage from '../pages/AdminMainPage/AdminMainPage'
import { AuthorizationRoutes } from './Road'

function App() {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigate to='/login' replace />} />
				<Route path='mainAdminPage/:id' element={<AdminMainPage />} />

				<Route element={<AuthorizationRoutes />}>
					<Route path='login' element={<AuthorizationPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
