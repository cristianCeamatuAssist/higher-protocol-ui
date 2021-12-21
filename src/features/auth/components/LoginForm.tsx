import { useState } from 'react'
import cx from 'classnames'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
// types and utils
import { utils } from '@outbound-ai/ui'
// state
import { useAppDispatch } from '../../../app/store'
import { setUser } from '../../users/usersSlice'
// services
import userApi from '../../users/userApi'

export const LoginForm = () => {
  // props and utils
  const dispatch = useAppDispatch()

  // local state
  const [data, setData] = useState({
    usernameField: process.env.REACT_APP_DEV_LOGIN_USER || '',
    password: process.env.REACT_APP_DEV_LOGIN_PASSWORD || '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // handlers
  const handleSubmit = async (event: React.MouseEvent) => {
    event.preventDefault()
    setLoading(true)

    try {
      const user = await userApi.login({ usernameField, password })
      setLoading(false)
      dispatch(setUser(user))
    } catch (error: any) {
      setLoading(false)
      // If wrong credentials display the error on the login form
      if (error?.code === 'NotAuthorizedException') {
        setError(true)
      }
      // For other errors show notifications
      utils.errorHandler.handleError(error)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setData({ ...data, [name]: value.trim() })
  }

  // variables
  const { usernameField, password: passwordField } = data
  const username = usernameField?.trim() || ''
  const password = passwordField?.trim() || ''
  const isFormDisabled = loading || username === '' || password === ''

  return (
    <Form data-test="login-form">
      <div>
        <TextField
          type="text"
          label="Username"
          name="usernameField"
          id="usernameField"
          value={username}
          onChange={handleChange}
          className={cx({ invalid: error })}
          disabled={loading}
          data-test="login-username"
        />
      </div>

      <div>
        <TextField
          type="password"
          label="Password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
          className={cx({ invalid: error })}
          disabled={loading}
          data-test="login-password"
        />
      </div>

      {error && (
        <p className="invalid-credentials" data-test="login-error">
          Incorrect login credentials
        </p>
      )}

      <Button variant="contained" onClick={handleSubmit} disabled={isFormDisabled} data-test="login-button">
        {loading ? 'Connecting' : 'Log In'}
      </Button>
    </Form>
  )
}

const Form = styled.form`
  div {
    margin-bottom: 0.2em;
  }

  input {
    width: 250px;
    background: #ffffff;
    border-radius: 5px;
    padding-top: 0.8em;

    &::-webkit-input-placeholder,
    &:-ms-input-placeholder,
    &::placeholder {
      color: #676767;
    }
  }

  button {
    margin-top: 1em;
  }

  .invalid-credentials {
    color: ${({ theme }) => theme.palette.danger.normal};
    margin-bottom: 8px;
  }
`
