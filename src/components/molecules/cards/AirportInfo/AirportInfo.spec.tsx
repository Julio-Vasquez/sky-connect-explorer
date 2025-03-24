import { render, screen } from '@testing-library/react'

import AirportInfo from '@components/molecules/cards/AirportInfo'

/**
 * @file Tests for the AirportInfo component.
 * @description
 * Validates that the AirportInfo component renders the correct airport information,
 * including fallbacks for optional values like phone number.
 */

describe('AirportInfo Component', () => {
  const mockProps = {
    iata: 'AAA',
    icao: 'NTGA',
    country: 'French Polynesia',
    cityIata: 'AAAE',
    phone: undefined,
  }

  test('should render AirportInfo correctly', () => {
    render(<AirportInfo {...mockProps} />)

    expect(
      screen.getByRole('heading', { name: /información general/i }),
    ).toBeInTheDocument()

    expect(screen.getByText(/código iata:/i)).toBeInTheDocument()
    expect(screen.getByText(mockProps.iata)).toBeInTheDocument()

    expect(screen.getByText(/código icao:/i)).toBeInTheDocument()
    expect(screen.getByText(mockProps.icao)).toBeInTheDocument()

    expect(screen.getByText(/país:/i)).toBeInTheDocument()
    expect(screen.getByText(mockProps.country!)).toBeInTheDocument()

    expect(screen.getByText(/ciudad iata:/i)).toBeInTheDocument()
    expect(screen.getByText(mockProps.cityIata)).toBeInTheDocument()

    expect(screen.getByText(/teléfono:/i)).toBeInTheDocument()
    expect(screen.getByText(/no disponible/i)).toBeInTheDocument()
  })

  test('should render phone number when available', () => {
    render(<AirportInfo {...mockProps} phone="123456789" />)
    expect(screen.getByText('123456789')).toBeInTheDocument()
  })
})
