import styled from 'styled-components'
// components
import { CompanyLayout } from 'components'
// features
import { CreateJobTabs } from 'features/employer'
export const CreateJob = () => {
  return (
    <CompanyLayout>
      <StyledDiv>
        <CreateJobTabs />
      </StyledDiv>
    </CompanyLayout>
  )
}

const StyledDiv = styled.div`
  .tab-header {
    padding-left: 40px;
  }

  .big_label {
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #0f0e0e;
  }

  .margin-tb-sm {
    margin-bottom: 15px;
    margin-top: 15px;
  }

  .bigger-space {
    padding-left: 40px;
    padding-right: 40px;
  }

  .bigger-space-contract {
    padding-left: 40px;
    padding-right: 10px;
  }

  .date-form {
    color: #c1bbbb;
    border: 1px solid #c1bbbb;
  }

  .date-form label {
    padding-left: 20px;
    padding-top: 11px;
    margin-bottom: 0px;
  }

  .date-form .form-control {
    border: 0px;
    padding-left: 20px;
  }

  .row-candidate {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    max-width: 14rem;

    :first-child {
      padding-right: 10px;
    }
  }

  .matching-score {
    padding-top: 35px;
  }

  .button-add {
    margin-top: 32px;
  }

  .contract_success {
    color: #1bd084;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
  }

  .contract_reward {
    color: #4501d4;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
  }

  .contract_condition {
    background: #f2f2f2;
    padding: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .class_row {
    margin-top: 18px;
    margin-bottom: 18px;
  }

  .m-t-1 {
    margin-top: 8px;
  }

  .m-t-3 {
    margin-top: 24px;
  }

  .m-r-1 {
    margin-right: 8px;
  }

  .m-r-3 {
    margin-right: 24px;
  }
`
