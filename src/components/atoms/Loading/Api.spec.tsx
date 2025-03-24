import { render, screen } from '@testing-library/react'

import LoaderFetch from '@components/atoms/Loading/Api'

/**
 * @file Tests for the LoaderFetch component.
 * @description Verifies that the loading spinner renders correctly and includes proper accessibility and animation classes.
 */

describe('LoaderFetch', () => {
  test('should render spinner with role="status"', () => {
    render(<LoaderFetch />)

    const statusElement = screen.getByRole('status')
    expect(statusElement).toBeInTheDocument()

    const svg = screen.getByRole('status').querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveClass('animate-spin')
  })
})
