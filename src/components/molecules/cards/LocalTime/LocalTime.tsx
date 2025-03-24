import type { FC } from 'react'

import { Time } from '@components/atoms/icons'
import Clock from '@components/molecules/Clock'
import BaseCard from '@components/molecules/cards/Base'

/**
 * @file LocalTime component.
 * @description
 * Displays the current local time for a given timezone inside a styled card.
 * It uses the Clock component to update the time every second.
 *
 * @component
 *
 * @example
 * import LocalTime from '@components/molecules/cards/LocalTime'
 *
 * <LocalTime timezone="Pacific/Tahiti" />
 */

/**
 * Props for the LocalTime component.
 */
interface LocalTimeProps {
  /** Timezone identifier, e.g., "America/New_York" or "Pacific/Tahiti". */
  timezone: string
}

const LocalTime: FC<LocalTimeProps> = ({ timezone }) => {
  return (
    <BaseCard>
      <header className="mb-3">
        <h2
          id="local-time-title"
          className="font-bold flex bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent gap-1"
        >
          <Time /> Hora Local
        </h2>
      </header>

      <p className="text-sm">
        <span className="font-semibold">Current time:</span>{' '}
        <Clock timeZone={timezone} />
      </p>
    </BaseCard>
  )
}

export default LocalTime
