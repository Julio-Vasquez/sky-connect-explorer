'use client'
import { memo } from 'react'
import type { FC } from 'react'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

import { useInfoWindow } from '@hooks/useInfoWindow'
import { GOOGLE_MAP_API_KEY } from '@lib/constants/map'
import MapTooltip from '@components/molecules/MapTooltip'

/**
 * @file MapComponent component.
 * @description Displays a Google Map centered on the specified airport coordinates,
 * with a marker and a tooltip showing airport name and country information.
 * Handles marker interactions such as click and hover to show/hide tooltip.
 *
 * @component
 * @example
 * ```tsx
 * <MapComponent
 *   latitude={-17.55}
 *   longitude={-149.61}
 *   airportName="Aeropuerto Tahiti"
 *   country="Polinesia Francesa"
 * />
 * ```
 */

/**
 * Props for the MapComponent component.
 */
interface MapProps {
  /** Latitude of the airport location. */
  latitude: number
  /** Longitude of the airport location. */
  longitude: number
  /** Name of the airport to be displayed in the tooltip. */
  airportName: string
  /** Country where the airport is located. Optional. */
  country?: string
}

const MapComponent: FC<MapProps> = ({
  latitude,
  longitude,
  airportName,
  country,
}) => {
  const { open, handleMouseOver, handleMouseOut, handleClickMarker, handleClose } =
    useInfoWindow()

  return (
    <APIProvider apiKey={GOOGLE_MAP_API_KEY}>
      <Map
        className="w-full h-200 mt-4"
        defaultCenter={{ lat: latitude, lng: longitude }}
        defaultZoom={13}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        <Marker
          position={{ lat: latitude, lng: longitude }}
          title="Aeropuerto XYZ"
          label={'🛫'}
          onClick={handleClickMarker}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        {open && (
          <MapTooltip
            airportName={airportName}
            country={country}
            handleClose={handleClose}
            latitude={latitude}
            longitude={longitude}
          />
        )}
      </Map>
    </APIProvider>
  )
}

export default memo(MapComponent)
