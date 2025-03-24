import { render, screen } from '@testing-library/react'
import LocationInfo from '@components/molecules/cards/LocationInfo'

/**
 * @file Tests for the LocationInfo component.
 * @description Ensures that the component renders the location data (latitude, longitude, Geoname ID) properly within a card layout.
 */
describe('LocationInfo Component', () => {
  const mockProps = {
    latitude: '-17.5537',
    longitude: '-149.6063',
    geonameId: '4034564',
  }

  test('should render LocationInfo correctly with data', () => {
    render(<LocationInfo {...mockProps} />)

    expect(screen.getByRole('heading', { name: /ubicación/i })).toBeInTheDocument()

    expect(screen.getByText(/latitud:/i)).toBeInTheDocument()
    expect(screen.getByText(/longitud:/i)).toBeInTheDocument()
    expect(screen.getByText(/id geoname:/i)).toBeInTheDocument()

    expect(screen.getByText(mockProps.latitude)).toBeInTheDocument()
    expect(screen.getByText(mockProps.longitude)).toBeInTheDocument()
    expect(screen.getByText(mockProps.geonameId)).toBeInTheDocument()
  })
})
