import styled from 'styled-components'
import useSWR from 'swr'
import { useParams } from 'react-router-dom'
// utils
import { getResource } from 'utils'
// components
import { CompanyLayout, Cards } from 'components'
// features
import { cards, JobCandidatesAgenda } from 'features/employer'

export const Job = () => {
  const { id } = useParams()
  const { data: job } = useSWR(`/jobs/${id}`, getResource)
  console.log('job :>> ', job)

  return (
    <CompanyLayout>
      <StyledDiv>
        <Cards cards={cards} />

        <JobCandidatesAgenda />
      </StyledDiv>
    </CompanyLayout>
  )
}

const StyledDiv = styled.div``
