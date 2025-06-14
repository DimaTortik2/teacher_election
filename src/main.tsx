import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import { SignUpPage } from './pages/auth/sign-up'
import { SignInPage } from './pages/auth/sign-in'
import { TeachersPage } from './pages/teachers'
import { TeacherPage } from './pages/teacher'
import { TestPage } from './pages/test-page'
import { RolesProvider } from './app/providers/roles.provider'
import { MainProvider } from './app/providers/main.provider'
import { AuthNotificationsProvider } from './app/providers/auth-notifications.provider'

import { SubjectsTableProvider } from './app/providers/subjects-table-porvider'
import { AdminPanelPage } from './pages/admin/panel'
import { AdminSubjectsPage } from './pages/admin/subjects'
import { AdminTeachersPage } from './pages/admin/teachers'
import { AdminReviewPage } from './pages/admin/reviews'
import { ReviewsApprovementPorvider } from './app/providers/reviews-approvement-porvider'
import { AdminTeachersProvider } from './app/providers/admin-teachers.provider'
import { ThemesProvider } from './app/providers/themes.provider'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ThemesProvider>
				<Routes location={location}>
					<Route element={<MainProvider />}>
						<Route element={<AuthNotificationsProvider />}>
							<Route path='/sign-up' element={<SignUpPage />} />
							<Route path='/sign-in' element={<SignInPage />} />
						</Route>
						<Route element={<RolesProvider />}>
							<Route path='/admin' element={<AdminPanelPage />} />
							<Route element={<SubjectsTableProvider />}>
								<Route path='/admin/subjects' element={<AdminSubjectsPage />} />
							</Route>

							<Route element={<AdminTeachersProvider />}>
								<Route path='/admin/teachers' element={<AdminTeachersPage />} />
							</Route>
							<Route element={<ReviewsApprovementPorvider />}>
								<Route path='/admin/reviews' element={<AdminReviewPage />} />
							</Route>
							<Route path='/' element={<TeachersPage />} />
							<Route path='/teacher/:id' element={<TeacherPage />} />
						</Route>
					</Route>

					<Route path='/test' element={<TestPage />} />
				</Routes>
			</ThemesProvider>
		</BrowserRouter>
	</StrictMode>
)
