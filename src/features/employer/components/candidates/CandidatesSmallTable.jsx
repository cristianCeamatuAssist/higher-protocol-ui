import useSWR from 'swr'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// styles and assets
import { ReactComponent as CaretDown } from 'assets/icons/CaretDown.svg'
import RowTogglerIconSrc from 'assets/images/options.png'
// components
import { Button, Table, TableBodyCell, TableBodyActionCell } from 'components'
// utils
import { getResource } from 'utils'
// features
import { CandidateMatchScore, CandidateStatus } from 'features/employer'

export const CandidatesSmallTable = () => {
  const { data, error } = useSWR('/candidates', getResource)
  const candidates = data?.map((candidate) => ({
    ...candidate,
    ...JSON.parse(candidate.personal_details),
  }))
  console.log('candidates :>> ', candidates)

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

  const getMatchingScoreColor = (score) => {
    if (score >= 80) return 'green'
    if (score > 60) return 'light-orange'
    if (score > 50) return 'orange'
    return 'red'
  }

  const getRandomNumber = (until) => Math.floor(Math.random() * until) + 1

  // demo data
  const avatarsArray = [
    'https://i.pravatar.cc/150?u=1',
    'https://i.pravatar.cc/150?u=2',
    'https://i.pravatar.cc/150?u=3',
    'https://i.pravatar.cc/150?u=4',
  ]
  const statusArray = Object.keys(statusMapping)
  // variables
  const columns = [
    { prop: 'full_name', label: 'Full Name' },
    { prop: 'position', label: 'Position' },
    { prop: 'match_score', label: 'Matching Score' },
    { prop: 'status', label: 'Status' },
    { prop: 'action', label: '' },
  ]

  const rows = candidates?.map((candidate) => {
    const randomStatus = statusArray[getRandomNumber(2)]
    const randomAvatar = avatarsArray[getRandomNumber(3)]
    return {
      id: candidate.id,
      full_name: (
        <TableBodyCell
          component={
            <Link to={`/candidates/${candidate.id}`} className="d-flex align-items-center gap-2">
              <div>
                <img src={randomAvatar} className="rounded-circle" alt="Candidate" width="56" height="56" />
              </div>
              <span>{`${candidate.first_name} ${candidate.last_name}`}</span>
            </Link>
          }
        />
      ),
      position: candidate.position,
      match_score: <TableBodyCell component={<CandidateMatchScore score={candidate.match_score} />} />,
      status: <TableBodyCell component={<CandidateStatus />} />,
      action: (
        <TableBodyActionCell>
          <button>
            <img src={RowTogglerIconSrc} alt="Toggler Icon" />
          </button>
        </TableBodyActionCell>
      ),
    }
  })

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

      <Table columns={columns} rows={rows} />

      <div className="table-footer">
        <Button color="primary" size="large">
          View all
        </Button>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: relative;
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
    padding: 1.5rem;
    width: 100%;

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
    padding: 1.5rem;
    text-align: right;
  }
`
