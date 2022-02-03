import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import { TabsBlock } from 'components'
// features
import { JobDescriptionTab, JobSmartContractTab, JobAssessmentTab } from 'features/employer'
export const CreateJobTabs = () => {
  const { job } = useSelector((state) => state.employer)

  const tabs = [
    {
      eventKey: 'home',
      navText: 'Description',
      content: <JobDescriptionTab />,
    },
    {
      eventKey: 'smart-contract',
      navText: 'Smart Contract',
      content: <JobSmartContractTab />,
      disabled: !job,
    },
    {
      eventKey: 'assessment',
      navText: 'Assessment',
      content: <JobAssessmentTab />,
      disabled: !job,
    },
  ]

  return (
    <Div>
      <Card className="card-job">
        <TabsBlock tabs={tabs} />

        <Card.Body />
      </Card>
    </Div>
  )
}

const Div = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 0px rgba(62, 73, 84, 0.04);
  border-radius: 20px;
  margin-top: 20px;
`
