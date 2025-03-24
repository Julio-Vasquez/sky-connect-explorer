import { render, screen } from '@testing-library/react'

import NoData from '@components/atoms/NoData'

/**
 * @file Tests for the NoData component.
 * @description
 * Ensures that the NoData component renders the provided message with proper styles
 * and includes the associated SVG icon.
 */

describe('NoData', () => {
  const message = 'No hay resultados disponibles'

  test('should render the message with styles', () => {
    render(<NoData message={message} />)

    const textElement = screen.getByText(message)
    expect(textElement).toBeInTheDocument()

    expect(textElement).toHaveClass(
      'text-lg',
      'font-semibold',
      'bg-gradient-to-r',
      'from-blue-500',
      'to-cyan-400',
      'bg-clip-text',
      'text-transparent',
    )
  })

  test('should render the SVG icon', () => {
    render(<NoData message={message} />)

    const svg =
      screen.getByRole('img', { hidden: true }) || screen.getByTestId('no-data-icon')
    expect(svg).toBeInTheDocument()
  })
})
