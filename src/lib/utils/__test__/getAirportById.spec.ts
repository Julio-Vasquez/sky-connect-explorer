import { getAirportById } from '@lib/utils/getAirportById'
import type { Data } from '@services/fetchAirports'

describe('getAirportById', () => {
  const mockData: Data[] = [
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
    {
      id: '2',
      gmt: '-10',
      airport_id: 'PF001',
      iata_code: 'PPT',
      city_iata_code: 'PPT',
      icao_code: 'NTAA',
      country_iso2: 'PF',
      geoname_id: '654321',
      latitude: '-17.5537',
      longitude: '-149.6063',
      airport_name: "Fa'a'ā International Airport",
      country_name: 'French Polynesia',
      phone_number: '689404040',
      timezone: 'Pacific/Tahiti',
    },
  ]

  test('should return airport by matching ID', () => {
    const result = getAirportById('2', mockData)
    expect(result).toBeDefined()
    expect(result?.airport_name).toBe("Fa'a'ā International Airport")
  })

  test('should return undefined if no match found', () => {
    const result = getAirportById('999', mockData)
    expect(result).toBeUndefined()
  })
})
