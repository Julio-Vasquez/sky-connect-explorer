import { useRouter } from 'next/navigation'
import { render, screen, fireEvent } from '@testing-library/react'

import FloatingHomeButton from '@components/molecules/FloatingHomeButton'

/**
 * @file Tests for the FloatingHomeButton component.
 * @description Ensures that the floating home button renders correctly and navigates to the home route on click.
 */

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('FloatingHomeButton', () => {
  const pushMock = jest.fn()

  beforeEach(() => {
    ;(useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    })
  })

  afterEach(() => jest.clearAllMocks())

  test('should render tooltip and button', () => {
    render(<FloatingHomeButton />)

    expect(screen.getByText(/ir al inicio/i)).toBeInTheDocument()
  })

  test('should navigate to home on click', () => {
    render(<FloatingHomeButton />)

    const button = screen.getByRole('button', { name: /ir a inicio/i })
    fireEvent.click(button)

    expect(pushMock).toHaveBeenCalledWith('/')
  })
})
