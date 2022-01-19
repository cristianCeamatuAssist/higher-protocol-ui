import styled from 'styled-components'
// components
import { JobCandidatesTable, EmployerCalendar } from 'features/employer'

export const JobCandidatesAgenda = () => {
  return (
    <StyledDiv>
      <JobCandidatesTable />
      <EmployerCalendar />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5em;
  border-radius: 20px;

  > :last-child {
    flex-shrink: 0;
  }
`
