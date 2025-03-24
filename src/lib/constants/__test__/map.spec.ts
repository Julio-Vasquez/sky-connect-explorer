/**
 * @file Tests for the GOOGLE_MAP_API_KEY configuration.
 * @description Verifies that the GOOGLE_MAP_API_KEY constant correctly retrieves the API key from the environment variable or returns an empty string if undefined.
 */

describe('GOOGLE_MAP_API_KEY configuration', () => {
  const originalEnv = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...originalEnv }
  })

  afterAll(() => {
    process.env = originalEnv
  })

  test('should return the API key from environment variable if defined', async () => {
    process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY = 'mocked_key'

    const { GOOGLE_MAP_API_KEY } = await import('@lib/constants/map')
    expect(GOOGLE_MAP_API_KEY).toBe('mocked_key')
  })

  test('should return an empty string if environment variable is undefined', async () => {
    delete process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY

    const { GOOGLE_MAP_API_KEY } = await import('@lib/constants/map')
    expect(GOOGLE_MAP_API_KEY).toBe('')
  })
})
