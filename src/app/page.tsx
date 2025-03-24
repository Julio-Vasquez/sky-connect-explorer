import Link from 'next/link'

import HomeTemplate from '@components/templates/Home'
import { fetchAirports } from '@services/fetchAirports'

/**
 * Home page component.
 *
 * Fetches a list of airports and renders the `HomeTemplate` component to display the list.
 * It also includes a link to view the full list of airports.
 *
 * @returns {JSX.Element} The rendered Home page.
 */

export default async function Home() {
  const { data } = await fetchAirports(1, 100)

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <HomeTemplate data={data} />
      <Link href="/airports">Listado completo</Link>
    </div>
  )
}
