import { useState } from 'react'
import { Icon } from '../components/Icon'
import { Button, Container, Eyebrow, Heading } from '../components/ui'
import { plans, policyPoints, type Plan } from '../content/site'

const customerTypes = ['Residential', 'Commercial'] as const

function PricingCard({ plan }: { plan: Plan }) {
  const { featured } = plan
  return (
    <article
      className={`flex flex-col gap-5 rounded-3xl bg-white p-7 ${
        featured ? 'border-2 border-lime-deep' : 'border border-line'
      }`}
    >
      <div className="flex min-h-[18px] items-center justify-between">
        <h3 className="t-ui text-muted">{plan.name}</h3>
        {featured && (
          <span className="t-caption flex items-center gap-1 rounded-full bg-lime px-2.5 py-[5px] text-ink">
            <Icon name="sparkle" size={12} />
            Most booked
          </span>
        )}
      </div>
      <p className="flex items-baseline gap-2">
        <span className="t-stat text-ink">{plan.price}</span>
        <span className="t-sm text-muted">{plan.unit}</span>
      </p>
      <p className="t-sm text-muted">{plan.description}</p>
      <hr className="border-line" />
      <p className="t-label text-ink">What&apos;s included</p>
      <ul className="flex flex-col gap-3">
        {plan.includes.map((item) => (
          <li key={item} className="t-sm flex items-center gap-2.5 text-ink">
            <span className={`grid size-5 shrink-0 place-items-center rounded-full ${featured ? 'bg-lime' : 'bg-cloud'}`}>
              <Icon name="check" size={12} />
            </span>
            {item}
          </li>
        ))}
      </ul>
      <Button variant={featured ? 'lime' : 'dark'} href="#contact" className="w-full">
        {plan.cta}
      </Button>
    </article>
  )
}

export function Pricing() {
  const [type, setType] = useState<(typeof customerTypes)[number]>('Residential')

  return (
    <section id="pricing" className="bg-cloud py-16 lg:py-[120px]">
      <Container className="flex flex-col items-center">
        <div className="flex max-w-[760px] flex-col items-center gap-4 text-center">
          <Eyebrow>Transparent Pricing</Eyebrow>
          <Heading className="t-h2 text-ink" lead="Honest prices, " accent="agreed before we start." />
          <p className="t-body max-w-[560px] text-muted">
            No hourly meters running. You get a written, itemized price for the job and approve it before any work
            begins.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Customer type"
          className="mt-7 flex gap-1 rounded-full border border-line bg-white p-1 lg:mt-10"
        >
          {customerTypes.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={type === t}
              onClick={() => setType(t)}
              className={`t-label rounded-full px-5 py-2.5 transition-colors ${
                type === t ? 'bg-ink text-white' : 'text-muted hover:text-ink'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-7 grid w-full items-start gap-4 lg:mt-10 lg:grid-cols-3 lg:gap-5">
          {plans.map((p) => (
            <PricingCard key={p.name} plan={p} />
          ))}
        </div>

        <div className="mt-7 flex w-full flex-col gap-6 rounded-3xl bg-white p-6 lg:mt-10 lg:flex-row lg:gap-12 lg:p-9">
          <div className="flex flex-col gap-3.5 lg:w-80 lg:shrink-0">
            <span className="grid size-12 place-items-center rounded-full bg-lime text-ink">
              <Icon name="file-text" size={22} />
            </span>
            <h3 className="t-h4 text-ink">Our estimate policy</h3>
            <p className="t-sm text-muted">
              Exact fees depend on the job and are always confirmed with you in writing before any work begins.
            </p>
          </div>
          <ul className="grid flex-1 gap-4 md:grid-cols-2 md:gap-x-6 md:gap-y-7">
            {policyPoints.map((pt) => (
              <li key={pt.title} className="flex gap-3.5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-cloud text-ink">
                  <Icon name={pt.icon} size={18} />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="t-ui text-ink">{pt.title}</span>
                  <span className="t-sm text-muted">{pt.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
