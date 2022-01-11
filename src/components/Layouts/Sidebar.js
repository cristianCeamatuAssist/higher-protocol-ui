import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
// styles and assets
import { ReactComponent as Logo } from 'assets/images/logo.svg'
import DashboardLogo from 'assets/images/dashboard-logo.png'
import MessagesIcon from 'assets/images/messages.png'
import AssessIcon from 'assets/images/assess.png'
import ProfilesIcon from 'assets/images/profiles.png'
import StatisticsIcon from 'assets/images/statistics.png'
import CandidatesIcon from 'assets/images/candidates-logo.png'
import JobsIcon from 'assets/images/jobs-logo.png'
// utils
import { capitalize } from 'utils'

export const Sidebar = ({ items }) => {
  return (
    <StyledDiv>
      <div className="content">
        <div className="logo">
          <Logo />
        </div>

        {items.map((item) => {
          return (
            <NavLink to={`/${item}`} key={item} className="menu-item" activeClassName="active">
              <div className={`menu-item_logo ${item}-logo`} />
              <span>{capitalize(item)}</span>
            </NavLink>
          )
        })}
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: ${({ theme }) => theme.zIndex.sidebar};

    .content {
      position: fixed;
      inset-block: 0;
      left: 0;
      width: 23.43rem;
    }

    .logo {
      text-align: center;
      padding-top: 27px;
      padding-bottom: 60px;

      > svg {
        height: 66px;
        width: 42px;
        
        path {
          fill:  ${({ theme }) => theme.colors.white};
        }
      }
    }

    .menu-item {
      display: flex;
      margin-left: 43px;
      padding-left: 35px;
      text-decoration: none;
      color: white;
      font-size: 18px;
      height: 80px;
      line-height: 80px;
      position: relative;

      .menu-item_logo {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        filter: brightness(0) invert(1);
        width: 28px;
        height: 28px;

        &.dashboard-logo {
          background: url(${DashboardLogo});
          width: 24px;
          height: 23px;
        }

        &.candidates-logo {
          background: url(${CandidatesIcon});
        }

        &.jobs-logo {
          background: url(${JobsIcon});
        }

        &.messages-logo {
          background: url(${MessagesIcon});
        }

        &.assessments-logo {
          background: url(${AssessIcon});
        }

        &.profiles-logo {
          background: url(${ProfilesIcon});
        }

        &.statistics-logo {
          background: url(${StatisticsIcon});
        }
      }

      span {
        margin-left: 70px;
      }

      &.active {
        background-color: ${({ theme }) => theme.colors.bgWhite};
        color: #292929;
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
        font-weight: bold;

        &::before {
          content: "";
          position: absolute;
          right: 0;
          height: 80px;
          top: -80px;
          width: 40px;
          border-bottom-right-radius: 40px;
          box-shadow: 0 40px 0 0 ${({ theme }) => theme.colors.bgWhite}
        }

        &::after {
          content: "";
          position: absolute;
          right: 0;
          height: 80px;
          bottom: -80px;
          width: 40px;
          border-top-right-radius: 40px;
          box-shadow: 0 -40px 0 0 ${({ theme }) => theme.colors.bgWhite}
        }

        .menu-item_logo {
          filter: none;
        }
      }
`
