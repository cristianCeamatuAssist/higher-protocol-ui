import styled from 'styled-components'
import { Tabs } from 'components'

const TabsBlock = ({ tabs, footerComponent = undefined }) => {
  return (
    <div className="sf-user-info-dashboard__container">
      <StyledDiv>
        <Tabs tabs={tabs} />

        {footerComponent}
      </StyledDiv>
    </div>
  )
}

export default TabsBlock

const StyledDiv = styled.div`
  min-height: 70vh;
`
