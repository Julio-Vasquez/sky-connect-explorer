import { API_KEY, BASE_URL } from '@lib/constants/api'

/**
 * @file fetchAirports service.
 * @description Provides a function to fetch a paginated list of airports from the external API.
 * Also includes TypeScript interfaces for the response structure.
 *
 * @module fetchAirports
 */

/**
 * Pagination metadata for API responses.
 */
export interface Pagination {
  /** The number of items to skip before starting to collect the result set. */
  offset: number
  /** The number of items to return. */
  limit: number
  /** The number of items returned in the current page. */
  count: number
  /** The total number of items available. */
  total: number
}

/**
 * Represents a single airport's data structure.
 */
export interface Data {
  /** Unique internal ID. */
  id: string
  /** GMT offset string. */
  gmt: string
  /** Airport ID code. */
  airport_id: string
  /** IATA airport code. */
  iata_code: string
  /** City IATA code. */
  city_iata_code: string
  /** ICAO airport code. */
  icao_code: string
  /** ISO 3166-1 alpha-2 country code. */
  country_iso2: string
  /** Geoname identifier. */
  geoname_id: string
  /** Latitude in decimal degrees. */
  latitude: string
  /** Longitude in decimal degrees. */
  longitude: string
  /** Full name of the airport. */
  airport_name: string
  /** Optional: Country name. */
  country_name?: string
  /** Optional: Contact phone number. */
  phone_number?: string | number
  /** Timezone identifier (e.g., "America/New_York"). */
  timezone: string
}

/**
 * Represents the full API response for airport data.
 */
export interface Root {
  /** Pagination metadata. */
  pagination: Pagination
  /** Array of airport records. */
  data: Data[]
}

/**
 * Fetches a paginated list of airports from the API.
 *
 * @param page - Current page number (1-based index).
 * @param limit - Number of results per page (default is 10).
 * @returns A promise that resolves to the airport data response.
 *
 * @example
 * ```ts
 * const response = await fetchAirports(1, 20)
 * console.log(response.data)
 * ```
 */

export const fetchAirports = async (
  page: number,
  limit: number = 10,
): Promise<Root> => {
  const res = await fetch(
    `${BASE_URL}?access_key=${API_KEY}&limit=${limit}&offset=${(page - 1) * limit}`,
  )
  return await res.json()
}
