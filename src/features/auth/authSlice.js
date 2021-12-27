import { createSlice } from '@reduxjs/toolkit'
// import store from 'redux/store'
import { removeUserFromStorage, setUserInStorage } from 'utils'

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
      state.user = action.payload
      state.loggedIn = true
      setUserInStorage(action.payload)
    },
    signOut(state) {
      removeUserFromStorage()
      state.user = null
      state.loggedIn = false
    },
  },
  extraReducers: () => {},
})

export const { setAuthSession, signOut } = authSlice.actions

export const { reducer: authReducer } = authSlice
