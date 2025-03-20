import { render, screen, fireEvent } from '@testing-library/react'

import DarkModeToggle from '@components/DarkModeToggle'

describe('DarkModeToggle', () => {
  test("should display 'Sun' when dark mode is enabled", () => {
    render(<DarkModeToggle darkMode={true} setDarkMode={jest.fn()} />)
    expect(
      screen.getByRole('button', { name: /toggle dark mode/i }),
    ).toHaveTextContent('Sol')
  })

  test("should display 'Moon' when dark mode is disabled", () => {
    render(<DarkModeToggle darkMode={false} setDarkMode={jest.fn()} />)
    expect(
      screen.getByRole('button', { name: /toggle dark mode/i }),
    ).toHaveTextContent('Luna')
  })

  test('should call setDarkMode with the opposite value when clicked', () => {
    const mockSetDarkMode = jest.fn()
    render(<DarkModeToggle darkMode={false} setDarkMode={mockSetDarkMode} />)

    const button = screen.getByRole('button', { name: /toggle dark mode/i })
    fireEvent.click(button)

    expect(mockSetDarkMode).toHaveBeenCalledWith(true)
  })
})
