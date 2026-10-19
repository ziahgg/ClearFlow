import { useState } from 'react'
import { Icon } from '../components/Icon'
import { Button, Container, Eyebrow, Heading } from '../components/ui'
import { services } from '../content/site'

export function Services() {
  // The Figma grid shows one card in its dark (active) state; hover/focus moves that state.
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="bg-white py-16 lg:pt-[120px] lg:pb-[120px]">
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="flex max-w-[640px] flex-col gap-4">
            <Eyebrow>Our Services</Eyebrow>
            <Heading className="t-h2 text-ink" lead="Plumbing services for every room " accent="in your home." />
          </div>
          <div className="flex max-w-[400px] flex-col items-start gap-5">
            <p className="t-body text-muted">
              From a dripping faucet to a full sewer line replacement, our licensed plumbers diagnose the problem,
              explain your options and get it fixed properly.
            </p>
            <Button variant="dark" arrow href="#pricing">
              View all services
            </Button>
          </div>
        </div>

        <ul className="mt-8 grid gap-3 md:grid-cols-2 md:gap-5 lg:mt-14 lg:grid-cols-3">
          {services.map((s, i) => {
            const dark = active === i
            return (
              <li key={s.title}>
                <a
                  href="#contact"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`flex h-full min-h-[257px] flex-col rounded-3xl p-7 transition-colors duration-300 ${
                    dark ? 'bg-ink' : 'bg-cloud'
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span
                      className={`grid size-14 place-items-center rounded-2xl text-ink transition-colors duration-300 ${
                        dark ? 'bg-lime' : 'bg-white'
                      }`}
                    >
                      <Icon name={s.icon} size={26} />
                    </span>
                    <span
                      className={`grid size-10 place-items-center rounded-full border transition-colors duration-300 ${
                        dark ? 'border-white text-lime' : 'border-ink text-ink'
                      }`}
                    >
                      <Icon name="arrow-up-right" size={16} />
                    </span>
                  </span>
                  <span className="min-h-16 flex-1" />
                  <h3 className={`t-h4 transition-colors duration-300 ${dark ? 'text-white' : 'text-ink'}`}>{s.title}</h3>
                  <p className={`t-sm mt-2.5 transition-colors duration-300 ${dark ? 'text-white' : 'text-muted'}`}>
                    {s.description}
                  </p>
                </a>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
