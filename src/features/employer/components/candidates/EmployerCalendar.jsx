import styled from 'styled-components'
import FakeCalendarImage from 'assets/images/fakes/fakeCalendar.svg'
export const EmployerCalendar = () => {
  return (
    <StyledDiv>
      <img src={FakeCalendarImage} width={340} height={590} alt="Calendar" />
    </StyledDiv>
  )
}

const StyledDiv = styled.div``
