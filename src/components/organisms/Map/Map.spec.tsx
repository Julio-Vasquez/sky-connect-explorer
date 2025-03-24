import type { PropsWithChildren } from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'

import MapComponent from '@components/organisms/Map'

/**
 * @file Tests for the MapComponent component.
 * @description Ensures that the Google Maps wrapper renders correctly with a marker, displays the InfoWindow
 * on click and hover events, and hides it on close or unhover interactions.
 */

type Events = {
  onClick?: () => void
  onMouseOver?: () => void
  onMouseOut?: () => void
}

jest.mock('@vis.gl/react-google-maps', () => ({
  APIProvider: ({ children }: PropsWithChildren) => <div>{children}</div>,
  Map: ({ children }: PropsWithChildren) => <div data-testid="map">{children}</div>,
  Marker: ({ onClick, onMouseOver, onMouseOut }: Events) => (
    <div
      data-testid="marker"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      Marker
    </div>
  ),
  InfoWindow: ({ children }: PropsWithChildren) => (
    <div data-testid="info-window">{children}</div>
  ),
}))

describe('MapComponent', () => {
  const mockProps = {
    latitude: -17.55,
    longitude: -149.61,
    airportName: 'Aeropuerto Tahiti',
    country: 'Polinesia Francesa',
  }

  test('should render Map and Marker', () => {
    render(<MapComponent {...mockProps} />)

    expect(screen.getByTestId('map')).toBeInTheDocument()
    expect(screen.getByTestId('marker')).toBeInTheDocument()
  })

  test('should show InfoWindow on marker click', async () => {
    render(<MapComponent {...mockProps} />)
    const marker = screen.getByTestId('marker')

    await userEvent.click(marker)

    const infoWindow = await screen.findByTestId('info-window')
    expect(infoWindow).toBeInTheDocument()

    expect(screen.getByText(mockProps.airportName)).toBeInTheDocument()
    expect(screen.getByText(mockProps.country!)).toBeInTheDocument()
  })

  test('should close InfoWindow on "X" button click', async () => {
    render(<MapComponent {...mockProps} />)
    const marker = screen.getByTestId('marker')
    await userEvent.click(marker)

    const closeButton = await screen.findByLabelText('Cerrar')
    await userEvent.click(closeButton)

    await waitFor(() => {
      expect(screen.queryByTestId('info-window')).not.toBeInTheDocument()
    })
  })

  test('should open InfoWindow after hover', async () => {
    render(<MapComponent {...mockProps} />)
    const marker = screen.getByTestId('marker')

    await userEvent.hover(marker)

    await waitFor(
      () => {
        expect(screen.getByTestId('info-window')).toBeInTheDocument()
      },
      { timeout: 500 },
    )
  })

  test('should NOT open InfoWindow if unhovered before 450ms', async () => {
    render(<MapComponent {...mockProps} />)
    const marker = screen.getByTestId('marker')

    await userEvent.hover(marker)
    await userEvent.unhover(marker)

    await waitFor(
      () => {
        expect(screen.queryByTestId('info-window')).not.toBeInTheDocument()
      },
      { timeout: 600 },
    )
  })
})
