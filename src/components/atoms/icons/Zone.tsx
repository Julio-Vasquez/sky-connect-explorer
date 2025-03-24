import type { FC } from 'react'

/**
 * @file Zone icon component
 * @description
 * Renders an SVG icon representing a zone or circular area with concentric shapes.
 * Often used to convey coverage areas, regions, or focused scopes within maps or dashboards.
 * This icon is decorative and typically used to visually reinforce context or interaction zones.
 *
 * @component
 *
 * @returns {JSX.Element} SVG icon representing a zone or focus area.
 *
 * @example
 * import Zone from '@components/atoms/icons/Zone'
 *
 * <Zone />
 */

export const Zone: FC = () => (
  <svg
    role="img"
    width={24}
    height={25}
    viewBox="0 0 800 801"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M233.334 111.398C282.363 83.0012 339.286 66.7485 400 66.7485C584.095 66.7485 733.334 216.173 733.334 400.499C733.334 584.824 584.095 734.249 400 734.249C215.905 734.249 66.667 584.824 66.667 400.499C66.667 339.708 82.8994 282.714 111.261 233.624"
      stroke="white"
      strokeWidth={57.125}
      strokeLinecap="round"
    />
    <path
      d="M494.284 636.498C481.903 667.489 467.204 692.073 451.028 708.846C434.851 725.618 417.513 734.251 400.003 734.251C382.494 734.251 365.156 725.618 348.979 708.846C332.802 692.073 318.104 667.489 305.722 636.498C293.341 605.506 283.52 568.714 276.819 528.222C270.119 487.729 266.67 444.33 266.67 400.501C266.67 356.672 270.119 313.273 276.819 272.78C283.52 232.288 293.341 195.496 305.722 164.504C318.103 133.513 332.802 108.929 348.979 92.1563C365.156 75.3838 382.494 66.7511 400.003 66.7511C417.513 66.7511 434.851 75.3837 451.028 92.1562C467.204 108.929 481.903 133.513 494.284 164.504C506.665 195.496 516.487 232.288 523.187 272.78C529.888 313.273 533.337 356.672 533.337 400.501C533.337 444.33 529.888 487.729 523.187 528.222"
      stroke="white"
      strokeWidth={57.125}
      strokeLinecap="round"
    />
    <path
      d="M66.667 400.5H333.334M733.334 400.5H466.667"
      stroke="white"
      strokeWidth={57.125}
      strokeLinecap="round"
    />
  </svg>
)

export default Zone
