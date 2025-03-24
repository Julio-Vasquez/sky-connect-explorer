'use client'

import type { FC } from 'react'
import { useRouter } from 'next/navigation'

/**
 * @file FloatingHomeButton component.
 * @description
 * A fixed-position floating button that navigates the user to the home page (`'/'`) when clicked.
 * Includes a tooltip that appears on hover with the text "Ir al inicio".
 * Useful for quickly returning to the home screen from anywhere in the app.
 *
 * @component
 *
 * @returns {JSX.Element} A styled floating action button with tooltip functionality.
 *
 * @example
 * import FloatingHomeButton from '@components/molecules/FloatingHomeButton'
 *
 * <FloatingHomeButton />
 */

const FloatingHomeButton: FC = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 group ">
      <div className="absolute  right-14 bottom-1/2 translate-y-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Ir al inicio
      </div>

      <button
        role="button"
        onClick={handleClick}
        className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg hover:scale-105 transition-all duration-200 ease-in-out "
        aria-label="Ir a inicio"
      >
        🏠
      </button>
    </div>
  )
}

export default FloatingHomeButton
