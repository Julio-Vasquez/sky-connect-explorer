import { generateListNumbers } from '@lib/utils/generateListNumbers'

type Props = {
  currentPage: number
  totalItems: number
  limit: number
}

/**
 * @function generatePagination
 * @description Generates pagination metadata for rendering pagination controls.
 *
 * This function calculates the total number of pages based on the total items and the limit,
 * determines whether the current page is the first or last, and returns a list of visible page numbers.
 * It ensures a maximum of 4 pages are shown initially, plus the last page if it's not already included.
 *
 * @param {Object} params - Pagination input parameters.
 * @param {number} params.currentPage - The current active page.
 * @param {number} params.totalItems - The total number of items available.
 * @param {number} params.limit - The number of items per page.
 *
 * @returns {{ isFirst: boolean, isLast: boolean, visiblePages: number[] }} Pagination state and visible pages.
 *
 * @example
 * const pagination = generatePagination({
 *   currentPage: 2,
 *   totalItems: 50,
 *   limit: 10
 * });
 *
 * // Result:
 * // {
 * //   isFirst: false,
 * //   isLast: false,
 * //   visiblePages: [1, 2, 3, 4, 5]
 * // }
 */

export const generatePagination = ({ currentPage, totalItems, limit }: Props) => {
  const totalPages = Math.ceil(totalItems / limit)

  const pages = generateListNumbers({
    length: Math.min(4, totalPages),
    minValue: 1,
  })

  const visiblePages = !pages.includes(totalPages) ? [...pages, totalPages] : pages
  const isFirst = currentPage === 1
  const isLast = currentPage === totalPages

  return {
    isFirst,
    isLast,
    visiblePages,
  }
}
