import { generateListNumbers } from '@lib/utils/generateListNumbers'

/**
 * @file Tests for the generateListNumbers utility function.
 * @description Verifies that the generateListNumbers function correctly generates a list of numbers based on provided options.
 */

describe('generateListNumbers', () => {
  test('should generate a sequence starting from 0 by default', () => {
    const result = generateListNumbers({ length: 5 })
    expect(result).toEqual([0, 1, 2, 3, 4])
  })

  test('should start from a custom minValue', () => {
    const result = generateListNumbers({ length: 4, minValue: 10 })
    expect(result).toEqual([10, 11, 12, 13])
  })

  test('should increment by a custom value', () => {
    const result = generateListNumbers({ length: 3, minValue: 5, increment: 2 })
    expect(result).toEqual([5, 7, 9])
  })

  test('should return an empty array if length is 0', () => {
    const result = generateListNumbers({ length: 0 })
    expect(result).toEqual([])
  })

  test('should handle negative increments', () => {
    const result = generateListNumbers({ length: 3, minValue: 0, increment: -1 })
    expect(result).toEqual([0, -1, -2])
  })
})
