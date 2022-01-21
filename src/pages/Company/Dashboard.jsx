import styled from 'styled-components'
// styles and assets
import FakeGraphImage from 'assets/images/fakes/fakeGraph.svg'
// components
import { Card, CompanyLayout } from 'components'
// features
import { EmployerAgenda, cards } from 'features/employer'

export const Dashboard = () => {
  return (
    <CompanyLayout>
      <StyledDiv>
        <div className="cards">
          {cards.map((cardProps, index) => (
            <Card card={cardProps} key={index} />
          ))}
        </div>

        <div className="graph">
          <img className="img-fluid" src={FakeGraphImage} layout="responsive" alt="Graph" />
        </div>

        <EmployerAgenda />
      </StyledDiv>
    </CompanyLayout>
  )
}

const StyledDiv = styled.div`
  .cards {
    margin-bottom: 31px;
    gap: 1.5em;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, minmax(220px, 1fr));
  }

  .graph {
    background-color: white;
    border-radius: 20px;
    margin-bottom: 24px;

    img {
      object-fit: fill;
    }
  }

  .agenda {
    display: flex;

    .queue {
      background-color: white;
      height: 591px;
      width: 70%;
      margin-right: 30px;
      border-radius: 20px;
    }

    .calendar {
      background-color: white;
      width: 30%;
      height: 591px;
      border-radius: 20px;
      overflow: hidden;
      img {
        object-fit: cover;
      }
    }
  }
`
