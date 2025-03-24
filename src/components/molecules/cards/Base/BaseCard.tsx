import { createElement } from 'react'
import type { FC, ReactNode } from 'react'

import avatar from '@assets/card-avatar.jpg'

/**
 * @description A reusable base card component with a background image overlay and gradient.
 * It can render as either a `<section>` or an `<article>` tag depending on the `isArticle` prop.
 *
 * @param {BaseCardProps} props - Props object containing children and isArticle.
 * @returns {JSX.Element} The rendered card element.
 *
 * @example
 * <BaseCard>
 *   <h2>Card Title</h2>
 *   <p>This is some card content.</p>
 * </BaseCard>
 *
 * @example
 * <BaseCard isArticle>
 *   <h1>Blog Article</h1>
 *   <p>This card uses the <article> tag.</p>
 * </BaseCard>
 */

/**
 * Props for the BaseCard component.
 */
interface BaseCardProps {
  /**
   * @description The content to be rendered inside the card.
   */
  children: ReactNode

  /**
   * @description Whether to render the card using an <article> tag instead of <section>.
   * Defaults to false.
   */
  isArticle?: boolean
}

const BaseCard: FC<BaseCardProps> = ({ children, isArticle = false }) => {
  const tagHtml = isArticle ? 'article' : 'section'
  const className =
    'relative w-full min-h-[180px] rounded-lg overflow-hidden shadow-md border border-white/10 bg-gradient-to-r from-slate-800 to-slate-900 flex mb-4'

  const content = (
    <>
      <div
        className="absolute top-0 right-0 h-full w-1/2 bg-no-repeat bg-cover z-1"
        style={{
          backgroundImage: `url(${avatar.src})`,
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#232a44]/80 z-0" />
      </div>

      {/* Contenido por encima */}
      <div className="relative flex-1 p-8 z-10">{children}</div>
    </>
  )

  return createElement(tagHtml, { className }, content)
}

export default BaseCard
