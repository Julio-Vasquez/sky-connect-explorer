'use client'
import type { FC } from 'react'
import { useEffect } from 'react'

import AppHeader from '@components/organisms/AppHeader'
import { Data } from '@services/fetchAirports'
import { useAirportStore } from '@store/useAirportStore'

/**
 * @file Home template component.
 * @description Template component for the main page of the application. It initializes the airport store with provided data and renders the application header.
 *
 * @component
 *
 * @param {Object} props - Component props.
 * @param {Data[]} [props.data] - Optional array of airport data to populate the global store.
 *
 * @returns {JSX.Element} The rendered Home component.
 *
 * @example
 * <Home data={airportData} />
 */

/**
 * Props for the Home component.
 */
interface HomeProps {
  /** Optional array of airport data to populate the global store. */
  data?: Data[]
}

const Home: FC<HomeProps> = ({ data }) => {
  const { setAirports } = useAirportStore()

  useEffect(() => {
    if (data) setAirports(data)
  }, [data, setAirports])

  return (
    <div>
      <AppHeader />
    </div>
  )
}

export default Home
