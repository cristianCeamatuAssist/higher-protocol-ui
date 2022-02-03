import styled, { css } from 'styled-components'

export const Button = ({ children, type, variant, size, color, invertOnHover, dataTest, disabled, onClick }) => {
  return (
    <StyledButton
      type={type || 'button'}
      variant={variant || 'contained'}
      color={color}
      size={size}
      invertOnHover={invertOnHover}
      onClick={onClick}
      data-test={dataTest || 'button'}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 40px;
  padding: 0.5rem 1rem;
  color: ${({ color, theme }) => (color ? theme.colors.white : theme.colors.dark)};
  background: ${({ theme, color }) => (color ? theme.colors[color] : 'transparent')};
  border: 1px solid ${({ color, theme }) => (color ? theme.colors[color] : 'transparent')};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.typography.h3};
  box-shadow: ${({ color, theme }) => (color ? theme.shadows.normal : 'none')};
  font-weight: bold;

  ${({ size, theme }) =>
    size === 'large' &&
    css`
      padding: 0.725rem 3rem;
      font-size: ${theme.typography.h2};
    `}

  ${({ size, theme }) =>
    size === 'small' &&
    css`
      padding: 0.325rem 1rem;
      font-size: ${theme.typography.small};
    `}

  ${({ size }) =>
    size === 'largeInline' &&
    css`
      padding-inline: 3rem;
    `};

  ${({ color, variant, theme }) =>
    variant === 'outlined' &&
    css`
      font-weight: 700;
      background: transparent;
      color: ${color ? theme.colors[color] : theme.colors.primary};
      border: 1px solid ${color ? theme.colors[color] : theme.colors.primary};
      box-shadow: none;
    `};

  &:hover {
    box-shadow: none;
    ${({ invertOnHover, color, theme, variant }) =>
      invertOnHover &&
      css`
        background: transparent;
        color: ${color ? theme.colors[color] : theme.colors.primary};
        border: 1px solid ${color ? theme.colors[color] : theme.colors.primary};

        ${variant === 'outlined' &&
        css`
          color: ${theme.colors.white};
          background: ${color ? theme.colors[color] : theme.colors.primary};
        `};
      `}
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: #fff;
      pointer-events: none;
      opacity: 0.7;
      background: #cbcbcb;
      border: 1px solid #cbcbcb;
      box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
    `};
`
