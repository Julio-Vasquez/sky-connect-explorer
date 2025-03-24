/**
 * @file Tests for the API Configuration.
 * @description Verifies that the API_KEY and BASE_URL constants correctly retrieve their values from environment variables or use empty strings if undefined.
 */

describe('API Configuration', () => {
  const originalEnv = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...originalEnv }
  })

  afterAll(() => {
    process.env = originalEnv
  })

  test('should use the environment variable AVIATIONSTACK_API_KEY if defined', async () => {
    process.env.NEXT_PUBLIC_AVIATIONSTACK_API_KEY = 'test_api_key'
    const { API_KEY } = await import('@lib/constants/api')
    expect(API_KEY).toBe('test_api_key')
  })

  test('should use an empty string if AVIATIONSTACK_API_KEY is not defined', async () => {
    delete process.env.NEXT_PUBLIC_AVIATIONSTACK_API_KEY
    const { API_KEY } = await import('@lib/constants/api')
    expect(API_KEY).toBe('')
  })

  test('should use the environment variable AVIATIONSTACK_BASE_URL if defined', async () => {
    process.env.NEXT_PUBLIC_AVIATIONSTACK_BASE_URL = 'https://api.example.com'
    const { BASE_URL } = await import('@lib/constants/api')
    expect(BASE_URL).toBe('https://api.example.com')
  })

  test('should use an empty string if AVIATIONSTACK_BASE_URL is not defined', async () => {
    delete process.env.NEXT_PUBLIC_AVIATIONSTACK_BASE_URL
    const { BASE_URL } = await import('@lib/constants/api')
    expect(BASE_URL).toBe('')
  })
})
