# simple-react-tabs
Simple tab component for ReactJS

## Example of Usage

```js
import React from 'react'
import { Tab, TabLayout } from 'simple-react-tabs'
import './style.css'

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
```

## API

### Components

#### \<TabLayout /\>

---

#### \<Tab /\>

##### label: `string`

## Styling

simple-react-tabs come with some default styles with you want to overwrite them just add this classes to your css files.

- `tab-layout__tabs`
- `tab-layout__content`
- `tab-layout__tab`
- `tab-layout__tab--selected`



