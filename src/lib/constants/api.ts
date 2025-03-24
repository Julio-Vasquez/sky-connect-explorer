/**
 * @constant API_KEY
 * @description AviationStack API key loaded from environment variables.
 * Used to authenticate requests to the AviationStack API. If not defined, defaults to an empty string.
 *
 * @type {string}
 *
 * @example
 * const res = await fetch(
 *   `${BASE_URL}?access_key=${API_KEY}&limit=10&offset=0`
 * )
 * const data = await res.json()
 */
export const API_KEY: string = process.env.NEXT_PUBLIC_AVIATIONSTACK_API_KEY ?? ''

/**
 * @constant BASE_URL
 * @description Base URL for the AviationStack API, loaded from environment variables.
 * If not defined, defaults to an empty string.
 *
 * @type {string}
 *
 * @example
 * const res = await fetch(
 *   `${BASE_URL}?access_key=${API_KEY}&limit=10&offset=0`
 * )
 * const data = await res.json()
 */
export const BASE_URL: string = process.env.NEXT_PUBLIC_AVIATIONSTACK_BASE_URL ?? ''
