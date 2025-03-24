import { render, screen } from '@testing-library/react'

import Title from '@components/atoms/AppTitle'

/**
 * @file Tests for the AppTitle component.
 * @description Verifies that the Title component renders correctly with default and custom titles.
 */

describe('Title', () => {
  test('should render the default title correctly', () => {
    render(<Title />)
    const titleElement = screen.getByTestId('title')
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveTextContent('SkyConnect Explorer')
  })

  test('should render custom title when provided', () => {
    render(<Title title="My Custom Title" />)
    expect(screen.getByTestId('title')).toHaveTextContent('My Custom Title')
  })
})
