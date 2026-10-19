import { useState } from 'react'
import { Icon, type IconName } from '../components/Icon'
import { Button, Container, Heading } from '../components/ui'
import { EMAIL, PHONE, PHONE_HREF } from '../content/site'

const contacts: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: 'phone', label: 'Call or text', value: PHONE, href: PHONE_HREF },
  { icon: 'mail', label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: 'clock', label: 'Office hours', value: 'Mon–Sat, 7am–7pm · Emergencies 24/7' },
  { icon: 'map-pin', label: 'Office', value: '1200 Example Ave, Denver, CO 80202' },
]

export function FinalCta() {
  // First row is highlighted in the design; hover/focus moves the highlight.
  const [active, setActive] = useState(0)

  return (
    <section id="contact" className="bg-white pb-12 lg:pb-[120px]">
      <Container>
        <div className="flex flex-col gap-7 rounded-[32px] bg-[linear-gradient(164deg,#0b3a66_14%,#277cd1_86%)] px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:p-[72px]">
          <div className="flex max-w-[672px] flex-col items-start gap-5 lg:gap-6">
            <p className="t-label flex items-center gap-2 rounded-full border border-white/30 bg-white/14 py-1.5 pr-3.5 pl-1.5 text-white">
              <span className="grid size-6 place-items-center rounded-full bg-lime text-ink">
                <Icon name="zap" size={13} />
              </span>
              Emergency line answered 24/7
            </p>
            <Heading className="t-h2-cta text-white" lead="Leaking, clogged or no hot water?" accent=" We are one call away." />
            <p className="t-body-lg text-white/88">
              Book online in under a minute or call now. You will always see the price before we start.
            </p>
            <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Button variant="lime" arrow href={PHONE_HREF} className="justify-between sm:justify-center">
                Book a plumber
              </Button>
              <Button variant="glass" href={PHONE_HREF}>
                Call {PHONE}
              </Button>
            </div>
          </div>

          <ul className="flex w-full flex-col rounded-3xl bg-white p-2 lg:w-[400px] lg:shrink-0">
            {contacts.map((c, i) => {
              const on = active === i
              const body = (
                <>
                  <span
                    className={`grid size-10 shrink-0 place-items-center rounded-full text-ink transition-colors ${
                      on ? 'bg-lime' : 'bg-cloud'
                    }`}
                  >
                    <Icon name={c.icon} size={18} />
                  </span>
                  <span className="flex min-w-0 flex-col gap-0.5">
                    <span className="t-caption text-muted">{c.label}</span>
                    <span className="t-ui break-words text-ink">{c.value}</span>
                  </span>
                </>
              )
              const cls = `flex items-center gap-3.5 rounded-2xl p-4 transition-colors ${on ? 'bg-cloud' : ''}`
              return (
                <li key={c.label} onMouseEnter={() => setActive(i)}>
                  {c.href ? (
                    <a href={c.href} onFocus={() => setActive(i)} className={cls}>
                      {body}
                    </a>
                  ) : (
                    <div className={cls}>{body}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </section>
  )
}
