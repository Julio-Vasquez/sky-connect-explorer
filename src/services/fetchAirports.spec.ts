import { fetchAirports } from '@services/fetchAirports'

/**
 * @file Tests for the fetchAirports service.
 * @description Verifies that the fetchAirports function constructs the correct API URL
 * and returns the parsed JSON response containing airport data and pagination metadata.
 */

describe('fetchAirports', () => {
  const mockResponse = {
    pagination: {
      offset: 0,
      limit: 10,
      count: 10,
      total: 100,
    },
    data: [
      {
        id: '1',
        gmt: '+0',
        airport_id: 'XYZ123',
        iata_code: 'ABC',
        city_iata_code: 'ABC',
        icao_code: 'ABC123',
        country_iso2: 'AR',
        geoname_id: '123456',
        latitude: '12.3456',
        longitude: '-12.3456',
        airport_name: 'Aeropuerto Internacional',
        country_name: 'Argentina',
        phone_number: '123456789',
        timezone: 'America/Argentina/Buenos_Aires',
      },
    ],
  }

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should fetch airport data with correct URL and return parsed JSON', async () => {
    const page = 1
    const limit = 10
    const expectedOffset = (page - 1) * limit

    const result = await fetchAirports(page, limit)

    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining(`access_key=`))
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(`limit=${limit}`),
    )
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(`offset=${expectedOffset}`),
    )

    expect(result).toEqual(mockResponse)
  })
})
