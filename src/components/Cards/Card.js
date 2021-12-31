import styled from 'styled-components'
// styles and assets
import Icon from 'assets/images/icon.png'
import Icon2 from 'assets/images/icon2.png'
import Icon3 from 'assets/images/icon3.png'
import Icon4 from 'assets/images/icon4.png'

export const Card = ({ card }) => {
  return (
    <StyledDiv style={{ backgroundColor: card.backgroundColor }}>
      <div className={`logo ${card.logo}`} />
      <div className="trio">
        <p className="title">{card.title}</p>
        <p className="value">{card.value}</p>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  background-color: #48a9f8;
  min-width: min(250px, 40%);
  max-width: min(351px, 40%);
  flex-grow: 1;
  height: min(169px, 20vh);
  border-radius: 20px;
  display: inline-flex;
  padding: 30px 30px 16px;
  justify-content: space-between;
  position: relative;

  .logo {
    height: 69px;
    width: 72px;

    &.applications-logo {
      background: url(${Icon});
    }

    &.schedule-logo {
      background: url(${Icon2});
    }

    &.profiles-logo {
      background: url(${Icon3});
    }

    &.messages-logo {
      background: url(${Icon4});
    }

    &.approved_requests-logo {
      background: url(${Icon});
    }

    &.rejected_requests-logo {
      background: url(${Icon});
    }
  }

  .trio {
    text-align: right;
    display: block;
    width: 130px;
    max-width: 50%;

    .title {
      margin-bottom: 0;
      color: #ffffff;
      font-weight: 500;
      font-size: 18px;
    }

    .value {
      font-weight: 600;
      font-size: 48px;
      color: #ffffff;
      position: absolute;
      bottom: 0;
      right: 30px;
    }
  }
`
