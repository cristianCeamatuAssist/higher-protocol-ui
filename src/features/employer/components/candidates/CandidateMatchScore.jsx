import styled from 'styled-components'

export const CandidateMatchScore = ({ score }) => {
  const getMatchingScoreColor = (score) => {
    if (score >= 80) return 'green'
    if (score > 60) return 'light-orange'
    if (score > 50) return 'orange'
    return 'red'
  }

  return <StyledDiv className={getMatchingScoreColor(score)}>{score}</StyledDiv>
}

export const StyledDiv = styled.div`
  font-weight: bold;
  font-size: 32px;

  &.green {
    color: #1bd084;
  }

  &.light-orange {
    color: #e99b03;
  }

  &.orange {
    color: #d0671b;
  }

  &.red {
    color: #d0261b;
  }
`
