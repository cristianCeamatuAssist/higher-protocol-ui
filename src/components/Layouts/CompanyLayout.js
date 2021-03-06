import styled from 'styled-components'
// components
import { Sidebar, Navbar } from 'components'

export const CompanyLayout = ({ children }) => {
  const accountType = 'candidate'

  const menuItems = {
    candidate: ['dashboard', 'search_job', 'applications', 'messages', 'my_profile'],
    company: ['dashboard', 'candidates', 'jobs', 'messages', 'assessments', 'profiles', 'statistics'],
  }
  return (
    <StyledDiv>
      <Sidebar items={menuItems[accountType]} />
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
      padding: 9px 40px 40px;
      background-color: ${({ theme }) => theme.colors.bgWhite};
      z-index: 1;
    }
  }
`
