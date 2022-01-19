import styled from 'styled-components'
// components
import { CompanyLayout } from 'components'
// features
import { JobsTable } from 'features/employer'
export const Jobs = () => {
  return (
    <CompanyLayout>
      <StyledDiv>
        <JobsTable />
      </StyledDiv>
    </CompanyLayout>
  )
}

const StyledDiv = styled.div``
