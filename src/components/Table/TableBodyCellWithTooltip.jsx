import styled from 'styled-components'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export const TableBodyCellWithTooltip = ({ text, tooltipText, onClick }) => {
  return (
    <StyledTd onClick={onClick}>
      <OverlayTrigger
        placement='top'
        overlay={<Tooltip id={`table-cell-tooltip-top`}>{tooltipText}</Tooltip>}
      >
        <span>{text}</span>
      </OverlayTrigger>
    </StyledTd>
  )
}

export const StyledTd = styled.td`
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'normal')};
`
