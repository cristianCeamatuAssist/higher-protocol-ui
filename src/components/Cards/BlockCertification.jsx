import styled from 'styled-components'
// import ReactTooltip from 'react-tooltip'

export const BlockCertification = ({ hashLink, hashName, title, subtitle, authority, certification_date }) => {
  return (
    <Div id={`popover-positioned-${Math.random() * 1000}`}>
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
  background-color: white;
  box-shadow: 4px 4px 4px 4px rgba(62, 73, 84, 0.04);
  color: black;
  opacity: 1 !important;
  padding: 22px 27px 0;
  border: 1px solid #808080;
  display: flex;
  max-width: 640px;

  &:after {
    content: none !important;
  }

  .hash-logo {
    display: block;
    background: url(../images/hash-logo.png) no-repeat center;
    width: 50px;
    height: 48px;
  }

  .copy-hash {
    display: inline-block;
    background: url(../images/copy-logo.png);
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
