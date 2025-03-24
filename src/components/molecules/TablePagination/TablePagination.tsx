import Link from 'next/link'
import type { FC } from 'react'

import { generatePagination } from '@lib/utils/generatePagination'
/**
 * @file TablePagination component.
 * @description Renders pagination controls based on the current page,
 * total items, and limit per page. Allows navigation between pages using query parameters.
 *
 * @component
 * @example
 * ```tsx
 * <TablePagination currentPage={2} totalItems={100} limit={10} />
 * ```
 */

/**
 * Props for the TablePagination component.
 */
interface PaginationProps {
  /** Current active page number (1-based index). */
  currentPage: number
  /** Total number of items available for pagination. */
  totalItems: number
  /** Number of items displayed per page. */
  limit: number
}

const TablePagination: FC<PaginationProps> = ({
  currentPage,
  totalItems,
  limit,
}) => {
  const current = Number(currentPage)
  const { isFirst, isLast, visiblePages } = generatePagination({
    currentPage: current,
    limit,
    totalItems,
  })

  return (
    <div className="flex justify-center items-center gap-2 py-6">
      <Link
        href={`?page=${current - 1}`}
        className={`px-4 py-2 rounded-lg font-semibold transition ${
          isFirst
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
        aria-disabled={isFirst}
      >
        Anterior
      </Link>

      {visiblePages.map(page => (
        <Link
          key={page}
          href={`?page=${page}`}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            current === page
              ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {page}
        </Link>
      ))}

      <Link
        href={`?page=${current + 1}`}
        className={`px-4 py-2 rounded-lg font-semibold transition ${
          isLast
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
        aria-disabled={isLast}
      >
        Siguiente
      </Link>
    </div>
  )
}

export default TablePagination
