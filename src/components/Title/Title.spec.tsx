import { render, screen } from '@testing-library/react'
import Title from '@components/Title'

describe('Title', () => {
  test('should render the title correctly', () => {
    render(<Title />)

    expect(screen.getByTestId('title')).toHaveTextContent('SkyConnect Explorer')
  })
})
