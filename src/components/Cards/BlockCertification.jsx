import styled from 'styled-components'
import HashLogo from 'assets/images/hash-logo.png'
import CopyLogo from 'assets/images/copy-logo.png'

export const BlockCertification = ({ hashLink, hashName, title, subtitle, authority, certification_date }) => {
  return (
    <Div id={`popover-positioned-${Math.random() * 1000}`} onClick={(e) => e.stopPropagation()}>
      <i className="hash-logo" />
      <div className="tooltip-content">
        <p className="title">Facultatea de Inginerie Electrică şi Ştiinţa Calculatoarelor</p>
        <p className="subtitle">Higher Protocol Certification</p>
        <p className="detail">
          Certified by:
          <span className="authority">Universitatea „Ştefan cel Mare” din Suceava</span>
        </p>
        <p className="detail">
          Certified on:
          <span className="detail-value">May 12, 2019</span>
        </p>
        <p className="detail">
          Hash:{' '}
          <a className="detail-value" rel="noreferrer" href={hashLink} target="_blank">
            {hashName}
          </a>
          <i className="copy-hash" />
        </p>
      </div>
    </Div>
  )
}

const Div = styled.div`
  background: #ffffff;
  box-shadow: ${({ theme }) => theme.shadows.light};
  border-radius: 10px;
  color: black;
  padding: 22px 27px 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  border: none;
  width: 640px;
  opacity: 1 !important;

  &:after {
    content: none !important;
  }

  .hash-logo {
    display: block;
    background: url(${HashLogo}) no-repeat center;
    width: 50px;
    height: 48px;
  }

  .copy-hash {
    display: inline-block;
    background: url(${CopyLogo});
    width: 16px;
    height: 16px;
    margin-left: 10px;

    &:hover {
      cursor: pointer;
    }
  }

  .tooltip-content {
    margin-left: 15px;

    .title {
      color: #0f0e0e;
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 0;
    }

    .subtitle {
      color: #a6a6a6;
      font-weight: 300;
      font-size: 11px;
      padding-top: 0;
    }

    .detail {
      color: #0f0e0e;
      font-weight: 600;
      font-size: 13px;

      .authority {
        color: #4501d4;
        font-weight: 400;
        margin-left: 18px;

        &:hover {
          cursor: pointer;
        }
      }

      .detail-value {
        margin-left: 18px;
        color: #808080;
        font-weight: 400;
        max-width: 400px;
        width: 400px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-decoration: none;
      }
    }
  }
`
