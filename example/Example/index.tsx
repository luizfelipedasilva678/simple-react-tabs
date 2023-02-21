import React from 'react'
import { Tab, TabLayout } from 'simple-react-tabs'

const Example = () => {
  return (
    <TabLayout>
      <Tab label="Tab 1">
        <p>Tab 1 content</p>
      </Tab>
      <Tab label="Tab 2">
        <p>Tab 2 content</p>
      </Tab>
      <Tab label="Tab 3">
        <p>Tab 3 content</p>
      </Tab>
    </TabLayout>
  )
}

export default Example
