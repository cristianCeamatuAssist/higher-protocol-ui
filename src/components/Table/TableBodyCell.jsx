import styled from 'styled-components'

export const TableBodyCell = ({ children, onClick }) => {
  return <StyledTd onClick={onClick}>{children}</StyledTd>
}

export const StyledTd = styled.td`
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'normal')};
`
