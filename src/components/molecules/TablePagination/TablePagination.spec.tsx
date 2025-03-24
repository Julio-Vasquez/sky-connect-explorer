import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TablePagination from '@components/molecules/TablePagination'

/**
 * @file Tests for the TablePagination component.
 * @description Verifies that pagination controls render correctly, including page numbers, navigation links, and appropriate styles based on the current page.
 */

jest.mock('next/link', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MockLink = ({ href, children, ...rest }: any) => (
    <a href={href} {...rest}>
      {children}
    </a>
  )
  MockLink.displayName = 'MockLink'
  return MockLink
})

jest.mock('@lib/utils/generatePagination', () => ({
  generatePagination: jest.fn(({ currentPage, totalItems, limit }) => {
    const totalPages = Math.ceil(totalItems / limit)
    const isFirst = currentPage === 1
    const isLast = currentPage === totalPages
    const visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1)
    return { isFirst, isLast, visiblePages }
  }),
}))

describe('TablePagination', () => {
  const defaultProps = {
    currentPage: 2,
    totalItems: 30,
    limit: 10,
  }

  test('should render pagination controls correctly', () => {
    render(<TablePagination {...defaultProps} />)

    expect(screen.getByText('Anterior')).toBeInTheDocument()
    expect(screen.getByText('Siguiente')).toBeInTheDocument()

    // Debería haber 3 páginas: 1, 2, 3
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  test('should disable "Anterior" on first page', () => {
    render(<TablePagination currentPage={1} totalItems={30} limit={10} />)

    const anterior = screen.getByText('Anterior')
    expect(anterior).toHaveAttribute('aria-disabled', 'true')
    expect(anterior).toHaveClass('cursor-not-allowed')
  })

  test('should disable "Siguiente" on last page', () => {
    render(<TablePagination currentPage={3} totalItems={30} limit={10} />)

    const siguiente = screen.getByText('Siguiente')
    expect(siguiente).toHaveAttribute('aria-disabled', 'true')
    expect(siguiente).toHaveClass('cursor-not-allowed')
  })

  test('should highlight current page with gradient style', () => {
    render(<TablePagination {...defaultProps} />)

    const currentPageBtn = screen.getByText('2')
    expect(currentPageBtn).toHaveClass('bg-gradient-to-r')
  })

  test('should render correct hrefs', () => {
    render(<TablePagination {...defaultProps} />)

    expect(screen.getByText('Anterior')).toHaveAttribute('href', '?page=1')
    expect(screen.getByText('1')).toHaveAttribute('href', '?page=1')
    expect(screen.getByText('2')).toHaveAttribute('href', '?page=2')
    expect(screen.getByText('3')).toHaveAttribute('href', '?page=3')
    expect(screen.getByText('Siguiente')).toHaveAttribute('href', '?page=3')
  })
})
