import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { describe, expect, it } from 'vitest'
import { TabLayout, Tab } from '../src/index'

const ERROR = 'TabLayout has no children'

describe('TabLayout', () => {
  it('should render correctly', () => {
    const sut = render(
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

    expect(sut).toBeDefined()
  })

  it('should render 3 tabs correctly', () => {
    const { queryAllByText } = render(
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

    const tab1Label = queryAllByText('Tab 1')
    const tab2Label = queryAllByText('Tab 2')
    const tab3Label = queryAllByText('Tab 3')
    const tab1Content = queryAllByText('Tab 1 content')
    const tab2Content = queryAllByText('Tab 2 content')
    const tab3Content = queryAllByText('Tab 3 content')

    expect(tab1Label).toBeDefined()
    expect(tab2Label).toBeDefined()
    expect(tab3Label).toBeDefined()
    expect(tab1Content).toBeDefined()
    expect(tab2Content).toBeDefined()
    expect(tab3Content).toBeDefined()
  })

  it('should throw and error without children', () => {
    expect(() => {
      try {
        render(<TabLayout></TabLayout>)
      } catch (error) {
        throw new Error(error.message)
      }
    }).toThrowError(ERROR)
  })

  it('should have one selected class', () => {
    const { queryAllByText } = render(
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

    const CLASS = 'tab-layout__tab--selected'

    const tab1 = queryAllByText('Tab 1')
    const tab2 = queryAllByText('Tab 2')
    const tab3 = queryAllByText('Tab 3')

    expect(tab1[0].classList.contains(CLASS)).toBe(true)
    expect(tab2[0].classList.contains(CLASS)).toBe(false)
    expect(tab3[0].classList.contains(CLASS)).toBe(false)
  })

  it('should change selected tab', () => {
    render(
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

    const TAB_2 = screen.getByText('Tab 2')

    fireEvent(
      TAB_2,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    expect(screen.getByText('Tab 2 content')).toBeDefined()
  })
})
