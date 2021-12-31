import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { isEmpty } from 'lodash'
// state
import { useAppDispatch, useAppSelector } from 'app/hooks'
// utils
import { getUserFromStorage } from 'utils'
// features
import { setAuthSession } from 'features/auth'
// pages
import { Login, Dashboard, Candidates, Jobs, Messages, Assessments, Profiles, Statistics } from 'pages'

export const Router = () => {
  // global state
  const { user } = useAppSelector((state) => state.authReducer)

  // props and utils
  const dispatch = useAppDispatch()
  const loggedInUser = getUserFromStorage()
  
  if (loggedInUser && isEmpty(user)) {
    dispatch(setAuthSession(loggedInUser))
  }

  return (
    <Routes>
      {/* Sign in page */}
      <Route path="/login" element={loggedInUser ? <Navigate replace to="/" /> : <Login />} />

      {/* Signed in routes */}
      <Route element={(() => (loggedInUser ? <Outlet /> : <Navigate replace to="login" />))()}>
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/dashboard" />} />
    </Routes>
  )
}
