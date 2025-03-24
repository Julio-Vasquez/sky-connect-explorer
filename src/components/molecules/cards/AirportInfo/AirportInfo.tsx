import type { FC } from 'react'

import { Info } from '@components/atoms/icons'
import BaseCard from '@components/molecules/cards/Base'

/**
 * @file AirportInfo component.
 * @description
 * Displays general information about an airport including IATA, ICAO codes, country, city IATA code, and contact phone number.
 *
 * @component
 *
 * @example
 * import AirportInfo from '@components/molecules/cards/AirportInfo'
 *
 * <AirportInfo
 *   iata="LAX"
 *   icao="KLAX"
 *   country="United States"
 *   cityIata="LAX"
 *   phone="+1 310-646-5252"
 * />
 */

/**
 * Props for the AirportInfo component.
 */
export interface AirportInfoProps {
  /** Airport IATA code. */
  iata: string
  /** Airport ICAO code. */
  icao: string
  /** Country where the airport is located. Optional. */
  country?: string
  /** City IATA code associated with the airport. */
  cityIata: string
  /** Contact phone number for the airport. Optional. */
  phone?: string | number
}

const AirportInfo: FC<AirportInfoProps> = ({
  cityIata,
  country,
  iata,
  icao,
  phone,
}) => (
  <BaseCard isArticle>
    <header>
      <h1
        id="airport-info-title"
        className="font-bold flex bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent gap-1"
      >
        <Info /> Información General
      </h1>
    </header>

    <div className="mt-3 space-y-2 text-sm">
      <p>
        <span className="font-semibold">Código IATA:</span> {iata}
      </p>
      <p>
        <span className="font-semibold">Código ICAO:</span> {icao}
      </p>
      <p>
        <span className="font-semibold">País:</span> {country}
      </p>
      <p>
        <span className="font-semibold">Ciudad IATA:</span> {cityIata}
      </p>
      <div>
        <p>
          <span className="font-semibold not-italic">Teléfono:</span>
        </p>
        {!phone ? <address className="italic">No disponible</address> : phone}
      </div>
    </div>
  </BaseCard>
)

export default AirportInfo
