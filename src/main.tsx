import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import { SignUpPage } from './pages/sign-up'
import { AuthLayout, Layout } from './app'
import { SignInPage } from './pages/sign-in'
import {
	AdminPage,
	AdminReviewPage,
	AdminSubjectsPage,
	AdminTeachersPage,
} from './pages/admin-page'
import { TeachersPage } from './pages/teachers-page'
import { TeacherPage } from './pages/teacher-page'
import { RoleWrapper } from './features/auth'
import { TestPage } from './pages/test-page'
import { HydrateAtoms } from './shared/lib/theme'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<HydrateAtoms>
				<Routes location={location}>
					<Route element={<Layout />}>
						<Route element={<AuthLayout />}>
							<Route path='/' element={<SignUpPage />} />
							<Route path='/sign-in' element={<SignInPage />} />
						</Route>
						<Route element={<RoleWrapper />}>
							<Route path='/admin' element={<AdminPage />} />
							<Route path='/admin/subjects' element={<AdminSubjectsPage />} />
							<Route path='/admin/teachers' element={<AdminTeachersPage />} />
							<Route path='/admin/review' element={<AdminReviewPage />} />
						</Route>
						<Route path='/teachers' element={<TeachersPage />} />
						<Route path='/teacher/:id' element={<TeacherPage />} />
					</Route>

					<Route path='/test' element={<TestPage />} />
				</Routes>
			</HydrateAtoms>
		</BrowserRouter>
	</StrictMode>
)
