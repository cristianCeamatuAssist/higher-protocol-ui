import { NavLink } from 'react-router-dom'
import { Button } from 'components'
import styled from 'styled-components'

export const NavButton = ({ to, onClick, children }) => {
  return (
    <StyledNavLink to={to}>
      <Button color="primary" className="action_button" onClick={onClick}>
        <span className="px-4">{children}</span>
      </Button>
    </StyledNavLink>
  )
}

const StyledNavLink = styled(NavLink)`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  height: 37px !important;
  padding-right: 2px !important;
  padding-left: 2px !important;
  color: #ffffff;
  white-space: normal !important;
  word-wrap: break-word;
  margin-left: 22px;
  margin-right: 22px;

  span {
    white-space: nowrap;
  }
`
