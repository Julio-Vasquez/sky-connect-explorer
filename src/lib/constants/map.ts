/**
 * @constant GOOGLE_MAP_API_KEY
 * @type {string}
 * @description
 * Google Maps API key loaded from environment variables.
 * Used to authenticate requests to the Google Maps API.
 * If not defined, defaults to an empty string.
 *
 * @example
 * const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
 * await loadScript(mapUrl)
 */
export const GOOGLE_MAP_API_KEY: string =
  process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? ''
