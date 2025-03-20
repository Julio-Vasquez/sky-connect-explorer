import { render, screen } from '@testing-library/react'

import Button from '@components/Button'

describe('Button Component', () => {
  test('renders the button with correct text', () => {
    render(<Button />)

    const buttonElement = screen.getByRole('button', { name: /hey/i })
    expect(buttonElement).toBeInTheDocument()
  })
})
