import styled from 'styled-components'
// styles and assets
import FakeGraphImage from 'assets/images/fakes/fakeGraph.svg'
// components
import { Card, CompanyLayout } from 'components'
// features
import { EmployerAgenda } from 'features/employer'

export const Dashboard = () => {
  const cards = [
    {
      backgroundColor: '#48A9F8',
      title: 'Applications Received',
      value: 75,
      logo: 'applications-logo',
    },
    {
      backgroundColor: '#4E36E2',
      title: 'Interviews Schedule',
      value: 75,
      logo: 'schedule-logo',
    },
    {
      backgroundColor: '#1BD084',
      title: 'Profiles Viewed',
      value: 75,
      logo: 'profiles-logo',
    },
    {
      backgroundColor: '#8BC740',
      title: 'Unread messages',
      value: 75,
      logo: 'messages-logo',
    },
  ]

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
    display: flex;
    justify-content: stretch;
    flex-wrap: wrap;
    gap: 1.5em;
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
