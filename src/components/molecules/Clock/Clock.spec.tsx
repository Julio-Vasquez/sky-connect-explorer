import { render, screen, act } from '@testing-library/react'
import Clock from '@components/molecules/Clock'

/**
 * @file Tests for the Clock component.
 * @description Verifies that the Clock component renders the correct initial time and updates it every second based on the provided time zone.
 */

describe('Clock', () => {
  beforeAll(() => {
    jest.useFakeTimers() // simula los timers
    jest.setSystemTime(new Date('2023-01-01T12:00:00Z')) // fecha fija
  })

  afterAll(() => {
    jest.useRealTimers()
    jest.setSystemTime(new Date())
  })

  test('should render initial time based on timezone', () => {
    render(<Clock timeZone="Pacific/Tahiti" />)

    const timeElement = screen.getByRole('time')
    expect(timeElement).toBeInTheDocument()
    expect(timeElement.textContent).toMatch(/\d{2}:\d{2}:\d{2}/)
  })

  test('should update the time every second', () => {
    render(<Clock timeZone="Pacific/Tahiti" />)

    const initialTime = screen.getByRole('time').textContent

    act(() => {
      jest.advanceTimersByTime(1000) // avanzar 1 segundo
    })

    const updatedTime = screen.getByRole('time').textContent
    expect(updatedTime).not.toEqual(initialTime)
  })
})
