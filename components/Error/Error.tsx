import { Link } from 'react-router-dom'
import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
// styles and assets
// import { ReactComponent as ErrorLogo } from 'assets/images/error.svg'

interface IProps {
  message: string | boolean
  hideIcon?: true
  bgColor?: string
  title?: string
  btnLink?: string
  btnClassName?: string
  btnText?: string
  contentOffset?: string
}

const Error = ({ message, hideIcon, title, btnText, btnClassName, btnLink, bgColor, contentOffset }: IProps) => {
  // styles
  const Wrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: center;
    background: ${bgColor};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;

    > div {
      position: relative;
      max-width: 80%;
      top: ${contentOffset || '-50px'};
      text-transform: none;

      h3 {
        margin: 16px auto;
        font-weight: 500;
      }
    }
  `
  // global state
  const theme = useContext(ThemeContext)

  // variables
  const iconColor = theme?.[theme.current]?.colors?.danger || 'red'
  const btnClass = btnClassName || 'btn btn-primary'
  const to = btnLink || '/'

  return (
    <Wrapper data-test="errorComponent">
      <div>
        {/* {!hideIcon && <ErrorLogo fill={iconColor} width="150" height="150" />} */}

        {title && <h2>{title}</h2>}

        <h3>{message}</h3>

        {btnText && (
          <Link className={btnClass} to={to}>
            {btnText}
          </Link>
        )}
      </div>
    </Wrapper>
  )
}

export default Error
