import type { FC } from 'react'

import { Location } from '@components/atoms/icons'
import BaseCard from '@components/molecules/cards/Base'

/**
 * @file LocationInfo component.
 * @description
 * Displays geographical information including latitude, longitude, and Geoname ID
 * inside a styled card. Intended to be used for showing location data related to airports or places.
 *
 * @component
 *
 * @example
 * <LocationInfo latitude="-17.55" longitude="-149.61" geonameId="4033936" />
 */

/**
 * Props for the LocationInfo component.
 */
export interface LocationInfoProps {
  /** The latitude of the location. */
  latitude: string
  /** The longitude of the location. */
  longitude: string
  /** The Geoname ID associated with the location. */
  geonameId: string
}

const LocationInfo: FC<LocationInfoProps> = ({ geonameId, latitude, longitude }) => (
  <BaseCard>
    <header>
      <h2
        id="location-info-title"
        className="font-bold flex bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent gap-1"
      >
        <Location /> Ubicación
      </h2>
    </header>

    <div className="mt-3 space-y-2 text-sm">
      <p>
        <span className="font-semibold">Latitud:</span> {latitude}
      </p>
      <p>
        <span className="font-semibold">Longitud:</span> {longitude}
      </p>
      <p>
        <span className="font-semibold">ID Geoname:</span> {geonameId}
      </p>
    </div>
  </BaseCard>
)

export default LocationInfo
