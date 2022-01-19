import useSWR from 'swr'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
// styles and assets
import RowTogglerIconSrc from 'assets/images/options.png'
// components
import { Table, TableBodyCell, TableBodyActionCell } from 'components'
// utils
import { getResource, formatDateWithMonthText } from 'utils'
// features
import { jobsIconsArray, getRandomNumber } from 'features/employer'

export const JobsTable = () => {
  const { data: jobs, error } = useSWR('/jobs', getResource)
  const navigate = useNavigate()

  // handlers
  const changePageHandler = (page) => {
    console.log(`page`, page)
  }

  // variables
  const columns = [
    { prop: 'job_name', label: 'Job Name' },
    { prop: 'post_date', label: 'Posting Date', format: formatDateWithMonthText },
    { prop: 'expire_date', label: 'Expire Date', format: formatDateWithMonthText },
    { prop: 'location', label: 'Location' },
    { prop: 'remote', label: 'Remote' },
    { prop: 'action', label: '' },
  ]

  const rows = jobs?.map((job) => {
    const randomAvatar = jobsIconsArray[getRandomNumber(3)]
    return {
      id: job.id,
      job_name: (
        <TableBodyCell
          component={
            <Link to={`/jobs/${job.id}`} className="d-flex align-items-center gap-2">
              <div className="job-avatar">{randomAvatar}</div>
              <span>{job.job_name}</span>
            </Link>
          }
        />
      ),
      post_date: job.post_date,
      expire_date: job.expire_date || new Date().toISOString(),
      location: job.location,
      remote: job.is_remote ? 'Yes' : 'No',
      action: (
        <TableBodyActionCell>
          <Link to={`/jobs/${job.id}`}>
            <img src={RowTogglerIconSrc} alt="Toggler Icon" />
          </Link>
        </TableBodyActionCell>
      ),
    }
  })

  return (
    <StyledDiv>
      <Table columns={columns} rows={rows} />
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

  .job-avatar {
    padding: 0.25rem;
    border-radius: 50px;
    background-color: #00cffd;
  }
`
