import styled from 'styled-components'
import { Card } from 'components'

export const Cards = ({ cards }) => {
  return (
    <Div>
      {cards?.map((cardProps, index) => (
        <Card card={cardProps} key={index} />
      ))}
    </Div>
  )
}

const Div = styled.div`
  margin-bottom: 31px;
  display: flex;
  justify-content: stretch;
  flex-wrap: wrap;
  gap: 1.5em;
`
