import { useRef, useState } from 'react'

/**
 * Interface for the return value of the `useInfoWindow` hook.
 */
export interface UseInfoWindowResult {
  /**
   * Indicates whether the InfoWindow is currently open.
   */
  open: boolean

  /**
   * Handles the mouse over event on a marker.
   * If the user hovers for 450ms, the InfoWindow opens.
   */
  handleMouseOver: () => void

  /**
   * Handles the mouse out event on a marker.
   * Cancels the hover-triggered opening if not completed.
   */
  handleMouseOut: () => void

  /**
   * Opens the InfoWindow immediately (e.g., on marker click).
   */
  handleClickMarker: () => void

  /**
   * Closes the InfoWindow.
   */
  handleClose: () => void
}

/**
 * Custom hook to manage the visibility of a map InfoWindow.
 * It handles opening the InfoWindow via click or by hovering over a marker for 450ms.
 *
 * @returns {UseInfoWindowResult} Hook state and event handlers.
 *
 * @example
 * const {
 *   open,
 *   handleMouseOver,
 *   handleMouseOut,
 *   handleClickMarker,
 *   handleClose
 * } = useInfoWindow()
 */
export const useInfoWindow = (): UseInfoWindowResult => {
  const isHoveringRef = useRef(false)
  const [open, setOpen] = useState(false)

  const handleMouseOver = () => {
    isHoveringRef.current = true
    setTimeout(() => {
      if (isHoveringRef.current) {
        setOpen(true)
      }
    }, 450)
  }

  const handleMouseOut = () => {
    isHoveringRef.current = false
  }

  const handleClickMarker = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return {
    open,
    handleMouseOver,
    handleMouseOut,
    handleClickMarker,
    handleClose,
  }
}
