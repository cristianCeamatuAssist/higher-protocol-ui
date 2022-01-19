import styled from 'styled-components'

const Tab = ({ title, headerRight, children }) => {
  return (
    <StyledTab>
      <div className="header">
        <h6>{title}</h6>

        {headerRight && <div>{headerRight}</div>}
      </div>

      {children}
    </StyledTab>
  )
}

export const StyledTab = styled.div`
  padding: 0 30px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutralMediumGrey};
    padding: 10px 0;

    > div {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.primaryBlack};

      span {
        color: ${({ theme }) => theme.colors.neutralDarkGrey};
      }
    }
  }
`

export default Tab
