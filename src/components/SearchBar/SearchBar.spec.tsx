import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '@components/SearchBar'

describe('SearchBar', () => {
  test('should render the search field and the button', () => {
    render(<SearchBar />)

    expect(screen.getByPlaceholderText(/Buscar aeropuertos.../i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /buscar/i })).toBeInTheDocument()
  })

  test('should allow text input', () => {
    render(<SearchBar />)

    const input = screen.getByPlaceholderText(/Buscar aeropuertos.../i)
    fireEvent.change(input, { target: { value: 'Madrid' } })

    expect(input).toHaveValue('Madrid')
  })
})
