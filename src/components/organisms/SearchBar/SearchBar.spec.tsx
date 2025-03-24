import { useRouter } from 'next/navigation'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import SearchBar from './SearchBar'
import { notify } from '@lib/utils/notify'
import { useAirportStore } from '@store/useAirportStore'

/**
 * @file Tests for the SearchBar component.
 * @description Validates rendering and search behavior for vertical and horizontal layouts.
 * Ensures airport searches by name, IATA, or ICAO navigate correctly,
 * and handles edge cases like empty input or nonexistent airports.
 */

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

jest.mock('@store/useAirportStore', () => ({
  useAirportStore: jest.fn(),
}))

jest.mock('@lib/utils/notify', () => ({
  notify: {
    error: jest.fn(),
    success: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
  },
}))

jest.mock('@components/atoms/icons', () => ({
  Search: () => <div data-testid="search-icon">SearchIcon</div>,
}))

describe('SearchBar Component', () => {
  // Setup común para todas las pruebas
  const mockPush = jest.fn()
  const mockSetSearch = jest.fn()

  const mockAirports = [
    {
      id: '1',
      airport_name: 'Aeropuerto Internacional Benito Juárez',
      iata_code: 'MEX',
      icao_code: 'MMMX',
    },
    {
      id: '2',
      airport_name: 'Aeropuerto Internacional de Cancún',
      iata_code: 'CUN',
      icao_code: 'MMUN',
    },
  ]

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    })
    ;(useAirportStore as unknown as jest.Mock).mockReturnValue({
      airports: mockAirports,
      setSearch: mockSetSearch,
    })
  })

  test('should render correctly with vertical layout (default)', () => {
    render(<SearchBar />)

    const input = screen.getByPlaceholderText('Buscar aeropuertos...')
    const button = screen.getByRole('button', { name: /buscar/i })
    const container = button.parentElement

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(container).toHaveClass('flex-col')
    expect(input).toHaveClass('w-full')
  })

  test('should render correctly with horizontal layout', () => {
    render(<SearchBar layout="horizontal" />)

    const input = screen.getByPlaceholderText('Buscar aeropuertos...')
    const button = screen.getByRole('button', { name: /buscar/i })
    const container = button.parentElement

    expect(container).toHaveClass('flex-row')
    expect(input).toHaveClass('flex-1')
  })

  test('should navigate to airport by IATA code', () => {
    render(<SearchBar />)

    fireEvent.change(screen.getByPlaceholderText('Buscar aeropuertos...'), {
      target: { value: 'MEX' },
    })
    fireEvent.click(screen.getByRole('button', { name: /buscar/i }))

    expect(mockSetSearch).toHaveBeenCalledWith('MEX')
    expect(mockPush).toHaveBeenCalledWith('/airports/1')
    expect(notify.error).not.toHaveBeenCalled()
  })

  test('should navigate to airport by ICAO code', () => {
    render(<SearchBar />)

    fireEvent.change(screen.getByPlaceholderText('Buscar aeropuertos...'), {
      target: { value: 'MMUN' },
    })
    fireEvent.click(screen.getByRole('button', { name: /buscar/i }))

    expect(mockSetSearch).toHaveBeenCalledWith('MMUN')
    expect(mockPush).toHaveBeenCalledWith('/airports/2')
    expect(notify.error).not.toHaveBeenCalled()
  })

  test('should navigate to airport by name', () => {
    render(<SearchBar />)

    fireEvent.change(screen.getByPlaceholderText('Buscar aeropuertos...'), {
      target: { value: 'Cancún' },
    })
    fireEvent.click(screen.getByRole('button', { name: /buscar/i }))

    expect(mockSetSearch).toHaveBeenCalledWith('Cancún')
    expect(mockPush).toHaveBeenCalledWith('/airports/2')
    expect(notify.error).not.toHaveBeenCalled()
  })

  test('should show error message if no airport is found', () => {
    render(<SearchBar />)

    fireEvent.change(screen.getByPlaceholderText('Buscar aeropuertos...'), {
      target: { value: 'Aeropuerto inexistente' },
    })
    fireEvent.click(screen.getByRole('button', { name: /buscar/i }))

    expect(mockSetSearch).toHaveBeenCalledWith('Aeropuerto inexistente')
    expect(mockPush).not.toHaveBeenCalled()
    expect(notify.error).toHaveBeenCalledWith(
      'No se encontró ningún Aeropuerto con ese nombre',
      { theme: 'dark' },
    )
  })

  test('should do nothing when input is empty', () => {
    render(<SearchBar />)

    fireEvent.click(screen.getByRole('button', { name: /buscar/i }))

    expect(mockSetSearch).not.toHaveBeenCalled()
    expect(mockPush).not.toHaveBeenCalled()
    expect(notify.error).not.toHaveBeenCalled()
  })
})
