import { act } from 'react'
import { renderHook } from '@testing-library/react'

import { useAirportStore } from '@store/useAirportStore'

describe('useAirportStore', () => {
  beforeEach(() => {
    // Limpia el localStorage antes de cada test
    localStorage.clear()
    useAirportStore.setState({ search: [], airports: [] }) // ← limpia estado del store
  })

  test('should add new search terms to history', () => {
    const { result } = renderHook(() => useAirportStore())

    act(() => {
      result.current.setSearch('EZE')
    })

    expect(result.current.search).toContain('EZE')

    act(() => {
      result.current.setSearch('EZE') // intenta duplicado
    })

    expect(result.current.search).toEqual(['EZE']) // no se duplica
  })

  test('should ignore empty search input', () => {
    const { result } = renderHook(() => useAirportStore())

    act(() => {
      result.current.setSearch('')
    })

    expect(result.current.search).toEqual([])
  })

  test('should store airports', () => {
    const { result } = renderHook(() => useAirportStore())

    const mockAirports = [
      {
        id: '1',
        gmt: '-3',
        airport_id: 'AR001',
        iata_code: 'EZE',
        city_iata_code: 'BUE',
        icao_code: 'SAEZ',
        country_iso2: 'AR',
        geoname_id: '123456',
        latitude: '-34.8222',
        longitude: '-58.5358',
        airport_name: 'Ezeiza International Airport',
        country_name: 'Argentina',
        phone_number: '+54 11 1234 5678',
        timezone: 'America/Argentina/Buenos_Aires',
      },
    ]

    act(() => {
      result.current.setAirports(mockAirports)
    })

    expect(result.current.airports).toEqual(mockAirports)
  })

  test('should persist data in localStorage', () => {
    const { result } = renderHook(() => useAirportStore())

    act(() => {
      result.current.setSearch('BOG')
      result.current.setAirports([
        {
          id: '2',
          gmt: '-5',
          airport_id: 'CO001',
          iata_code: 'BOG',
          city_iata_code: 'BOG',
          icao_code: 'SKBO',
          country_iso2: 'CO',
          geoname_id: '654321',
          latitude: '4.7016',
          longitude: '-74.1469',
          airport_name: 'El Dorado Intl',
          country_name: 'Colombia',
          phone_number: '+57 1 2662000',
          timezone: 'America/Bogota',
        },
      ])
    })

    const stored = JSON.parse(localStorage.getItem('airport-storage')!)
    expect(stored.state.search).toContain('BOG')
    expect(stored.state.airports[0].iata_code).toBe('BOG')
  })
})
