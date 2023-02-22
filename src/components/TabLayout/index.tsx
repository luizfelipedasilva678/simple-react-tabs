import React, { useState, Children } from 'react'
import { TabLayoutProps } from '../../typings/TabLayout'
import '../../styles/simple-react-tabs.css'

export const TabLayout = ({ children }: TabLayoutProps) => {
  const [currentTab, setCurrentTab] = useState(0)

  if (!children) {
    throw new Error('TabLayout has no children')
  }

  const tabs = Children.map(children, (child, index) => {
    const id = index

    return React.cloneElement(child, {
      active: currentTab === id,
    })
  })

  const labels = Children.map(children, (child) => {
    const label = child.props.label

    return label
  })

  return (
    <div className="tab-layout">
      <ul className="tab-layout__tabs">
        {labels.map((label, index) => (
          <li
            className={`tab-layout__tab ${
              currentTab === index ? 'tab-layout__tab--selected' : ''
            } `}
            key={index}
            onClick={() => setCurrentTab(index)}
          >
            {label}
          </li>
        ))}
      </ul>
      <div className="tab-layout__content">{tabs}</div>
    </div>
  )
}
