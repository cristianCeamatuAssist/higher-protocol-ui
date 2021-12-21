import styled from 'styled-components'
// components
import LoadingAnimation from './LoadingAnimation'
// types and utils
import { IProps as ILoadingAnimationProps } from './LoadingAnimation'

export interface IProps extends ILoadingAnimationProps {
  message?: string
}

const Loading = ({ message, width, bgColor, marginTop, marginLeft, marginRight, marginBottom }: IProps) => {
  return (
    <Wrapper>
      <div className="loading-content">
        <LoadingAnimation
          width={width}
          bgColor={bgColor}
          marginTop={marginTop}
          marginLeft={marginLeft}
          marginRight={marginRight}
          marginBottom={marginBottom}
          data-test="loadingComponent"
        />
        {message && <h2>{message}</h2>}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  backdrop-filter: blur(2px);
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255, 0.35);

  .loading-content {
    position: relative;
    top: -8%;

    h2 {
      color: $color-grey-32;
    }
  }
`

export default Loading
