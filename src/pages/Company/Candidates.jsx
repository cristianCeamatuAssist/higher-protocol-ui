import styled from 'styled-components'
// components
import { CompanyLayout } from 'components'
// features
import { CandidatesTableFilters, CandidatesTable } from 'features/employer'

export const Candidates = () => {
  return (
    <CompanyLayout>
      <StyledDiv>
        <CandidatesTableFilters />
        <CandidatesTable />
      </StyledDiv>
    </CompanyLayout>
  )
}

const StyledDiv = styled.div``
