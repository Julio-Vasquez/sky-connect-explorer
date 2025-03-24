import type { FC } from 'react'

/**
 * @file Search icon component
 * @description
 * Renders a magnifying glass SVG icon typically used to represent a search function in the UI.
 * The icon is sized to 32x32 pixels and rendered in white with partial opacity.
 *
 * @component
 *
 * @returns {JSX.Element} Search icon as an SVG element.
 *
 * @example
 * import Search from '@components/atoms/icons/Search'
 *
 * <Search />
 */

export const Search: FC = () => (
  <svg
    role="img"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity={0.5}
      d="M26.607 15.2032C26.607 21.7774 21.2776 27.1069 14.7034 27.1069C8.12924 27.1069 2.7998 21.7774 2.7998 15.2032C2.7998 8.62905 8.12924 3.29962 14.7034 3.29962C21.2776 3.29962 26.607 8.62905 26.607 15.2032Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.6901 25.1899C25.0571 24.8229 25.6521 24.8229 26.0191 25.1899L28.5252 27.6959C28.8921 28.0629 28.8921 28.658 28.5252 29.025C28.1582 29.392 27.5631 29.392 27.1961 29.025L24.6901 26.5189C24.3231 26.1519 24.3231 25.5569 24.6901 25.1899Z"
      fill="white"
    />
  </svg>
)

export default Search
