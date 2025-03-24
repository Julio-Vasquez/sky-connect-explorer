import type { FC } from 'react'

import { Zone } from '@components/atoms/icons'
import BaseCard from '@components/molecules/cards/Base'

/**
 * @file TimezoneInfo component.
 * @description
 * Displays timezone information inside a styled card, including the timezone name and GMT offset.
 * Uses the Zone icon and `BaseCard` layout for consistent UI presentation.
 *
 * @component
 *
 * @example
 * <TimezoneInfo timezone="Pacific/Tahiti" gmtOffset="-10:00" />
 */

/**
 * Props for the TimezoneInfo component.
 */
export interface TimezoneInfoProps {
  /** The full timezone name (e.g., "Pacific/Tahiti"). */
  timezone: string

  /** The GMT offset associated with the timezone (e.g., "-10:00"). */
  gmtOffset: string
}

const TimezoneInfo: FC<TimezoneInfoProps> = ({ gmtOffset, timezone }) => (
  <BaseCard>
    <header className="mb-3">
      <h2
        id="timezone-info-title"
        className="font-bold flex bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent gap-1"
      >
        <Zone /> Zona Horaria
      </h2>
    </header>

    <div className="mt-3 space-y-2 text-sm">
      <p>
        <span className="font-semibold">Zona Horaria:</span> {timezone}
      </p>
      <p>
        <span className="font-semibold">GMT:</span> {gmtOffset}
      </p>
    </div>
  </BaseCard>
)

export default TimezoneInfo
