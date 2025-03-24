import { toast } from 'react-toastify'

import { notify } from '@lib/utils/notify'

/**
 * @file Tests for the fetchAirports service.
 * @description Verifies that the fetchAirports function constructs the correct API URL
 * and returns the parsed JSON response containing airport data and pagination metadata.
 */

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
  },
}))

describe('notify helper', () => {
  const msg = 'Mensaje de prueba'
  const options = { autoClose: 2000 }

  test('should call toast.success', () => {
    notify.success(msg, options)
    expect(toast.success).toHaveBeenCalledWith(msg, options)
  })

  test('should call toast.error', () => {
    notify.error(msg, options)
    expect(toast.error).toHaveBeenCalledWith(msg, options)
  })

  test('should call toast.info', () => {
    notify.info(msg, options)
    expect(toast.info).toHaveBeenCalledWith(msg, options)
  })

  test('should call toast.warn', () => {
    notify.warn(msg, options)
    expect(toast.warn).toHaveBeenCalledWith(msg, options)
  })
})
