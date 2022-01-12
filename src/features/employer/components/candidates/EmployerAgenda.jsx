import styled from 'styled-components'
// components
import { CandidatesSmallTable, EmployerCalendar } from 'features/employer'

export const EmployerAgenda = () => {
  return (
    <StyledDiv>
      <CandidatesSmallTable />
      <EmployerCalendar />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5em;

  > :last-child {
    flex-shrink: 0;
  }
`
