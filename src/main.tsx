import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router'
import { SignUpPage } from './pages/sign-up'
import { Layout } from './app'
import { SignInPage } from './pages/sign-in'
import { AdminPage } from './pages/adminPanel'
import { AdminSubjectsPage, AdminTeachersPage } from './pages/admin-page'
import { TeachersPage } from './pages/teachers-page'
import { RoleWrapper } from './shared'
import { TeacherPage } from './pages/teacher-page'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const AnimatedRoutes = () => {
	const location = useLocation()

	return (
		<div className='bg-zinc-700'>
			<TransitionGroup>
				<CSSTransition timeout={300} key={location.key} classNames='page'>
					<Routes location={location}>
						<Route element={<Layout />}>
							<Route path='/' element={<SignUpPage />} />
							<Route path='/sign-in' element={<SignInPage />} />

							<Route element={<RoleWrapper />}>
								<Route path='/admin' element={<AdminPage />} />
								<Route path='/admin/subjects' element={<AdminSubjectsPage />} />
								<Route path='/admin/teachers' element={<AdminTeachersPage />} />
							</Route>

							<Route path='/teachers' element={<TeachersPage />} />
							<Route path='/teacher/:id' element={<TeacherPage />} />
						</Route>
					</Routes>
				</CSSTransition>
			</TransitionGroup>
		</div>
	)
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<AnimatedRoutes />
		</BrowserRouter>
	</StrictMode>
)
