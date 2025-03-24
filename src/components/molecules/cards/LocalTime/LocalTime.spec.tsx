import { render, screen } from '@testing-library/react'

import LocalTime from '@components/molecules/cards/LocalTime'

/**
 * @file Tests for the LocalTime component.
 * @description
 * Verifies that the component renders the local time title, label, and live time correctly for a given timezone.
 */

describe('LocalTime Component', () => {
  const timezone = 'Pacific/Tahiti'

  test('should render title and clock correctly', () => {
    render(<LocalTime timezone={timezone} />)

    expect(screen.getByRole('heading', { name: /hora local/i })).toBeInTheDocument()

    expect(screen.getByText(/current time/i)).toBeInTheDocument()

    expect(screen.getByRole('time')).toBeInTheDocument()
  })
})
