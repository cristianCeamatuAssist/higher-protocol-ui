import styled from 'styled-components'
import useSWRImmutable from 'swr/immutable'
import { useParams } from 'react-router-dom'
// components
import { CompanyLayout } from 'components'
// utils
import { getResource } from 'utils'
// features
import { CandidateDetailsCard, CandidateProfile } from 'features/employer'

export const CandidateProfilePage = () => {
  const currentUserId = 1

  const { id } = useParams()

  const { data } = useSWRImmutable(`/candidates/${id || 1}`, getResource)
  const candidate = data?.map((candidate) => ({ ...candidate, ...JSON.parse(candidate.personal_details) }))[0]

  const isEditable = currentUserId === 1
  return (
    <CompanyLayout>
      <StyledDiv>
        {candidate && (
          <>
            <CandidateDetailsCard candidate={candidate} isEditable={isEditable} />
            <CandidateProfile candidate={candidate} />
          </>
        )}
      </StyledDiv>
    </CompanyLayout>
  )
}

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 351px) 1fr;
`
