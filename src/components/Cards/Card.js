import styled from 'styled-components'

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
  width: 351px;
  height: 169px;
  border-radius: 20px;
  display: inline-flex;
  padding: 30px 30px 16px;
  justify-content: space-between;
  margin-top: 10px;
  position: relative;

  &:not(:last-child) {
    margin-right: 30px;
  }

  .logo {
    height: 69px;
    width: 72px;

    &.applications-logo {
      background: url(../../images/icon.png);
    }

    &.schedule-logo {
      background: url(../../images/icon2.png);
    }

    &.profiles-logo {
      background: url(../../images/icon3.png);
    }

    &.messages-logo {
      background: url(../../images/icon4.png);
    }

    &.approved_requests-logo {
      background: url(../../images/icon.png);
    }

    &.rejected_requests-logo {
      background: url(../../images/icon.png);
    }
  }

  .trio {
    text-align: right;
    display: block;
    width: 130px;

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
