import { render, screen } from '@testing-library/react'
import TimezoneInfo from '@components/molecules/cards/TimezoneInfo'

/**
 * @file Tests for the TimezoneInfo component.
 * @description Verifies that the component renders the timezone name and GMT offset correctly within the card layout.
 */
describe('TimezoneInfo Component', () => {
  const mockProps = {
    timezone: 'Pacific/Tahiti',
    gmtOffset: '-10',
  }

  test('should render TimezoneInfo correctly with data', () => {
    render(<TimezoneInfo {...mockProps} />)

    expect(
      screen.getByRole('heading', { name: /zona horaria/i }),
    ).toBeInTheDocument()

    expect(screen.getByText(/zona horaria:/i)).toBeInTheDocument()
    expect(screen.getByText(/gmt:/i)).toBeInTheDocument()

    expect(screen.getByText(mockProps.timezone)).toBeInTheDocument()
    expect(screen.getByText(mockProps.gmtOffset)).toBeInTheDocument()
  })
})
