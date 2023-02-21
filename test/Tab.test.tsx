import { render } from '@testing-library/react'
import { Tab } from '../src/components/Tab'
import React from 'react'
import { describe, expect, it } from 'vitest'

const ERROR = 'You must specify a label and a children for Tab'

describe('Tab', () => {
  it('should render correctly', () => {
    const sut = render(
      <Tab label="TabLabel">
        <p> TabCotent </p>
      </Tab>
    )

    expect(sut).toBeDefined()
  })

  it('should render label correctly', () => {
    const { queryAllByText } = render(
      <Tab label="TabLabel">
        <p> TabCotent </p>
      </Tab>
    )

    const sut = queryAllByText('TabLabel')

    expect(sut).toBeDefined()
  })

  it('should render content correctly', () => {
    const { queryAllByText } = render(
      <Tab label="TabLabel">
        <p> TabCotent </p>
      </Tab>
    )

    const sut = queryAllByText('TabCotent')

    expect(sut).toBeDefined()
  })

  it('should throw an error without children', () => {
    expect(() => {
      try {
        render(<Tab label="TabLabel"></Tab>)
      } catch (error) {
        throw new Error(error.message)
      }
    }).toThrowError(ERROR)
  })

  it('should throw an error without label', () => {
    expect(() => {
      try {
        render(
          <Tab>
            <p> TabContent </p>
          </Tab>
        )
      } catch (error) {
        throw new Error(error.message)
      }
    }).toThrowError(ERROR)
  })
})
