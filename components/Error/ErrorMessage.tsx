import styled from 'styled-components'

interface IProps {
  message: string
}

const ErrorMessage = ({ message }: IProps) => {
  return <Message>{message}</Message>
}

const Message = styled.p`
  margin: 15px auto;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme[theme.current].colors.danger};
`

export default ErrorMessage
