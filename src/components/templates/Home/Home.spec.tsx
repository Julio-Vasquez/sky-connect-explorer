import { render, screen } from '@testing-library/react'
import { useAirportStore } from '@store/useAirportStore'

import Home from '@components/templates/Home'

/**
 * @file Tests for the Home template component.
 * @description Ensures the Home component renders correctly and properly initializes airport data using the global store.
 */

jest.mock('@components/organisms/AppHeader', () => {
  const MockHeader = () => <div data-testid="app-header">Mock Header</div>
  MockHeader.displayName = 'MockAppHeader'
  return MockHeader
})

const mockSetAirports = jest.fn()

jest.mock('@store/useAirportStore', () => ({
  useAirportStore: jest.fn(),
}))

describe('Home', () => {
  const mockAirports = [
    {
      id: '1',
      gmt: '-3',
      airport_id: 'EZE',
      iata_code: 'EZE',
      city_iata_code: 'BUE',
      icao_code: 'SAEZ',
      country_iso2: 'AR',
      geoname_id: '123',
      latitude: '-34.8222',
      longitude: '-58.5358',
      airport_name: 'Ministro Pistarini International Airport',
      country_name: 'Argentina',
      phone_number: '123456789',
      timezone: 'America/Argentina/Buenos_Aires',
    },
  ]

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useAirportStore as unknown as jest.Mock).mockReturnValue({
      setAirports: mockSetAirports,
    })
  })

  test('should render AppHeader', () => {
    render(<Home data={mockAirports} />)
    expect(screen.getByTestId('app-header')).toBeInTheDocument()
  })

  test('should call setAirports on mount', () => {
    render(<Home data={mockAirports} />)
    expect(mockSetAirports).toHaveBeenCalledWith(mockAirports)
  })

  test('should NOT call setAirports if data is undefined', () => {
    const data = undefined
    render(<Home data={data} />)
    expect(mockSetAirports).not.toHaveBeenCalled()
  })
})
