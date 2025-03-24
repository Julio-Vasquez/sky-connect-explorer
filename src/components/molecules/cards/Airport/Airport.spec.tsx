import { render, screen } from '@testing-library/react'

import Airport from '@components/molecules/cards/Airport'

/**
 * @file Tests for the Airport component.
 * @description
 * Ensures the Airport card displays the correct name, location, IATA code,
 * and generates the correct navigation link.
 */

describe('Airport Component', () => {
  const mockProps = {
    name: 'Aeropuerto Internacional El Dorado',
    location: 'Bogotá, Colombia',
    iataCode: 'BOG',
    id: '123',
  }

  test('should render airport info correctly', () => {
    render(<Airport {...mockProps} />)

    expect(
      screen.getByRole('heading', { name: /aeropuerto internacional el dorado/i }),
    ).toBeInTheDocument()

    expect(screen.getByText('Bogotá, Colombia')).toBeInTheDocument()
    expect(screen.getByText('BOG')).toBeInTheDocument()

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute(
      'href',
      `/airports/${mockProps.id}?name=${encodeURIComponent(mockProps.name)}`,
    )
  })
})
