import FilterIcon from '../../assets/icons/FilterTable.svg'
import styled from 'styled-components'

export const TableHeadCell = ({ column, sortingBy }) => {
  const { label, name, extraProps } = column
  return (
    <StyledTh {...extraProps}>
      {label}
      {!column?.hideSortBy && sortingBy && (
        <img
          src={FilterIcon}
          alt={`Sorting By ${label}`}
          onClick={() => sortingBy(name)}
        />
      )}
    </StyledTh>
  )
}

export const StyledTh = styled.th`
  /* width: 2em; */
`
