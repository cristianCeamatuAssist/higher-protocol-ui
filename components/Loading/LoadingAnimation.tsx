import styled from 'styled-components'

export interface IProps {
  width?: string | number
  bgColor?: string
  marginTop?: string | number
  marginLeft?: string | number
  marginRight?: string | number
  marginBottom?: string | number
}

const LoadingAnimation = ({ width, bgColor, marginTop, marginLeft, marginRight, marginBottom }: IProps) => {
  return (
    <Spinner
      width={width}
      bgColor={bgColor}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginBottom={marginBottom}
      data-test="loadingAnimation"
    >
      <div />
      <div />
      <div />
    </Spinner>
  )
}

const Spinner = styled.div<IProps>`
  margin-top: ${({ marginTop }) => marginTop || 'auto'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '30px'};
  margin-left: ${({ marginLeft }) => marginLeft || 'auto'};
  margin-right: ${({ marginRight }) => marginRight || 'auto'};
  width: ${({ width }) => width || 70}px;
  text-align: center;

  & > div {
    width: ${({ width }) => (width ? Math.floor(+width / 3.88) : 18)}px;
    height: ${({ width }) => (width ? Math.floor(+width / 3.88) : 18)}px;
    background-color: ${({ bgColor }) => bgColor || '#5E72E4'};

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  & div:nth-child(1) {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  & div:nth-child(2) {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`

export default LoadingAnimation
