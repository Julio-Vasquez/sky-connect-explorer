// generatePagination.test.ts
import { generatePagination } from '@lib/utils/generatePagination'

describe('generatePagination', () => {
  test('should return first page as active and include last page', () => {
    const result = generatePagination({ currentPage: 1, totalItems: 50, limit: 10 })

    expect(result).toEqual({
      isFirst: true,
      isLast: false,
      visiblePages: [1, 2, 3, 4, 5],
    })
  })

  test('should detect when current page is the last one', () => {
    const result = generatePagination({ currentPage: 5, totalItems: 50, limit: 10 })

    expect(result).toEqual({
      isFirst: false,
      isLast: true,
      visiblePages: [1, 2, 3, 4, 5],
    })
  })

  test('should handle fewer total pages than max visible', () => {
    const result = generatePagination({ currentPage: 1, totalItems: 30, limit: 10 })

    expect(result).toEqual({
      isFirst: true,
      isLast: false,
      visiblePages: [1, 2, 3],
    })
  })

  test('should handle single-page pagination', () => {
    const result = generatePagination({ currentPage: 1, totalItems: 5, limit: 10 })

    expect(result).toEqual({
      isFirst: true,
      isLast: true,
      visiblePages: [1],
    })
  })
})
