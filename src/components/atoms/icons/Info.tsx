import type { FC } from 'react'

/**
 * @file Info icon component
 * @description
 * Renders a circular "info" icon using SVG. Commonly used to represent contextual help, tooltips, or additional information in the UI.
 * Designed to be used as a standalone icon without requiring props.
 *
 * @component
 *
 * @returns {JSX.Element} SVG icon representing an informational symbol.
 *
 * @example
 * import Info from '@components/atoms/icons/Info'
 *
 * <Info />
 */

export const Info: FC = () => (
  <svg
    role="img"
    width={24}
    height={24}
    viewBox="0 0 800 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M399.997 566.665V366.665"
      stroke="white"
      strokeWidth={59.2727}
      strokeLinecap="round"
    />
    <ellipse
      cx={33.3333}
      cy={33.3333}
      rx={33.3333}
      ry={33.3333}
      transform="matrix(1 0 0 -1 366.663 300)"
      fill="white"
    />
    <path
      d="M233.334 111.262C282.363 82.8999 339.286 66.6675 400.001 66.6675C584.096 66.6675 733.334 215.906 733.334 400.001C733.334 584.096 584.096 733.334 400.001 733.334C215.906 733.334 66.6675 584.096 66.6675 400.001C66.6675 339.286 82.8999 282.363 111.262 233.334"
      stroke="white"
      strokeWidth={59.2727}
      strokeLinecap="round"
    />
  </svg>
)

export default Info
