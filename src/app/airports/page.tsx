import { fetchAirports } from '@services/fetchAirports'

import NoData from '@components/atoms/NoData'
import Airport from '@components/molecules/cards/Airport'
import AppHeader from '@components/organisms/AppHeader/AppHeader'
import TablePagination from '@components/molecules/TablePagination'

/**
 * Airports page component.
 *
 * Fetches a list of airports based on the current page number and search parameters.
 * If no data is found, it renders a "No Data" message. It also handles pagination
 * through the `TablePagination` component and displays the list of airports using
 * the `Airport` card component.
 *
 * @param {Object} searchParams - Parameters for the search and page query.
 * @param {number} searchParams.page - The current page number (defaults to 1).
 * @param {string} searchParams.search - The search query to filter airports.
 *
 * @returns {JSX.Element} The rendered Airports page.
 */

type AirportProps = {
  searchParams: {
    page?: number
    search?: string
  }
}

const Airports = async ({ searchParams }: AirportProps) => {
  const { page = 1 } = await searchParams

  if (page <= 0)
    return <NoData message="Fuera de los limites permitidos por la api" />

  const { data, pagination } = await fetchAirports(page)

  if (data?.length <= 0) return <NoData message="No hay Datos" />

  return (
    <>
      <AppHeader layout="horizontal" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
        {data?.map(airport => (
          <Airport
            key={airport.airport_id}
            name={airport.airport_name}
            location={airport.country_name!}
            iataCode={airport.iata_code}
            id={airport.id}
          />
        ))}
      </div>
      <TablePagination
        totalItems={pagination?.total}
        currentPage={page}
        limit={10}
      />
    </>
  )
}

export default Airports
