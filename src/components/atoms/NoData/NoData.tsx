import type { FC } from 'react'

import { NoData as NoDataIcon } from '@components/atoms/icons'

/**
 * @file NoData component
 * @description
 * Displays a centered "No Data" message with an accompanying SVG icon.
 * Useful as a placeholder when there is no content to show in a section or component.
 *
 * @component
 *
 * @param {Object} props - Component props.
 * @param {string} props.message - The message to display below the icon.
 *
 * @returns {JSX.Element} A styled UI element indicating that there is no data available.
 *
 * @example
 * import NoData from '@components/NoData'
 *
 * <NoData message="No results found" />
 */

/**
 * Props for the NoData component.
 */
interface NoDataProps {
  /** The message to display below the icon. */
  message: string
}

const NoData: FC<NoDataProps> = ({ message }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center gap-4 py-12">
      <NoDataIcon className="w-50 h-50" />
      <p className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        {message}
      </p>
    </div>
  )
}

export default NoData
