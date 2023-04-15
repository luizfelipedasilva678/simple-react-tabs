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

    expect(tab1[0].parentElement?.classList.contains(CLASS)).toBe(true)
    expect(tab2[0].classList.contains(CLASS)).toBe(false)
    expect(tab3[0].classList.contains(CLASS)).toBe(false)
  })

  it('should change to tab 2', () => {
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

  it('should change to tab 3', () => {
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

    const TAB_3 = screen.getByText('Tab 3')

    fireEvent(
      TAB_3,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    expect(screen.getByText('Tab 3 content')).toBeDefined()
  })

  it('should render tab content correctly', () => {
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

    const sut = document.querySelector('.tab-layout__content')

    expect(sut).toBeDefined()
  })

  it('should render tab content with correct padding', () => {
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

    const sut = document.querySelector('.tab-layout__content')

    expect(sut).toHaveStyle(`padding: 1.2em`)
  })

  it('should render tab content with correct font-size', () => {
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

    const sut = document.querySelector('.tab-layout__content')

    expect(sut).toHaveStyle(`font-size: 1em`)
  })

  it('should render tabs with correct list-style', () => {
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

    const sut = document.querySelector('.tab-layout__tabs')

    expect(sut).toHaveStyle(`list-style: none`)
  })

  it('should render tabs with correct display infos', () => {
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

    const sut = document.querySelector('.tab-layout__tabs')

    expect(sut).toHaveStyle(`display: flex`)
    expect(sut).toHaveStyle(`align-items: center`)
    expect(sut).toHaveStyle(`justify-content: center`)
  })

  it('should render tab selected with correct style', () => {
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

    const sut = document.querySelector('.tab-layout__tab--selected')

    expect(sut).toHaveStyle(`border-bottom: solid 1px #000`)
  })

  it('should render tab with correct cursor style', () => {
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

    const sut = document.querySelector('.tab-layout__tab')

    expect(sut).toHaveStyle(`cursor: pointer`)
  })

  it('should render tab with correct margin', () => {
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

    const sut = document.querySelector('.tab-layout__tab')

    expect(sut).toHaveStyle(`margin-right: 0.5em`)
  })

  it('should render tab content with correct font-family', () => {
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

    const sut = document.querySelector('.tab-layout__content')

    expect(sut).toHaveStyle(`font-family: sans-serif`)
  })

  it('should render 3 tabs', () => {
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

    const sut = document.querySelectorAll('.tab-layout__tab')

    expect(sut.length).toEqual(3)
  })

  it('should render main tag', () => {
    render(
      <TabLayout>
        <Tab label="Tab 1">
          <main>Tab 1 content</main>
        </Tab>
        <Tab label="Tab 2">
          <section>Tab 2 content</section>
        </Tab>
        <Tab label="Tab 3">
          <p>Tab 3 content</p>
        </Tab>
      </TabLayout>
    )

    const main = document.getElementsByTagName('main')

    expect(main.length).toEqual(1)
  })

  it('should render section tag', () => {
    render(
      <TabLayout>
        <Tab label="Tab 1">
          <main>Tab 1 content</main>
        </Tab>
        <Tab label="Tab 2">
          <section>Tab 2 content</section>
        </Tab>
        <Tab label="Tab 3">
          <p>Tab 3 content</p>
        </Tab>
      </TabLayout>
    )

    const section = document.getElementsByTagName('section')

    fireEvent(
      screen.getByText('Tab 2'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    expect(section.length).toEqual(1)
  })

  it('should render p tag', () => {
    render(
      <TabLayout>
        <Tab label="Tab 1">
          <main>Tab 1 content</main>
        </Tab>
        <Tab label="Tab 2">
          <section>Tab 2 content</section>
        </Tab>
        <Tab label="Tab 3">
          <p>Tab 3 content</p>
        </Tab>
      </TabLayout>
    )

    const p = document.getElementsByTagName('p')

    fireEvent(
      screen.getByText('Tab 3'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    expect(p.length).toEqual(1)
  })
})
