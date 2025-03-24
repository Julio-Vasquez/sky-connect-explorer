import { FunctionComponent } from 'react'

/**
 * @file Title component
 * @description
 * Renders a large, visually striking heading with a horizontal gradient from blue to cyan.
 * Used as the main title in the SkyConnect Explorer interface. Supports custom titles via props.
 *
 * @component
 *
 * @param {TitleProps} props - Component props.
 * @param {string} [props.title='SkyConnect Explorer'] - Optional title text to display. Defaults to "SkyConnect Explorer".
 *
 * @returns {JSX.Element} Gradient-styled heading element.
 *
 * @example
 * // Basic usage
 * import Title from '@components/atoms/AppTitle'
 *
 * <Title />
 *
 * @example
 * // Custom title
 * <Title title="My Dashboard" />
 */

/**
 * Props for the `Title` component.
 */
interface TitleProps {
  /**
   * Optional custom title text to display.
   * Defaults to `"SkyConnect Explorer"` if not provided.
   */
  title?: string
}

const Title: FunctionComponent<TitleProps> = ({ title = 'SkyConnect Explorer' }) => (
  <h1
    className="font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent inline-block sm:flex-wrap lg:whitespace-nowrap text-6xl  sm:pb-10 pr-3"
    data-testid="title"
  >
    {title}
  </h1>
)

export default Title
