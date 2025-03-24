import Link from 'next/link'
import type { FC } from 'react'

import BaseCard from '@components/molecules/cards/Base'
import AirportIcon from '@components/atoms/icons/Airport'
/**
 * @file Airport component.
 * @description
 * Renders a card with the airport name, location, and IATA code.
 * Includes a link to a detailed airport page and an airplane icon.
 *
 * @component
 *
 * @example
 * import Airport from '@components/molecules/cards/Airport'
 *
 * <Airport
 *   id="123"
 *   name="Aeropuerto Internacional El Dorado"
 *   location="Bogotá, Colombia"
 *   iataCode="BOG"
 * />
 */

/**
 * Props for the AirportCard component.
 */
interface AirportCardProps {
  /** Name of the airport (e.g., "Faa'a International Airport"). */
  name: string
  /** Geographical location of the airport (e.g., "Tahiti, French Polynesia"). */
  location: string
  /** IATA airport code (e.g., "PPT"). */
  iataCode: string
  /** Unique identifier for the airport, used for routing. */
  id: string
}

const Airport: FC<AirportCardProps> = ({ name, location, iataCode, id }) => (
  <BaseCard isArticle>
    <Link
      href={`/airports/${id}?name=${encodeURIComponent(name)}`}
      className="relative text-white flex justify-between"
    >
      <div>
        <h1 id="airport-name" className="text-white font-bold text-base">
          {name}
        </h1>
        <p className="text-sm text-gray-300">{location}</p>
        <p className="text-3xl font-black bg-gradient-to-r from-sky-400 to-cyan-400 text-transparent bg-clip-text mt-2">
          {iataCode}
        </p>
      </div>

      <div className="w-10 h-10">
        <AirportIcon />
      </div>
    </Link>
  </BaseCard>
)

export default Airport
