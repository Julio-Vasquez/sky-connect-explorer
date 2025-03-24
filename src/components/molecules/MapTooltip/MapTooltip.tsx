import type { FC } from 'react'
import { InfoWindow } from '@vis.gl/react-google-maps'

/**
 * @file MapTooltip component.
 * @description
 * Displays a styled tooltip using Google Maps' InfoWindow. Shows airport name and optionally the country,
 * with a close button to dismiss the tooltip.
 *
 * @component
 *
 * @example
 * import MapTooltip from '@components/molecules/MapTooltip'
 *
 * <MapTooltip
 *   latitude={-33.4489}
 *   longitude={-70.6693}
 *   airportName="Santiago International Airport"
 *   country="Chile"
 *   handleClose={() => setShowTooltip(false)}
 * />
 */

/**
 * Props for the MapTooltip component.
 */
interface MapTooltipProps {
  /** Latitude of the tooltip position. */
  latitude: number
  /** Longitude of the tooltip position. */
  longitude: number
  /** Function to handle closing the tooltip. */
  handleClose: () => void
  /** Name of the airport displayed in the tooltip. */
  airportName: string
  /** Optional country name to be displayed under the airport name. */
  country?: string
}

const MapTooltip: FC<MapTooltipProps> = ({
  handleClose,
  latitude,
  longitude,
  airportName,
  country,
}) => (
  <InfoWindow position={{ lat: latitude, lng: longitude }} headerDisabled>
    <div
      style={{
        position: 'relative',
        padding: '12px',
        maxWidth: 250,
        fontFamily: 'Arial, sans-serif',
        lineHeight: 1.4,
      }}
    >
      <button
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: 6,
          right: 6,
          border: 'none',
          background: 'transparent',
          fontSize: 20,
          cursor: 'pointer',
          color: '#000',
        }}
        role="button"
        aria-label="Cerrar"
      >
        x
      </button>
      <h3
        style={{
          margin: 0,
          fontSize: 16,
          fontWeight: 'bold',
          color: '#111',
        }}
      >
        {airportName}
      </h3>
      <p style={{ margin: '4px 0 0 0', fontSize: 14, color: '#555' }}>{country}</p>
    </div>
  </InfoWindow>
)

export default MapTooltip
