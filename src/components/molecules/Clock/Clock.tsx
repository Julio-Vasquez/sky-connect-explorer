'use client'
import { useEffect, useState } from 'react'

/**
 * @file Clock component
 * @description
 * Renders a live digital clock that updates every second based on a specified time zone.
 * Uses the built-in `Intl.DateTimeFormat` API for formatting the time.
 *
 * @component
 * @module @components/molecules
 *
 * @param {ClockProps} props - Component props.
 * @param {string} props.timeZone - The IANA time zone identifier (e.g., "America/New_York").
 *
 * @returns {JSX.Element} A <time> element showing the current time in the specified time zone.
 *
 * @example
 * import Clock from '@components/molecules/Clock'
 *
 * <Clock timeZone="Pacific/Tahiti" />
 */

/**
 * Props for the Clock component.
 */
interface ClockProps {
  /** The IANA time zone identifier (e.g., "Pacific/Tahiti"). */
  timeZone: string
}

const Clock = ({ timeZone }: ClockProps) => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatter = new Intl.DateTimeFormat(undefined, {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
      setTime(formatter.format(now))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [timeZone])

  return <time dateTime={time}>{time}</time>
}

export default Clock
