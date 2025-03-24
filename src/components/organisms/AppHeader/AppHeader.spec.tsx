import { render, screen } from '@testing-library/react'

import AppHeader from '@components/organisms/AppHeader'

/**
 * @file Tests for the AppHeader component.
 * @description Verifies that the AppHeader renders correctly with both vertical and horizontal layouts,
 * including its subcomponents: Title and SearchBar. Also ensures layout-based class changes.
 */

jest.mock('@components/atoms/AppTitle', () => {
  const MockTitle = () => <h1 data-testid="title">Mock Title</h1>
  MockTitle.displayName = 'MockTitle'
  return MockTitle
})

jest.mock('@components/organisms/SearchBar', () => {
  const MockSearchBar = ({ layout }: { layout: string }) => (
    <div data-testid="search-bar">SearchBar - {layout}</div>
  )
  MockSearchBar.displayName = 'MockSearchBar'
  return MockSearchBar
})

describe('AppHeader', () => {
  test('should render with default vertical layout', () => {
    render(<AppHeader />)

    expect(screen.getByTestId('title')).toBeInTheDocument()
    expect(screen.getByTestId('search-bar')).toHaveTextContent('vertical')
  })

  test('should render with horizontal layout', () => {
    render(<AppHeader layout="horizontal" />)

    expect(screen.getByTestId('title')).toBeInTheDocument()
    expect(screen.getByTestId('search-bar')).toHaveTextContent('horizontal')
  })

  test('should apply correct classes based on layout', () => {
    const { container: verticalContainer } = render(<AppHeader layout="vertical" />)
    expect(verticalContainer.firstChild).toHaveClass('flex-col')

    const { container: horizontalContainer } = render(
      <AppHeader layout="horizontal" />,
    )
    expect(horizontalContainer.firstChild).toHaveClass('justify-between')
  })
})
