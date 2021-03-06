import { useEffect } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
// state
import { useAppDispatch, useAppSelector } from 'app/hooks'
// utils
import { getAuthSession } from 'utils'
// features
import { setAuthSession } from 'features/auth'
// pages
import {
  Login,
  Dashboard,
  Candidates,
  Jobs,
  Messages,
  Assessments,
  Profiles,
  Statistics,
  Candidate,
  Job,
  CreateJob,
  routes,
} from 'pages'
import { CandidateProfilePage } from './Candidates/CandidateProfilePage'

export const Router = () => {
  // global state
  const { user } = useAppSelector((state) => state.authReducer) || getAuthSession()

  // props and utils
  const dispatch = useAppDispatch()
  useEffect(() => {
    const authSession = getAuthSession()
    dispatch(setAuthSession(authSession))
  }, [dispatch])

  return (
    <Routes>
      {/* Sign in page */}
      <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />

      {/* Signed in routes */}
      <Route element={(() => (user ? <Outlet /> : <Navigate replace to="login" />))()}>
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/candidates/:id" element={<Candidate />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<Job />} />
        <Route path={routes.jobsCreate.path} element={<CreateJob />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my_profile" element={<CandidateProfilePage />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/dashboard" />} />
    </Routes>
  )
}
