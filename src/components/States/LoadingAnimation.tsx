import { Spinner } from 'react-bootstrap'

interface IProps {
  animation?: 'grow' | 'border'
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  size?: 'sm'
  className?: string
}

export const LoadingAnimation = ({ animation = 'grow', size = 'sm', className, variant = 'light' }: IProps) => {
  return <Spinner animation={animation} variant={variant || 'primary'} size={size} className={className} />
}
