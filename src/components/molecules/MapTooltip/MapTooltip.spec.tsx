import { render, screen, fireEvent } from '@testing-library/react'
import MapTooltip from '@components/molecules/MapTooltip'

/**
 * @file Tests for the MapTooltip component.
 * @description Verifies that the tooltip renders correctly with airport data, is enclosed in an InfoWindow, and handles the close button interaction.
 */

// InfoWindow Mock to avoid external dependencies on Google Maps
jest.mock('@vis.gl/react-google-maps', () => ({
  InfoWindow: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="info-window">{children}</div>
  ),
}))

describe('MapTooltip', () => {
  const mockProps = {
    latitude: -17.55,
    longitude: -149.61,
    airportName: 'Aeropuerto Tahiti',
    country: 'Polinesia Francesa',
    handleClose: jest.fn(),
  }

  beforeEach(() => jest.clearAllMocks())

  test('should render airport name and country', () => {
    render(<MapTooltip {...mockProps} />)

    expect(screen.getByText(mockProps.airportName)).toBeInTheDocument()
    expect(screen.getByText(mockProps.country!)).toBeInTheDocument()
  })

  test('should call handleClose when clicking the close button', () => {
    render(<MapTooltip {...mockProps} />)

    const closeButton = screen.getByLabelText(/cerrar/i)
    fireEvent.click(closeButton)

    expect(mockProps.handleClose).toHaveBeenCalledTimes(1)
  })

  test('should render inside InfoWindow', () => {
    render(<MapTooltip {...mockProps} />)
    expect(screen.getByTestId('info-window')).toBeInTheDocument()
  })

  test('close button should have correct inline styles', () => {
    render(<MapTooltip {...mockProps} />)

    const closeButton = screen.getByLabelText(/cerrar/i)

    expect(closeButton).toHaveStyle({
      position: 'absolute',
      top: '6px',
      right: '6px',
      cursor: 'pointer',
      background: 'transparent',
    })
  })
})
