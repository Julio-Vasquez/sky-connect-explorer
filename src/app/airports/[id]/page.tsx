import Tabs from '@components/templates/Tabs'

type DetailProps = {
  params: {
    id: string | number
  }
}

/**
 * Airport details page component.
 *
 * Fetches and displays the detailed information for a specific airport based on the provided `id`.
 * The airport information is rendered through the `Tabs` component.
 *
 * @param {Object} params - The parameters passed to the page component.
 * @param {string|number} params.id - The unique identifier for the airport.
 *
 * @returns {JSX.Element} The rendered airport details page.
 */

const page = async ({ params }: DetailProps) => {
  const { id } = await params

  return <Tabs id={+id} />
}

export default page
