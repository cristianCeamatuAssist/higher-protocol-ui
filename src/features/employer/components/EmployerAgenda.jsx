import styled from 'styled-components'
// components
import { CandidatesTable, EmployerCalendar } from 'features/employer'

export const EmployerAgenda = () => {
  return (
    <StyledDiv>
      <CandidatesTable variant={'light'} />
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
