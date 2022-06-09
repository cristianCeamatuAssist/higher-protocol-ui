import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button as BsButton } from 'react-bootstrap'
// styles and assets
import LogoSmall from 'assets/images/logo-small.png'
import SearchLogo from 'assets/images/search-bar-logo.png'
import MenuIcon from 'assets/images/ic_menu.png'
// components
import { NavButton } from 'components'
// utils
import { TOKEN_LINK, routes } from 'utils'
// features
import { signOut } from 'features/auth'

export const Navbar = () => {
  const { user } = useSelector((state) => state.authReducer)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const handleSignOut = () => {
    dispatch(signOut())
    navigate('/login')
  }

  // const matchedRoute = Object.values(routes).find((route) =>

  // )
  // const resourceName = useSelector((state) => get(state, matchedRoute?.reducerResourcePath))
  // console.log(`matchedRoute`, matchedRoute)
  // variables
  // const isSingleResource = matchedRoute?.path.includes(':id') && resourceName
  // const breadCrumpComponent = isSingleResource ? (
  //   <Link to={matchedRoute?.path.replace('/:id', '')}>{matchedRoute.label}</Link>
  // ) : (
  //   matchedRoute?.label
  // )

  // variables
  const breadCrump = location.pathname.slice(1).split('_').join(' ')

  return (
    <StyledDiv>
      <div className="left-side">
        <div className="menu-icon" />
        <p className="page-title text-capitalize">{breadCrump}</p>
        {breadCrump === 'jobs' && <NavButton to={routes.jobsCreate.path}>Add new</NavButton>}
      </div>

      <div className="right-side">
        <input className="search-bar" type="text" placeholder="Search for something here..." />
        <BsButton variant="secondary" className="search-logo" />
        <div className="notifications">
          <a href={TOKEN_LINK} target="_blank" rel="noreferrer" className="small-logo">
            {' '}
          </a>
          <span className="amount">500</span>
        </div>

        <div className="user-info">
          <div className="user-picture" onClick={handleSignOut}>
            <img
              src="https://static.wikia.nocookie.net/despicableme/images/c/ca/Bob-from-the-minions-movie.jpg"
              alt=""
            />
          </div>

          <div className="details">
            <p>{`${user?.first_name || 'Missing'} ${user?.last_name?.[0] || ''}.`}</p>
            <p>HR Manager</p>
          </div>
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  padding: 32px 40px;

  .left-side {
    display: flex;
    float: left;
    position: relative;
    align-items: center;

    .menu-icon {
      background: url(${MenuIcon}) no-repeat;
      width: 40px;
      height: 18px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .page-title {
      font-size: 28px;
      font-weight: bold;
      line-height: 60px;
      margin-left: 75px;
      margin-bottom: 0;
      white-space: nowrap;
    }
  }

  .right-side {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    .search-bar {
      border-radius: 30px;
      height: 56px;
      max-width: 509px;
      width: 100%;
      background-color: #e3e3e3;
      padding: 0 4em 0 30px;
      margin-left: 40px;
      border: none;
    }

    .search-logo {
      width: 28px;
      height: 28px;
      background: url(${SearchLogo});
      background-position: center;
      position: relative;
      transform: translate(-200%, 50%);
      border: none;
    }

    .notifications {
      position: relative;
      bottom: -0.5rem;
      margin-left: 1em;
      min-width: 3em;

      background-color: #00eab2;
      border: 6px solid #99f4de;
      border-radius: 50%;
      width: 44px;
      height: 44px;

      .small-logo {
        background-image: url(${LogoSmall});
        width: 16px;
        height: 24px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
      }

      .amount {
        position: absolute;
        z-index: 2;
        width: 32px;
        height: 32px;
        line-height: 32px;
        border-radius: 50%;
        background-color: #4401d4;
        color: white;
        top: -22px;
        left: 22px;
        font-weight: bold;
        font-size: 12px;
        text-align: center;
      }
    }

    .user-info {
      margin-left: 40px;
      display: flex;

      .user-picture {
        width: 57px;
        height: 57px;
        border-radius: 50px;
        overflow: hidden;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
          transform: scale(1.3);
          transform-origin: 50% 50%;
        }
      }

      .details {
        margin-left: 30px;
        min-width: 4.5em;

        p {
          margin: 0;
        }

        p:first-child {
          font-weight: 600;
          font-size: 16px;
          color: #0f0e0e;
          padding-top: 10px;
        }

        p:last-child {
          font-weight: normal;
          font-size: 12px;
          color: #8f8f8f;
        }
      }
    }
  }
`
