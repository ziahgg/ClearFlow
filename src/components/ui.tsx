import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Icon, type IconName } from './Icon'

/* Mirrors the Figma "Button" component: pill, Geist Medium 15.
   Plain: 46px tall, 14/22 padding. With arrow: 48px tall, 6/6/6/22 padding + 36px arrow disc. */
export type ButtonVariant = 'dark' | 'lime' | 'white' | 'glass'

const variants: Record<ButtonVariant, { body: string; arrow: string }> = {
  dark: { body: 'bg-ink text-white hover:bg-[#262b33]', arrow: 'bg-lime text-ink' },
  lime: { body: 'bg-lime text-ink hover:bg-[#bde65a]', arrow: 'bg-ink text-white' },
  white: { body: 'bg-white text-ink hover:bg-cloud', arrow: 'bg-ink text-white' },
  glass: { body: 'border border-white/35 bg-white/14 text-white hover:bg-white/22', arrow: 'bg-lime text-ink' },
}

type Common = { variant: ButtonVariant; arrow?: boolean; children: ReactNode; className?: string }
type AsLink = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type AsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

export function Button(props: AsLink | AsButton) {
  const { variant, arrow = false, children, className = '', ...rest } = props
  const v = variants[variant]
  const cls = [
    't-ui group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full transition-colors duration-200',
    arrow ? 'h-12 py-1.5 pr-1.5 pl-[22px]' : 'h-[46px] px-[22px]',
    v.body,
    className,
  ].join(' ')
  const content = (
    <>
      {children}
      {arrow && (
        <span className={`grid size-9 place-items-center rounded-full ${v.arrow}`}>
          <Icon name="arrow-up-right" size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      )}
    </>
  )
  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
}

/* "Eyebrow" component — Instrument Serif italic, wrapped in slashes */
export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`t-eyebrow text-muted ${className}`}>/ {children} /</p>
}

/* Section heading: Geist Medium with an Instrument Serif italic tail, as in every Figma H2 */
export function Heading({
  lead,
  accent,
  as: Tag = 'h2',
  className = '',
}: {
  lead: string
  accent: string
  as?: 'h1' | 'h2'
  className?: string
}) {
  return (
    <Tag className={className}>
      {lead}
      <span className="serif-accent">{accent}</span>
    </Tag>
  )
}

/* Round "Icon badge" frame with a centered icon */
export function IconBadge({
  icon,
  size,
  iconSize,
  className = '',
}: {
  icon: IconName
  size: number
  iconSize: number
  className?: string
}) {
  return (
    <span className={`grid shrink-0 place-items-center rounded-full ${className}`} style={{ width: size, height: size }}>
      <Icon name={icon} size={iconSize} />
    </span>
  )
}

export function Stars({ size, gap = 2, className = 'text-star' }: { size: number; gap?: number; className?: string }) {
  return (
    <span className={`flex ${className}`} style={{ gap }} role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="star" size={size} />
      ))}
    </span>
  )
}

/* Shared horizontal frame: 1280px content column with the Figma 80px desktop / 20px mobile gutters */
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-5 md:px-10 xl:px-20 ${className}`}>{children}</div>
}
