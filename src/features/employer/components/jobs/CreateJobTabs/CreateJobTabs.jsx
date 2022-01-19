import styled from 'styled-components'
import { Card, Tabs, Tab } from 'react-bootstrap'
import { TabsBlock } from 'components'
// features
import { JobDescriptionTab, JobSmartContractTab, JobAssessmentTab } from 'features/employer'
export const CreateJobTabs = () => {
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
    },
    {
      eventKey: 'assessment',
      navText: 'Assessment',
      content: <JobAssessmentTab />,
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
