import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'
import company_logousv from 'assets/images/company_logo-usv.png'
import company_logousv2 from 'assets/images/company_logo-usv.png'
import company_logoassist from 'assets/images/company_logo-assist.png'
import company_logokoenig from 'assets/images/company_logo-koenig.png'
import checkmarkchecked from 'assets/images/checkmark-checked.png'
import checkmarkchecked2 from 'assets/images/checkmark-checked.png'
import checkmarkwaiting from 'assets/images/checkmark-waiting.png'

import { BlockCertification } from 'components'

export const Experience = ({ experience }) => {
  return (
    <StyledDiv>
      <div className="logo">
        {experience.logo === 'usv' && <div className={`company-logo`} />}
        {experience.logo !== 'usv' && <div className={`company-logo`} />}
        <div
          data-tip
          data-for="global"
          className={`p-relative checkmark ${experience.checked ? 'waiting' : 'checked'}`}
        />
      </div>
      <div className="display">
        <div className="duo">
          <p className="name">{experience.name}</p>
          {experience.company && (
            <p className="org">
              {experience.company} | {experience.duration}
            </p>
          )}
          {experience.org && <p className="org">{experience.org}</p>}
        </div>

        {experience.description && (
          <div className="description">
            <ul dangerouslySetInnerHTML={{ __html: experience.description.toString() }} />
          </div>
        )}
      </div>

      <ReactTooltip
        id="global"
        place="right"
        aria-haspopup="true"
        role="example"
        type="dark"
        className="experience_tooltip"
        effect="solid"
        event="click"
        backgroundColor="transparent"
      >
        <BlockCertification />
      </ReactTooltip>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 36px;
  }

  .logo {
    position: relative;
    .company-logo {
      background: url(${company_logousv}) center no-repeat #eef0f3;
      height: 56px;
      width: 56px;
      border-radius: 32px;
      position: relative;

      &.usv {
        background: url(${company_logousv2}) center no-repeat #eef0f3;
      }

      &.assist {
        background: url(${company_logoassist}) center no-repeat #eef0f3;
      }

      &.koenig {
        background: url(${company_logokoenig}) center no-repeat #eef0f3;
      }
    }

    .checkmark {
      background: url(${checkmarkchecked}) white;
      width: 28px;
      height: 28px;
      transform: translate(14px, -14px);
      border-radius: 15px;
      position: absolute;

      &.checked {
        background: url(${checkmarkchecked2}) white no-repeat center;
      }

      &.waiting {
        background: url(${checkmarkwaiting}) white;
      }
    }
  }

  .display {
    display: inline-block;
    width: calc(100% - 90px);
    padding-top: 4px;

    .duo {
      display: block;
      margin-left: 16px;

      .name {
        font-size: 15px;
        font-weight: 600;
        color: #0f0e0e;
        margin-bottom: 0;
      }

      .org {
        font-weight: 500;
        font-size: 13px;
        color: #727272;
        margin-top: 0;
      }
    }

    .description {
      margin-top: 12px;
    }
  }
`
