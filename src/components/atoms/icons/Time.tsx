import type { FC } from 'react'

/**
 * @file Time icon component
 * @description
 * Renders a clock or time-related SVG icon.
 * Useful for indicating timestamps, deadlines, schedules, or time-related content.
 * This icon is decorative and designed to be used inline with text or UI elements.
 *
 * @component
 *
 * @returns {JSX.Element} SVG icon representing a clock or time.
 *
 * @example
 * import Time from '@components/atoms/icons/Time'
 *
 * <Time />
 */

export const Time: FC = () => (
  <svg
    role="img"
    width={24}
    height={24}
    viewBox="0 0 800 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M399.998 266.665V399.998L483.331 483.332"
      stroke="white"
      strokeWidth={51.0545}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M233.34 111.261C282.368 82.8989 339.292 66.6665 400.006 66.6665C584.101 66.6665 733.34 215.905 733.34 400C733.34 584.095 584.101 733.333 400.006 733.333C215.911 733.333 66.6729 584.095 66.6729 400C66.6729 339.285 82.9052 282.362 111.267 233.333"
      stroke="white"
      strokeWidth={51.0545}
      strokeLinecap="round"
    />
  </svg>
)

export default Time
