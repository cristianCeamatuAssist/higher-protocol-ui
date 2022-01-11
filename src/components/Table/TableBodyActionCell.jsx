import styled from 'styled-components'

export const TableBodyActionCell = ({ children }) => {
  return <StyledTd className='wrapper-images'>{children}</StyledTd>
}

export const StyledTd = styled.td`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.325em;
`
