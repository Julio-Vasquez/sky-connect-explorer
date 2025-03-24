import { render, screen } from '@testing-library/react'

import BaseCard from '@components/molecules/cards/Base'

/**
 * @file Tests for the BaseCard component.
 * @description
 * Verifies correct rendering of HTML elements, children content, and Tailwind CSS classes for both section and article variants.
 */
describe('BaseCard Component', () => {
  test('should render BaseCard as section by default', () => {
    render(
      <BaseCard>
        <p>Test content</p>
      </BaseCard>,
    )

    const section = screen.getByText(/test content/i).closest('section')
    expect(section).toBeInTheDocument()
  })

  test('should render BaseCard as article when isArticle is true', () => {
    render(
      <BaseCard isArticle>
        <p>Article content</p>
      </BaseCard>,
    )

    const article = screen.getByText(/article content/i).closest('article')
    expect(article).toBeInTheDocument()
  })

  test('should render children correctly', () => {
    render(
      <BaseCard>
        <p>Visible content</p>
      </BaseCard>,
    )
    expect(screen.getByText(/visible content/i)).toBeInTheDocument()
  })

  test('should apply the correct outer CSS classes', () => {
    render(
      <BaseCard>
        <p>Card content</p>
      </BaseCard>,
    )

    const cardElement = screen.getByText(/card content/i).closest('section')
    expect(cardElement).toHaveClass('relative')
    expect(cardElement).toHaveClass('w-full')
    expect(cardElement).toHaveClass('min-h-[180px]')
    expect(cardElement).toHaveClass('rounded-lg')
    expect(cardElement).toHaveClass('overflow-hidden')
    expect(cardElement).toHaveClass('shadow-md')
    expect(cardElement).toHaveClass('border')
    expect(cardElement).toHaveClass('bg-gradient-to-r')
    expect(cardElement).toHaveClass('from-slate-800')
    expect(cardElement).toHaveClass('to-slate-900')
    expect(cardElement).toHaveClass('flex')
  })

  test('should apply correct inner content wrapper classes', () => {
    render(
      <BaseCard>
        <p>Inner content</p>
      </BaseCard>,
    )

    const contentWrapper = screen.getByText(/inner content/i).parentElement
    expect(contentWrapper).toHaveClass('relative')
    expect(contentWrapper).toHaveClass('flex-1')
    expect(contentWrapper).toHaveClass('p-8')
    expect(contentWrapper).toHaveClass('z-10')
  })
})
