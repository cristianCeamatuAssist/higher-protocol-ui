import styled from 'styled-components'
import { Button } from 'react-bootstrap'
// styles and assets
import { ReactComponent as FilterIcon } from 'assets/icons/FilterIcon.svg'
import { ReactComponent as TrashIcon } from 'assets/icons/TrashIcon.svg'

export const CandidatesTableFilters = () => {
  return (
    <StyledDiv className="filters">
      <button>{<FilterIcon />}</button>

      <select defaultValue={'default'}>
        <option disabled value="default">
          Position
        </option>
        <option value="developer">Developer</option>
        <option value="tester">Tester</option>
        <option value="project-manager">Project Manager</option>
      </select>

      <select defaultValue={'default'}>
        <option disabled value="default">
          Experience
        </option>
        <option value="junior">Junior</option>
        <option value="mid">Mid</option>
        <option value="senior">Senior</option>
      </select>

      <select defaultValue={'default'}>
        <option disabled value="default" hidden>
          Location
        </option>
        <option value="developer">Bucuresti</option>
        <option value="tester">Constanta</option>
        <option value="project-manager">Iasi</option>
        <option value="project-manager">Cluj</option>
      </select>

      <select defaultValue={'default'}>
        <option disabled value="default" hidden>
          Remote
        </option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <select defaultValue={'default'}>
        <option disabled value="default" hidden>
          Matching Score
        </option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <TrashIcon />
    </StyledDiv>
  )
}

export const StyledDiv = styled.div`
  display: inline-flex;
  align-items: center;
  color: #0f0e0e;
  border: 1px solid #e1e1e1;
  border-radius: 16px;
  padding: 0.75rem 1rem;
  margin-right: 8px;
  width: 100%;

  select {
    border-radius: 8px;
    margin-right: 8px;
    font-size: 13px;
    padding: 8px;
    width: auto;
    outline: none;
    border: none;

    > option {
      padding-block: 0.5rem;
    }
  }
`
