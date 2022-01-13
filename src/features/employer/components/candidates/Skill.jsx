import styled from 'styled-components'
import CheckMarkSrc from 'assets/images/checkmark-checked.png'
import { StarRating } from 'features/employer'

export const Skill = ({ skill }) => {
  const title = Object.keys(skill)[0]
  const value = skill[title]

  return (
    <StyledTr>
      <td className="skill">
        <div className="checkmark" />
        <div className="skill-name">{title}</div>
      </td>
      <td>
        <StarRating rating={value} />
      </td>
    </StyledTr>
  )
}

const StyledTr = styled.tr`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: left;
  align-items: center;
  gap: 0.5rem;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  .skill {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .checkmark {
      background: url(${CheckMarkSrc});
      width: 22px;
      height: 22px;
    }

    .skill-name {
      color: #0f0e0e;
      font-size: 15px;
      font-weight: 600;
    }
  }

  tr {
    td {
      width: 150px;
    }
  }
`
