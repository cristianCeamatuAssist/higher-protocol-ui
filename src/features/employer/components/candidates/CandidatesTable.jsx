import useSWR from 'swr'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// styles and assets
import RowTogglerIconSrc from 'assets/images/options.png'
// components
import { Table, TableBodyCell, TableBodyActionCell } from 'components'
// utils
import { getResource, formatDateWithMonthText } from 'utils'
// features
import { CandidateMatchScore } from 'features/employer'

export const CandidatesTable = () => {
  const { data, error } = useSWR('/candidates', getResource)
  const candidates = data?.map((candidate) => ({
    ...candidate,
    ...JSON.parse(candidate.personal_details),
  }))
  console.log('candidates :>> ', candidates)

  const getRandomNumber = (until) => Math.floor(Math.random() * until) + 1

  // handlers
  const changePageHandler = (page) => {
    console.log(`page`, page)
  }

  // demo data
  const avatarsArray = [
    'https://i.pravatar.cc/150?u=1',
    'https://i.pravatar.cc/150?u=2',
    'https://i.pravatar.cc/150?u=3',
    'https://i.pravatar.cc/150?u=4',
  ]

  // variables
  const columns = [
    { prop: 'full_name', label: 'Full Name' },
    { prop: 'position', label: 'Position' },
    { prop: 'starting_date', label: 'Starting Date', format: formatDateWithMonthText },
    { prop: 'location', label: 'Location' },
    { prop: 'remote', label: 'Remote' },
    { prop: 'match_score', label: 'Matching Score' },
    // { prop: 'status', label: 'Status' },
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
      starting_date: candidate.starting_date || new Date().toISOString(),
      location: candidate.location,
      remote: candidate.is_remote ? 'Yes' : 'No',
      match_score: <TableBodyCell component={<CandidateMatchScore score={candidate.match_score} />} />,
      // status: <TableBodyCell component={<CandidateStatus />} />,
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
  background: #f2f2f2;
  overflow: hidden;
  flex: 1;
  margin-top: 1rem;
`
