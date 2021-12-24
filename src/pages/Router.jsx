import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { isEmpty } from 'lodash'
// state
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { SuccessLogin } from 'pages'
// utils
import { getUserFromStorage } from 'utils'
// features
import { setAuthSession } from 'features/auth'
// pages
import { Login } from 'pages'

export const Router = () => {
  // global state
  const { user } = useAppSelector((state) => state.authReducer)
  console.log(`user`, user)
  // props and utils
  const dispatch = useAppDispatch()
  const loggedIn = sessionStorage.getItem('accessToken') /* && sessionStorage.getItem('profile') */
  if (loggedIn && isEmpty(user)) {
    const { currentUser } = getUserFromStorage()
    dispatch(setAuthSession({ currentUser }))
  }

  return (
    <Routes>
      {/* Sign in page */}
      <Route path="login" element={loggedIn ? <Navigate replace to="/" /> : <Login />} />

      {/* Signed in routes */}
      <Route element={(() => (loggedIn ? <Outlet /> : <Navigate replace to="login" />))()}>
        <Route path="/" element={<SuccessLogin />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}
