import styled from 'styled-components'
import { Button as BButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// styles and assets
import { ReactComponent as CaretDown } from 'assets/icons/CaretDown.svg'
// components
import { Button } from 'components'
// features
import { demoCandidates } from 'features/employer'

export const CandidatesTable = ({ variant }) => {
  console.log('variant :>> ', variant)
  const bulina = [
    {
      status: 'video',
      title: 'Applications Received',
    },
    {
      status: 'screening',
      title: 'Screening',
    },
    {
      status: 'interview',
      title: 'Final Interview',
    },
    {
      status: 'interview',
      title: 'Final Interview',
    },
  ]

  return (
    <StyledDiv>
      <div className="table-header">
        <h3>In Progress</h3>

        <div className="filters">
          <div>
            Status <CaretDown />
          </div>
          <div>
            This Month <CaretDown />
          </div>
        </div>
      </div>

      <StyledTable className="table table-light">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Position</th>
            <th>Matching Score</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {demoCandidates.map((candidate, index) => (
            <tr key={candidate.id}>
              <td className="full-name">
                <Link to={`/candidates/${candidate.id}`}>
                  <a>
                    <div className="user-picture">
                      <img src={candidate.image} alt="Candidate" />
                    </div>
                    <span>{candidate.fullName}</span>
                  </a>
                </Link>
              </td>
              <td>{candidate.position}</td>
              <td className={`matching-score ${candidate.matchingScoreColor}`}>{candidate.match_score}</td>
              <td className="status">
                <div className={`status-logo ${bulina[index].status}`} />
                <p>{bulina[index].title}</p>
              </td>
              <td className="options">
                <BButton variant="secondary">
                  <div />
                </BButton>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <div className="table-footer">
        <Button color="primary" size="large">
          View all
        </Button>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  min-width: 800px;
  border: none;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 4px 0px rgba(62, 73, 84, 0.04);
  overflow: hidden;
  flex: 1;

  .table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em;

    .filters {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1.5em;

      > div {
        border: 1px solid #ebdcff;
        box-sizing: border-box;
        border-radius: 40px;
        padding: 12px 23px;
        display: flex;
        align-items: center;
        gap: 1.5em;

        svg {
          position: relative;
          top: -2px;
        }
      }
    }
  }

  .table-footer {
    padding: 2em;
    text-align: right;
  }
`

const StyledTable = styled.table`
  --bs-table-bg: transparent;

  & > :not(caption) > * > * {
    border-bottom-width: 0;
  }

  & > :not(:first-child) {
    border: none;
  }

  th {
    /* font-family: Poppins; */
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    color: #808080;
    /* padding: 17px 10px 15px; */
  }

  td {
    height: 73px;
    //line-height: 73px;
    padding: 0 0 0 8px;
    color: #0f0e0e;
  }

  tr {
    font-size: 16px;
    font-weight: 600;
    vertical-align: middle;
    color: #0f0e0e;
    justify-content: normal;

    /* th:first-child,
    th:last-child {
      border-radius: 20px;
    } */

    th:first-child,
    td:first-child {
      padding-left: 32px;
    }

    th:nth-child(1),
    td:nth-child(1) {
      width: 30%;
    }

    th:nth-child(2),
    td:nth-child(2) {
      width: 19%;
    }

    th:nth-child(3),
    td:nth-child(3) {
      width: 19%;
    }

    th:nth-child(4),
    td:nth-child(4) {
      width: 24%;
    }

    th:nth-child(5),
    td:nth-child(5) {
      width: 6%;
    }
  }

  tbody tr:hover {
    border-left: 4px solid #4501d4;
  }

  tbody tr:hover td {
    background-color: #f9f9f9;
  }

  .user-picture {
    width: 57px;
    height: 57px;
    border-radius: 50px;
    overflow: hidden;
    display: inline-flex;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    img {
      width: 100%;
      height: 100%;
      transform: scale(1.3);
      transform-origin: 50% 50%;
    }
  }

  .options {
    button {
      position: relative;
      background-color: transparent;
      border: none;
      width: 70px;
      height: 30px;
      box-shadow: none !important;

      div {
        background: url(../../images/options.png) no-repeat;
        width: 30px;
        height: 8px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .matching-score {
    font-weight: bold;
    font-size: 32px;
    padding-left: 50px;

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
  }

  .full-name {
    position: relative;

    a {
      display: block;
      text-decoration: none;
      color: #0f0e0e;
    }

    span {
      margin-left: 65px;
    }
  }

  .status {
    position: relative;

    &:first-child {
      display: inline-flex;
    }

    .status-logo {
      border-radius: 4px;
      width: 8px;
      height: 8px;
      position: absolute;
      //transform: translateY(250%);
      transform: translate(-50%, -50%);
      //left: 50%;
      top: 50%;

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
      padding-left: 18px;
      color: #0f0e0e;
      font-weight: 400;
      font-size: 16px;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      width: 100%;
      left: 50%;
    }
  }
`
