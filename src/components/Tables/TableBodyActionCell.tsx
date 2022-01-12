import styled from 'styled-components'
// types and utils
import { IChildrenNode } from 'types'

export const TableBodyActionCell = ({ children }: IChildrenNode) => {
  return <StyledTd>{children}</StyledTd>
}

const StyledTd = styled.td`
  text-align: center;
`
