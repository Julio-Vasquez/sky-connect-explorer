'use client'
import type { FC } from 'react'

import Title from '@components/atoms/AppTitle'
import SearchBar from '@components/organisms/SearchBar'

/**
 * @file AppHeader component.
 * @description Renders the main application header, including the title and a search bar.
 * Supports vertical or horizontal layout configurations for flexible placement.
 *
 * @component
 * @example
 * ```tsx
 * <AppHeader layout="horizontal" />
 * ```
 */

/**
 * Props for the AppHeader component.
 */
export interface AppHeaderProps {
  /**
   * Layout direction for the header.
   * - 'vertical': title above search bar (default)
   * - 'horizontal': title and search bar side by side
   */
  layout?: 'vertical' | 'horizontal'
}

const AppHeader: FC<AppHeaderProps> = ({ layout = 'vertical' }) => {
  const isVertical = layout === 'vertical'

  return (
    <section
      className={`flex w-full px-4  ${
        isVertical
          ? 'flex-col items-center text-center  md:justify-between md:text-left'
          : 'items-center justify-between text-left sm:flex-col md:flex-row xl:flex-row'
      }`}
    >
      <Title />
      <SearchBar layout={layout} />
    </section>
  )
}

export default AppHeader
