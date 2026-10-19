import { Icon } from '../components/Icon'
import { Container } from '../components/ui'
import { PHONE, PHONE_HREF, footerColumns } from '../content/site'
import { Logo } from './Header'

export function Footer() {
  return (
    <footer className="bg-ink pt-14 pb-8 lg:pt-[88px] lg:pb-10">
      <Container>
        <div className="flex flex-col gap-9 lg:flex-row lg:justify-between lg:gap-12">
          <div className="flex max-w-[340px] flex-col gap-5">
            <Logo dark />
            <p className="t-sm text-white/65">
              Licensed, local plumbers serving homeowners and small businesses across Greater Denver with upfront,
              written pricing.
            </p>
            <a href={PHONE_HREF} className="t-title flex items-center gap-2.5 text-white">
              <span className="grid size-9 place-items-center rounded-full bg-white/10">
                <Icon name="phone" size={16} />
              </span>
              {PHONE}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 lg:flex lg:gap-14">
            {footerColumns.map((col) => (
              <nav
                key={col.title}
                aria-label={col.title}
                className={col.title === 'Contact' ? 'col-span-2 md:col-span-1' : undefined}
              >
                <h2 className="t-ui text-lime">{col.title}</h2>
                <ul className="mt-3.5 flex flex-col gap-3.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="t-sm block text-white/72 transition-colors hover:text-white">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-8 h-px bg-white/12 lg:mt-14" />

        <div className="mt-8 flex flex-col gap-3 lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <p className="t-sm text-white/55">
            © 2026 ClearFlow Plumbing LLC. All rights reserved.&nbsp;&nbsp;·&nbsp;&nbsp;CO Master Plumber Lic. #PL-000000
          </p>
          {/* Legal pages are not part of the design yet */}
          <ul className="t-sm flex gap-6 text-white/72">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
