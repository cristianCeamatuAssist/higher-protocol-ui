import styled from 'styled-components'
import StarDimSrc from 'assets/images/star_dim.png'
import StarSRc from 'assets/images/star.png'
// utils
import { range } from 'utils'

export const StarRating = ({ rating }) => (
  <StyledDiv>
    {range(0, rating - 1).map((i) => (
      <div className="star active" key={i} />
    ))}
    {range(rating, 4).map((i) => (
      <div className="star" key={i} />
    ))}

    {/*<span>{rating}</span>*/}
  </StyledDiv>
)

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;

  .star {
    background: url(${StarDimSrc});
    width: 20px;
    height: 19px;

    &:not(:last-child) {
      margin-right: 14px;
    }

    &.active {
      background: url(${StarSRc});
    }
  }
`
