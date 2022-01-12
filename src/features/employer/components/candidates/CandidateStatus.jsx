import styled from 'styled-components'

export const CandidateStatus = ({ status }) => {
  const statusMapping = {
    video: {
      label: 'Applications Received',
    },
    screening: {
      label: 'Screening',
    },
    interview: {
      label: 'Final Interview',
    },
  }

  const getRandomNumber = (until) => Math.floor(Math.random() * until) + 1

  const statusArray = Object.keys(statusMapping)

  const randomStatus = status || statusArray[getRandomNumber(2)]

  return (
    <StyledDiv className={randomStatus}>
      <div className={`label ${randomStatus}`} />
      <p>{statusMapping[randomStatus]?.label}</p>
    </StyledDiv>
  )
}

export const StyledDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5em;

  .label {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50px;

    &.video {
      background-color: #0c31f1;
    }

    &.screening {
      background-color: #4401d4;
    }

    &.interview {
      background-color: #1bd084;
    }
  }

  p {
    color: #0f0e0e;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 0;
  }
`
