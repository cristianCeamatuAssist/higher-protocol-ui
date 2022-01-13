import styled from 'styled-components'
import MessSrc from 'assets/images/mess.png'
import CallSrc from 'assets/images/call.png'
import CalendarSrc from 'assets/images/calendar.png'
import MailSrc from 'assets/images/mail.png'
import PhoneSrc from 'assets/images/phone.png'
import AddressSrc from 'assets/images/address.png'
// features
import { avatarsArray, getRandomNumber, CandidateMatchScore } from 'features/employer'

export const CandidateDetailsCard = ({ candidate }) => {
  const { match_score, first_name, last_name, position } = candidate

  return (
    <StyledDiv>
      <div className="details-small">
        <div className="user-info">
          <div className="user-picture">
            <img src={avatarsArray[getRandomNumber(3)]} alt="Candidate" />
            <div className="match-score">
              <CandidateMatchScore score={match_score} />
            </div>
          </div>

          <div className="details">
            <p id="full-name">{`${first_name} ${last_name}`}</p>
            <p id="position">{position}</p>
          </div>
        </div>

        <div className="contact-logos">
          <div className="contact-button-container">
            <button className="message" />
          </div>
          <div className="contact-button-container">
            <button className="call" />
          </div>
          <div className="contact-button-container">
            <button className="calendar" />
          </div>
        </div>
        <div className="contact-details">
          <h4>Contact details</h4>
          <div className="email">
            <div className="email-logo" />
            <div className="duo">
              <p className="field">Email</p>
              <p>gigi.lee.jo@gmail.com</p>
            </div>
          </div>
          <div className="phone">
            <div className="phone-logo" />
            <div className="duo">
              <p className="field">Phone</p>
              <p>(+40) 767 123 456</p>
            </div>
          </div>
          <div className="address">
            <div className="address-logo" />
            <div className="duo">
              <p className="field">Address</p>
              <p>Tomis 11, Ap.9 Etaj 2, Constanta</p>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  )
}

export const StyledDiv = styled.div`
  width: 100%;
  text-align: center;
  padding: 32px 24px 50px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 4px 0 rgba(62, 73, 84, 0.04);
  height: fit-content;

  .user-info {
    .user-picture {
      width: 110px;
      height: 110px;
      margin: auto;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        transform-origin: 50% 50%;
        overflow: hidden;
        border-radius: 55px;
      }

      .match-score {
        position: absolute;
        z-index: 2;
        width: 61px;
        height: 61px;
        border-radius: 35px;
        background-color: white;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 32px;
        font-weight: 700;
        line-height: 61px;
        right: -60%;
        bottom: 0;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);

        &.green {
          color: #1bd084;
        }

        &.light-orange {
          color: #e99b03;
        }

        &.orange {
          color: #d0671b;
        }

        &.red {
          color: #d0261b;
        }
      }
    }

    .details {
      #full-name {
        font-weight: 600;
        font-size: 26px;
        line-height: 39px;
      }

      #position {
        color: #808080;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }

  .contact-logos {
    display: inline-flex;

    button {
      width: 40px;
      height: 40px;
    }

    .message {
      //background-color: #EEF0F3;
      background: url(${MessSrc}) center no-repeat #eef0f3;
      margin-right: 32px;
      border: none;
      border-radius: 20px;
    }

    .call {
      background: url(${CallSrc}) center no-repeat #eef0f3;
      margin-right: 32px;
      border: none;
      border-radius: 20px;
    }

    .calendar {
      background: url(${CalendarSrc}) center no-repeat #eef0f3;
      border: none;
      border-radius: 20px;
    }
  }

  .contact-details {
    margin-top: 60px;
    //margin-left: 24px;
    text-align: left;

    p {
      margin-left: 14px;
    }

    h4 {
      font-size: 18px;
      font-weight: 600;
      line-height: 27px;
    }

    .email {
      margin-top: 22px;
      display: inline-flex;

      .email-logo {
        background: url(${MailSrc});
        width: 24px;
        height: 24px;
        margin-bottom: 32px;
      }

      .duo {
        display: block;

        .field {
          color: #d2d2d2;
          margin-bottom: 0;
        }

        :last-child {
          color: #0f0e0e;
          font-weight: 500;
          font-size: 15px;
        }
      }
    }

    .phone {
      display: inline-flex;

      .phone-logo {
        background: url(${PhoneSrc}) left no-repeat;
        width: 24px;
        height: 24px;
        margin-bottom: 32px;
      }

      .duo {
        display: block;

        .field {
          color: #d2d2d2;
          margin-bottom: 0;
        }

        :last-child {
          color: #0f0e0e;
          font-weight: 500;
          font-size: 15px;
        }
      }
    }

    .address {
      display: inline-flex;

      .address-logo {
        background: url(${AddressSrc}) left no-repeat;
        height: 24px;
        width: 24px;
      }

      .duo {
        display: block;

        .field {
          color: #d2d2d2;
          margin-bottom: 0;
        }

        :last-child {
          color: #0f0e0e;
          font-weight: 500;
          font-size: 15px;
        }
      }
    }
  }
`
