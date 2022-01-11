import styled from 'styled-components'
// styles and assets
import { ReactComponent as EllipseIcon } from 'assets/icons/Ellipse.svg'

export const TableBodyCellTh = ({ iconSrc, text, pendingAction }) => {
  return (
    <StyledTh>
      <div className='icon'>
        {pendingAction && <EllipseIcon />}
        {iconSrc && <img src={iconSrc} alt='User Icon' className='user-icon' />}
      </div>
      {text || ''}
    </StyledTh>
  )
}

export const StyledTh = styled.th`
  display: flex;
  align-items: center;
  font-size: 1rem;

  .icon {
    position: relative;

    svg {
      position: absolute;
      right: 0.7em;
      width: 0.5em;
      height: 0.5em;

      circle {
        fill: ${({ theme }) => theme.colors.primaryRed};
      }
    }
  }
`
