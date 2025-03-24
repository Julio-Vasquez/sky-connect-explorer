'use client'
import Link from 'next/link'
import { useState } from 'react'

import Map from '@components/organisms/Map'
import Title from '@components/atoms/AppTitle'
import LocalTime from '@components/molecules/cards/LocalTime'
import AirportInfo from '@components/molecules/cards/AirportInfo'
import LocationInfo from '@components/molecules/cards/LocationInfo'
import TimezoneInfo from '@components/molecules/cards/TimezoneInfo'

import { useAirportStore } from '@store/useAirportStore'
import { getAirportById } from '@lib/utils/getAirportById'

/**
 * @file Tabs template component.
 * @description Renders a tabbed interface for airport details including general info, location, timezone, and statistics.
 * Dynamically displays content based on the selected tab.
 *
 * @component
 * @example
 * ```tsx
 * <Tabs id={123} />
 * ```
 */

/**
 * Props for the Tabs component.
 */
type TabProps = {
  /** Airport ID used to fetch data and render related tabs. */
  id: number
}

type TabActive = 'general' | 'location' | 'timeZone' | 'statistics'

export default function Tabs({ id }: TabProps) {
  const { airports } = useAirportStore()
  const [activeTab, setActiveTab] = useState<TabActive>('general')

  const airport = getAirportById(id.toString(), airports)

  const handleActiveTab = (tabName: string) => {
    setActiveTab(tabName as TabActive)
  }

  if (!airport) return null

  const tabs = [
    {
      name: 'General',
      value: 'general',
      component: (
        <AirportInfo
          iata={airport.iata_code}
          cityIata={airport.city_iata_code}
          icao={airport.icao_code}
          country={airport.country_name}
          phone={airport.phone_number}
        />
      ),
    },
    {
      name: 'Ubicación',
      value: 'location',
      component: (
        <>
          <LocationInfo
            geonameId={airport.geoname_id}
            latitude={airport.latitude}
            longitude={airport.longitude}
          />
          <Map
            latitude={+airport.latitude}
            longitude={+airport.longitude}
            country={airport.country_name}
            airportName={airport.airport_name}
          />
        </>
      ),
    },
    {
      name: 'Zona Horaria',
      value: 'timeZone',
      component: (
        <>
          <TimezoneInfo gmtOffset={airport.gmt} timezone={airport.timezone} />
          <LocalTime timezone={airport.timezone} />
        </>
      ),
    },
    { name: 'Estadísticas', value: 'statistics' },
  ]

  const currentTab = tabs.find(e => e.value === activeTab)?.component

  return (
    <>
      <div className="text-center">
        <Title title={airport.airport_name} />
      </div>
      <div className="flex justify-center bg-gray-800 p-2">
        <div className="flex w-full bg-gray-800 rounded-lg">
          {tabs.map(tab => (
            <Link
              key={tab.name}
              href={`/airports/${id}`}
              onClick={() => handleActiveTab(tab.value)}
              className={`flex-1 py-3 text-center font-semibold rounded-lg transition-all  hover:cursor-pointer
              ${
                activeTab === tab.value
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
      <div>{currentTab}</div>
    </>
  )
}
