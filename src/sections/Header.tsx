import { useEffect, useRef, useState } from 'react'
import { Icon } from '../components/Icon'
import { Button } from '../components/ui'
import { PHONE, PHONE_HREF, navLinks, services } from '../content/site'

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="ClearFlow home">
      <span className="grid size-[34px] place-items-center rounded-[10px] bg-lime text-ink">
        <Icon name="droplet" size={18} />
      </span>
      <span className={`t-title ${dark ? 'text-white' : 'text-ink'}`}>ClearFlow</span>
    </a>
  )
}

function ServicesMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className="t-label flex items-center gap-1 text-ink"
        aria-expanded={open}
        aria-controls="services-menu"
        onClick={() => setOpen((o) => !o)}
      >
        Services
        <Icon name="chevron-down" size={14} className={`text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul
          id="services-menu"
          className="absolute top-[calc(100%+22px)] left-1/2 z-30 w-64 -translate-x-1/2 rounded-[18px] bg-white p-2 shadow-float"
        >
          {services.map((s) => (
            <li key={s.title}>
              <a
                href="#services"
                onClick={() => setOpen(false)}
                className="t-label flex items-center gap-3 rounded-xl px-3 py-2.5 text-ink transition-colors hover:bg-cloud"
              >
                <Icon name={s.icon} size={16} className="text-muted" />
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(width >= 80rem)')
    const close = () => mq.matches && setMenuOpen(false)
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  return (
    <header className="relative z-20">
      <nav
        aria-label="Primary"
        className="flex items-center justify-between rounded-[18px] bg-white py-2 pr-2 pl-3.5 xl:bg-white/96 xl:py-2.5 xl:pr-2.5 xl:pl-[18px]"
      >
        <Logo />

        <ul className="hidden items-center gap-8 xl:flex">
          <li>
            <ServicesMenu />
          </li>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="t-label text-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 xl:gap-5">
          <a href={PHONE_HREF} className="hidden items-center gap-2 xl:flex">
            <span className="grid size-8 place-items-center rounded-full bg-cloud text-ink">
              <Icon name="phone" size={15} />
            </span>
            <span className="flex flex-col">
              <span className="t-caption text-muted">24/7 emergency line</span>
              <span className="t-ui text-ink">{PHONE}</span>
            </span>
          </a>
          <Button variant="dark" href="#contact">
            Book online
          </Button>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-xl border border-ink/15 text-ink xl:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <Icon name={menuOpen ? 'x' : 'menu'} size={22} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="absolute inset-x-0 top-[calc(100%+8px)] rounded-[18px] bg-white p-2 shadow-float xl:hidden">
          <ul>
            {[{ label: 'Services', href: '#services' }, ...navLinks].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="t-ui block rounded-xl px-3.5 py-3 text-ink transition-colors hover:bg-cloud"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={PHONE_HREF} className="mt-1 flex items-center gap-2 rounded-xl bg-cloud px-3.5 py-3">
            <Icon name="phone" size={15} />
            <span className="flex flex-col">
              <span className="t-caption text-muted">24/7 emergency line</span>
              <span className="t-ui text-ink">{PHONE}</span>
            </span>
          </a>
        </div>
      )}
    </header>
  )
}
