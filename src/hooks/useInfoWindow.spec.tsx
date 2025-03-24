import { renderHook, act } from '@testing-library/react'
import { useInfoWindow } from '@hooks/useInfoWindow'

/**
 * @description Test suite for the custom hook `useInfoWindow`.
 * This hook handles the open/close state of an InfoWindow, triggered by hover and click events.
 */
describe('useInfoWindow', () => {
  /**
   * @description Activates Jest fake timers before each test to control timing behavior (setTimeout).
   */
  beforeEach(() => jest.useFakeTimers())

  /**
   * @description Restores real timers after each test to avoid side effects on other tests.
   */
  afterEach(() => jest.useRealTimers())

  /**
   * @description Should set `open` to true after hovering for 450ms.
   * Simulates a hover event and advances the timer to trigger the delayed state change.
   */
  test('should open after hovering for 450ms', () => {
    const { result } = renderHook(() => useInfoWindow())

    act(() => {
      result.current.handleMouseOver()
      jest.advanceTimersByTime(450)
    })

    expect(result.current.open).toBe(true)
  })

  /**
   * @description Should NOT open if the mouse leaves before the 450ms delay is completed.
   * Simulates hover followed quickly by mouse out, then advances timer to verify that `open` remains false.
   */
  test('should NOT open if mouse leaves before 450ms', () => {
    const { result } = renderHook(() => useInfoWindow())

    act(() => {
      result.current.handleMouseOver()
      result.current.handleMouseOut()
      jest.advanceTimersByTime(450)
    })

    expect(result.current.open).toBe(false)
  })

  /**
   * @description Should open immediately when the marker is clicked.
   * Simulates a marker click event and asserts that `open` becomes true.
   */
  test('should open on marker click', () => {
    const { result } = renderHook(() => useInfoWindow())

    act(() => {
      result.current.handleClickMarker()
    })

    expect(result.current.open).toBe(true)
  })

  /**
   * @description Should close the InfoWindow when `handleClose` is called.
   * Simulates opening by click and then closing using `handleClose`.
   */
  test('should close on handleClose', () => {
    const { result } = renderHook(() => useInfoWindow())

    act(() => {
      result.current.handleClickMarker()
      result.current.handleClose()
    })

    expect(result.current.open).toBe(false)
  })
})
