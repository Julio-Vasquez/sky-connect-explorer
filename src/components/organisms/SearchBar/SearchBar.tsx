'use client'
import { useRef } from 'react'
import type { FC } from 'react'
import { useRouter } from 'next/navigation'

import { Search } from '@components/atoms/icons'

import { notify } from '@lib/utils/notify'
import { useAirportStore } from '@store/useAirportStore'

/**
 * @file SearchBar component.
 * @description Renders a responsive search bar that allows users to search for airports
 * by IATA code, ICAO code, or airport name. When a match is found, the user is redirected
 * to the corresponding airport's page. Supports vertical and horizontal layouts.
 *
 * @component
 * @example
 * ```tsx
 * <SearchBar layout="horizontal" />
 * ```
 */

/**
 * Props for the SearchBar component.
 */
export interface SearchBarProps {
  /**
   * Layout direction of the search bar.
   * - 'vertical': stacked layout with input above button (default)
   * - 'horizontal': inline layout with input and button side by side
   */
  layout?: 'vertical' | 'horizontal'
}

const SearchBar: FC<SearchBarProps> = ({ layout = 'vertical' }) => {
  const router = useRouter()
  const { airports, setSearch } = useAirportStore()
  const inputRef = useRef<HTMLInputElement>(null)

  const isVertical = layout === 'vertical'

  const handleSearch = () => {
    const value = inputRef.current?.value ?? ''
    if (!value) return

    setSearch(value)

    const result = airports.find(
      e =>
        e.iata_code.toLowerCase().includes(value.toLowerCase()) ||
        e.icao_code.toLowerCase().includes(value.toLowerCase()) ||
        e.airport_name.toLowerCase().includes(value.toLowerCase()),
    )

    if (result?.id) return router.push(`/airports/${result?.id}`)
    else
      return notify.error('No se encontró ningún Aeropuerto con ese nombre', {
        theme: 'dark',
      })
  }

  return (
    <div
      className={`flex-wrap justify-center
        ${
          isVertical
            ? 'flex flex-col items-center gap-4 w-full max-w-md sm:max-w-lg'
            : 'flex flex-row  items-center gap-4 w-full'
        }`}
    >
      <input
        type="text"
        ref={inputRef}
        placeholder="Buscar aeropuertos..."
        className={`${
          isVertical ? 'w-full' : 'flex-1'
        } h-[50px] px-5 rounded-full bg-white text-blue-500 placeholder:text-blue-500 outline-none focus:ring-2 focus:ring-blue-300`}
      />
      <button
        onClick={handleSearch}
        className="flex items-center justify-center gap-2 h-[50px] px-6 bg-gradient-to-r from-blue-500 to-cyan-400 hover:brightness-110 active:scale-95 text-white rounded-lg transition duration-150 ease-in-out cursor-pointer"
      >
        <Search /> Buscar
      </button>
    </div>
  )
}

export default SearchBar
