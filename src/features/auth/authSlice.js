import { createSlice } from '@reduxjs/toolkit'
// import store from 'redux/store'
import { removeSession, setSessionInStorage } from 'utils'

// http.defaults.baseURL = process.env.REACT_APP_SERVERS_FACTORY_API_BASE_URL

const initialState = {
  user: null,
  loggedIn: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthSession(state, action) {
      if (action.payload?.user) {
        state.user = action.payload.user
        state.loggedIn = true
      }
    },
    signOut(state) {
      removeSession()
      state.user = null
      state.loggedIn = false
    },
  },
  extraReducers: () => {},
})

export const { setAuthSession, signOut } = authSlice.actions

export const { reducer: authReducer } = authSlice
