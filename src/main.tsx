import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import { SignUpPage } from './pages/sign-up'
import { Layout } from './app'
import { SignInPage } from './pages/sign-in'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<SignUpPage />} />
					<Route path='/sign-in' element={<SignInPage/>} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
