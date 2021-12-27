import styled from 'styled-components'
// components
import { Sidebar, Navbar } from 'components'

export const CompanyLayout = ({ children }) => {
  const sideMenuItems = ['dashboard', 'candidates', 'jobs', 'messages', 'assessments', 'profiles', 'statistics']

  return (
    <StyledDiv>
      <Sidebar items={sideMenuItems} />
      <div className="page">
        <Navbar />

        <div className="page-content">{children}</div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 23.43rem 1fr; // 375px
  grid-auto-rows: 1fr;
  font-family: Poppins, 'Droid Sans', 'Helvetica Neue', sans-serif;
  height: 100vh;

  .page {
    background-color: ${({ theme }) => theme.colors.bgWhite};
    height: 100%;

    .page-content {
      padding: 9px 40px 79px;
      background-color: ${({ theme }) => theme.colors.bgWhite};
    }
  }
`
