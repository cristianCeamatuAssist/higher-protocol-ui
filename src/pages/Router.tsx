import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { isEmpty } from 'lodash'
// state
import { useAppDispatch, useAppSelector } from 'app/store'
import { setUserSession } from 'features/users/usersSlice'
const Login = lazy(() => import('./Login/Login'))

const Router = () => {
  // global state
  const { user } = useAppSelector((state) => state.users)

  // props and utils
  const dispatch = useAppDispatch()
  const loggedIn = sessionStorage.getItem('accessToken') /* && sessionStorage.getItem('profile') */
  if (loggedIn && isEmpty(user)) {
    const { currentUser /* , profile */ } = utils.getUserAndProfile()
    dispatch(setUserSession({ currentUser /* , profile */ }))
  }

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Sign in page */}
        <Route path="login" element={loggedIn ? <Navigate replace to="/" /> : <Login />} />

        {/* Signed in routes */}
        <Route element={(() => (loggedIn ? <Outlet /> : <Navigate replace to="login" />))()}>
          <Route path="/" element={<SuccessLogin />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Suspense>
  )
}

export default Router
