import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ButtonGroup, Button as BButton } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
// styles and assets
import { ReactComponent as Logo } from 'assets/images/logo.svg'
import { ReactComponent as FacebookLogo } from 'assets/images/FacebookLogo.svg'
import { ReactComponent as LinkedinLogo } from 'assets/images/LinkedinLogo.svg'
import { ReactComponent as GoogleLogo } from 'assets/images/GoogleLogo.svg'
import LoginShowcaseImageSrc from 'assets/images/image30.png'
// components
import { Button } from 'components'
// utils
import { apiRequestWithStatesHandler, setSessionInStorage } from 'utils'
// features
import { authApi, setAuthSession } from 'features/auth'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [data, setData] = useState({ email: 'demo@example.com', password: '1234' })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    // signIn(data)
    const session = await apiRequestWithStatesHandler(() => authApi.signIn(data), setIsLoading, setError)
    if (session) {
      dispatch(setAuthSession(session))
      navigate('/')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((state) => ({ ...state, [name]: value }))
  }

  return (
    <StyledDiv>
      <div id="login-page_form">
        <Logo />
        <div id="description">
          <p>A high volume recruitment platform based on BLOCKCHAIN</p>
          <p className="helper-text">Welcome back! Please login to your account.</p>
        </div>
        <form id="login-form" className="shadow-none">
          <ButtonGroup id="login-options">
            <BButton variant="secondary" className="shadow-none">
              Candidate
            </BButton>
            <BButton variant="secondary" className="shadow-none selected">
              Company
            </BButton>
            <BButton variant="secondary" className="shadow-none">
              Validator
            </BButton>
          </ButtonGroup>

          <div className="login-input">
            <span>
              <label htmlFor="login" className="helper-text">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="form-control shadow-none"
                id="login"
                value={data.email}
                onChange={handleChange}
              />
            </span>
            <span>
              <label htmlFor="password" className="helper-text">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control shadow-none"
                id="password"
                value={data.password}
                onChange={handleChange}
              />
            </span>
          </div>

          <div className="login-help">
            <span>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="helper-text noselect">
                Remember me
              </label>
            </span>
            <Link to="/#" className="helper-text">
              Forgot password?
            </Link>
          </div>

          <div className="login-buttons">
            <Button type="button" color="primary" id="login-btn" className="shadow-none" onClick={handleLogin}>
              Login
            </Button>
            <Button id="signup" className="shadow-none" variant="outlined">
              Sign Up
            </Button>
          </div>
        </form>

        <div className="alternative-login">
          <p>Or login with</p>
          <Button>
            <FacebookLogo />
          </Button>
          <Button>
            <LinkedinLogo />
          </Button>
          <Button>
            <GoogleLogo />
          </Button>
        </div>
      </div>

      <div className="showcase-image" />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 100vh;
  height: 100vh;
  width: 100%;
  height: auto;
  font-family: Poppins, 'Droid Sans', 'Helvetica Neue', sans-serif;
  background-color: white;
  overflow: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    .showcase-image {
      display: none;
    }
  }

  #login-page_form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    padding-inline: max(18%, 2em);
    padding-block: min(18%, 2em);
    gap: 2em;

    #description {
      :first-child {
        color: #4401d4;
        font-weight: bold;
        font-size: 36px;
      }

      :nth-child(2) {
        font-size: 18px;
      }
    }

    #login-options {
      margin-bottom: 1em;
      background-color: rgba(118, 118, 128, 0.12);
      color: #0f0e0e;
      border-radius: 8px;
      height: 32px;

      .btn-secondary {
        margin-top: 2px;
        height: 28px;
        line-height: 17px;
        color: black;
        border: none;
        border-radius: 6px;
        background-color: transparent;

        &.selected {
          background-color: white;
        }
      }

      input {
        &:focus-visible,
        &:focus {
          border-left: 3px solid #0c31f1;
        }
      }
    }

    .login-input {
      input {
        height: 74px;
        border-radius: 0;
        border: 1px solid #c1bbbb;
        font-size: 18px;

        &:focus {
          border-left: 4px solid #0c31f1;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
      }

      span {
        position: relative;
        display: block;

        label {
          position: absolute;
          z-index: 1;
          margin-left: 27px;
          margin-top: 12px;
        }

        input {
          padding-top: 39px;
          padding-left: 27px;
        }
      }
    }

    .login-help {
      display: flex;
      justify-content: space-between;
      height: 24px;
      margin-top: 19px;

      label {
        margin-left: 8px;
        cursor: pointer;
      }

      a {
        text-decoration: none;

        &:hover {
          color: #999;
        }
      }
    }

    .login-buttons {
      margin-top: 60px;
      display: flex;
      align-items: center;
      gap: 1em;

      #login-btn {
        margin-right: 33px;
      }

      #signup {
        background-color: white;
        border-color: #4401d4;
        color: #4401d4;
      }
    }

    .alternative-login {
      display: flex;
      align-items: center;
      margin-top: 1em;

      button {
        width: 30px;
        height: 30px;
        border: none;
        padding: 0;
        background-color: transparent;

        &:not(:last-child) {
          margin-right: 33px;
        }
      }

      p {
        margin-right: 30px;
        margin-bottom: 0;
      }

      .btn-facebook {
        background: url(FacebookLogo) no-repeat;
      }

      .btn-linkedin {
        background: url(LinkedinLogo) no-repeat;
      }

      .btn-google {
        background: url(GoogleLogo) no-repeat;
      }
    }
  }

  .showcase-image {
    max-width: 100%;
    background: url(${LoginShowcaseImageSrc}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .text-color {
    color: #4401d4;
  }
`
