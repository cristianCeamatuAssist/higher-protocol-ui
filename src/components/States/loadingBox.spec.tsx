import { screen, render, queryByAttribute } from '@testing-library/react'
import '@testing-library/jest-dom'
// components
import { Theme, LoadingBox } from 'components'

describe(`LoadingBox component`, () => {
  it('should have the proper styles from when it was defined', () => {
    const customClass = 'test'
    const style: {
      animation?: 'grow' | 'border'
      variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
      size?: 'sm'
      className?: string
    } = {
      animation: 'grow',
      variant: 'primary',
      size: 'sm',
      className: customClass,
    }
    const { container } = render(
      <Theme>
        <LoadingBox {...style} />
      </Theme>,
    )
    const element = container.querySelector(`.${customClass}`)
    expect(element).toHaveClass('spinner-grow')
    expect(element).toHaveClass('spinner-grow-sm')
    expect(element).toHaveClass('text-primary')
  })
})
