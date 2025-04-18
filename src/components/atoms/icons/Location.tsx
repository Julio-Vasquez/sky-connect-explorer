import type { FC } from 'react'

/**
 * @file Location icon component
 * @description
 * Renders an SVG icon representing a map pin or location marker.
 * Commonly used to indicate geographic points, addresses, or geolocation data.
 * The icon includes both the outer location contour and a circular marker in the center.
 *
 * @component
 *
 * @returns {JSX.Element} SVG icon representing a location marker.
 *
 * @example
 * import Location from '@components/atoms/icons/Location'
 *
 * <Location />
 */

export const Location: FC = () => (
  <svg
    role="img"
    width={24}
    height={24}
    viewBox="0 0 800 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M416.667 234.715C411.247 233.806 405.679 233.333 400 233.333C344.772 233.333 300 278.104 300 333.333C300 388.561 344.772 433.333 400 433.333C455.228 433.333 500 388.561 500 333.333C500 327.654 499.527 322.086 498.617 316.666"
      stroke="white"
      strokeWidth={46.5455}
      strokeLinecap="round"
    />
    <path
      d="M166.663 507.204C145.081 452.074 133.33 393.379 133.33 338.111C133.33 188.197 252.72 66.6675 399.996 66.6675C547.272 66.6675 666.663 188.197 666.663 338.111C666.663 486.85 581.552 660.414 448.761 722.482C417.805 736.951 382.188 736.951 351.232 722.482C308.821 702.659 271.273 671.463 239.809 633.334"
      stroke="white"
      strokeWidth={46.5455}
      strokeLinecap="round"
    />
  </svg>
)

export default Location
