import useSWR from 'swr'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
// styles and assets
import { ReactComponent as CaretDown } from 'assets/icons/CaretDown.svg'
import RowTogglerIconSrc from 'assets/images/options.png'
// components
import { Table, TableBodyCell, TableBodyActionCell } from 'components'
// utils
import { getResource } from 'utils'
// features
import { CandidateMatchScore, CandidateStatus, avatarsArray } from 'features/employer'

export const JobCandidatesTable = () => {
  const { data } = useSWR('/candidates', getResource)
  const candidates = data?.map((candidate) => ({
    ...candidate,
    ...JSON.parse(candidate.personal_details),
  }))

  const navigate = useNavigate()

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

  // handlers
  const changePageHandler = (page) => {
    console.log(`page`, page)
  }

  // variables
  const columns = [
    { prop: 'full_name', label: 'Full Name' },
    { prop: 'position', label: 'Position' },
    { prop: 'match_score', label: 'Matching Score' },
    { prop: 'status', label: 'Status' },
    { prop: 'action', label: '' },
  ]

  const rows = candidates?.map((candidate) => {
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
          <button onClick={() => navigate(`/candidates/${candidate.id}`)}>
            <img src={RowTogglerIconSrc} alt="Toggler Icon" />
          </button>
        </TableBodyActionCell>
      ),
    }
  })

  return (
    <StyledDiv>
      <div className="table-header">
        <h3>Candidates</h3>

        <div className="filters">
          <div>
            Status <CaretDown />
          </div>
          <div>
            This Month <CaretDown />
          </div>
        </div>
      </div>

      <Table
        columns={columns}
        rows={rows}
        pagination={{ itemsPerPage: 10, totalItems: candidates?.length || 0, page: 1, changePageHandler }}
      />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: relative;
  min-width: 800px;
  border: none;
  background: white;
  border-radius: 20px;
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
