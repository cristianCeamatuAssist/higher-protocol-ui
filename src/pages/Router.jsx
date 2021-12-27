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
  console.log(loggedInUser)
  if (loggedInUser && isEmpty(user)) {
    dispatch(setAuthSession(loggedInUser))
  }

  return (
    <Routes>
      {/* Sign in page */}
      <Route path="/login" element={loggedInUser ? <Navigate replace to="/" /> : <Login />} />

      {/* Signed in routes */}
      <Route element={(() => (loggedInUser ? <Outlet /> : <Navigate replace to="login" />))()}>
        <Route path="/Candidates" element={<Candidates />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Assessments" element={<Assessments />} />
        <Route path="/Profiles" element={<Profiles />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}
