import { useState } from 'react'
import styled from 'styled-components'
import cx from 'classnames'
import { Tabs, Tab, TabPane } from 'react-bootstrap'

const TabsComponent = ({ tabs, activeTab }) => {
  // local state
  const [key, setKey] = useState(activeTab || tabs[0].eventKey)
  return (
    <StyledTabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      mountOnEnter
      unmountOnExit
    >
      {tabs?.map((tab, i) => {
        const { eventKey, navIcon, navText, content, disabled } = tab

        return (
          <Tab
            key={eventKey}
            eventKey={eventKey}
            title={
              <span>
                {navIcon} {navText}
              </span>
            }
            disabled={disabled}
            tabClassName={cx({ pendingAction: i > 0 && !disabled })}
          >
            <TabPane>{content}</TabPane>
          </Tab>
        )
      })}
    </StyledTabs>
  )
}

export default TabsComponent

const StyledTabs = styled(Tabs)`
  border: none;
  flex-wrap: nowrap;
  padding: 1rem 2em;
  font-size: 15px;
  line-height: 22px;

  .nav-link {
    border: none;
    padding-inline: 1rem;
    color: #727272;

    &.active {
      font-weight: 600;
      color: #0f0e0e;
      border-radius: 8px;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: #4401d4;
      }
    }

    &:not(.active).pendingAction {
      position: relative;

      &::after {
        position: absolute;
        right: 0;
        top: 0.3rem;
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 50px;
        background: linear-gradient(0deg, #1bd084, #1bd084), #1bd084;
      }
    }
  }
`
