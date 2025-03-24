import { render, screen, fireEvent } from '@testing-library/react'

import Tabs from '@components/templates/Tabs'
import { useAirportStore } from '@store/useAirportStore'
import { getAirportById } from '@lib/utils/getAirportById'

/**
 * @file Tests for the Tabs template component.
 * @description Validates that the Tabs component renders the correct airport information and handles tab navigation correctly.
 */

jest.mock('@store/useAirportStore', () => ({
  useAirportStore: jest.fn(),
}))

jest.mock('@lib/utils/getAirportById')

jest.mock('@components/organisms/Map', () => {
  const Mock = () => <div>Mocked Map</div>
  Mock.displayName = 'MockedMap'
  return Mock
})

jest.mock('@components/molecules/cards/AirportInfo', () => {
  const Mock = () => <div>Airport Info</div>
  Mock.displayName = 'AirportInfo'
  return Mock
})

jest.mock('@components/molecules/cards/LocationInfo', () => {
  const Mock = () => <div>Location Info</div>
  Mock.displayName = 'LocationInfo'
  return Mock
})

jest.mock('@components/molecules/cards/TimezoneInfo', () => {
  const Mock = () => <div>Timezone Info</div>
  Mock.displayName = 'TimezoneInfo'
  return Mock
})

jest.mock('@components/molecules/cards/LocalTime', () => {
  const Mock = () => <div>Local Time</div>
  Mock.displayName = 'LocalTime'
  return Mock
})

jest.mock('@components/atoms/AppTitle', () => {
  const Mock = ({ title }: { title: string }) => <h1>{title}</h1>
  Mock.displayName = 'AppTitle'
  return Mock
})

describe('Tabs Component', () => {
  const mockAirport = {
    id: '123',
    airport_name: 'Mock Airport',
    iata_code: 'ABC',
    city_iata_code: 'ABC',
    icao_code: 'XYZ123',
    country_name: 'Wonderland',
    phone_number: '123456789',
    geoname_id: '9999',
    latitude: '40.1234',
    longitude: '-3.5678',
    gmt: '-3',
    timezone: 'America/Argentina/Buenos_Aires',
  }

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useAirportStore as unknown as jest.Mock).mockReturnValue({
      airports: [mockAirport],
    })
    ;(getAirportById as jest.Mock).mockReturnValue(mockAirport)
  })

  test('should render airport title and tabs', () => {
    render(<Tabs id={123} />)

    expect(screen.getByText('Mock Airport')).toBeInTheDocument()
    expect(screen.getByText('General')).toBeInTheDocument()
    expect(screen.getByText('Ubicación')).toBeInTheDocument()
    expect(screen.getByText('Zona Horaria')).toBeInTheDocument()
    expect(screen.getByText('Estadísticas')).toBeInTheDocument()
  })

  test('should render AirportInfo by default', () => {
    render(<Tabs id={123} />)
    expect(screen.getByText('Airport Info')).toBeInTheDocument()
  })

  test('should switch to Ubicación tab on click', () => {
    render(<Tabs id={123} />)

    fireEvent.click(screen.getByText('Ubicación'))

    expect(screen.getByText('Location Info')).toBeInTheDocument()
    expect(screen.getByText('Mocked Map')).toBeInTheDocument()
  })

  test('should render null if airport is not found', () => {
    ;(getAirportById as jest.Mock).mockReturnValue(undefined)

    const { container } = render(<Tabs id={999} />)

    expect(container.firstChild).toBeNull()
  })
})
