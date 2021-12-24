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
  border-radius: 40px;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.primary)};
  border: 1px solid ${({ color, theme }) => (color ? theme.colors[color] : theme.colors.primary)};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.typography.h3};
  box-shadow: ${({ theme }) => theme.shadows.normal};

  ${({ size, theme }) =>
    size === 'large' &&
    css`
      padding: 0.875rem 4rem;
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
      pointer-events: none;
      opacity: 0.7;
    `};
`