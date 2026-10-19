import type { ReactNode } from 'react'
import { Icon } from '../components/Icon'
import { Container, Eyebrow, Heading } from '../components/ui'

/* Illustrative "Mock UI" cards inside each step visual — decorative, not real form controls */
function MockCard({ children }: { children: ReactNode }) {
  return (
    <div aria-hidden="true" className="flex w-[300px] max-w-[calc(100%-32px)] shrink-0 flex-col gap-3 rounded-2xl border-[3px] border-blue bg-white p-4 shadow-soft">
      {children}
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-[10px] border border-line px-3 py-2.5">
      <span className="flex flex-col gap-0.5">
        <span className="t-caption text-muted">{label}</span>
        <span className="t-sm text-ink">{value}</span>
      </span>
      <Icon name="chevron-down" size={14} className="text-muted" />
    </div>
  )
}

function FakeButton({ variant, children }: { variant: 'lime' | 'dark'; children: ReactNode }) {
  return (
    <span
      className={`t-ui flex h-[46px] items-center justify-center rounded-full ${
        variant === 'lime' ? 'bg-lime text-ink' : 'bg-ink text-white'
      }`}
    >
      {children}
    </span>
  )
}

const steps: { n: string; title: string; text: string; visual: ReactNode }[] = [
  {
    n: '01',
    title: 'Book online or call',
    text: 'Choose your service and a two-hour arrival window, or call and talk to a real person.',
    visual: (
      <MockCard>
        <p className="t-ui text-ink">Request a visit</p>
        <Field label="Service" value="Drain cleaning" />
        <Field label="ZIP code" value="80202" />
        <FakeButton variant="lime">Find a time</FakeButton>
      </MockCard>
    ),
  },
  {
    n: '02',
    title: 'Approve a written quote',
    text: 'Your plumber diagnoses the issue and shows you a flat-rate price. Nothing starts until you approve.',
    visual: (
      <MockCard>
        <div className="flex items-center justify-between gap-2">
          <p className="t-ui text-ink">Quote #1042</p>
          <p className="t-caption text-muted">Pending approval</p>
        </div>
        {['Water heater flush', 'Anode rod replacement'].map((row) => (
          <div key={row} className="flex items-center justify-between gap-2 py-2">
            <span className="t-sm text-muted">{row}</span>
            <span className="t-label text-ink">Flat rate</span>
          </div>
        ))}
        <FakeButton variant="dark">Approve quote</FakeButton>
      </MockCard>
    ),
  },
  {
    n: '03',
    title: 'We fix it and clean up',
    text: 'The job is done to code, tested in front of you, and the work area is left cleaner than we found it.',
    visual: (
      <MockCard>
        <div className="flex items-center justify-between gap-2">
          <p className="t-ui text-ink">Job checklist</p>
          <span className="t-caption rounded-full bg-lime px-2 py-1 text-ink">Complete</span>
        </div>
        {['Repair completed & tested', 'Work area cleaned', 'Invoice matches quote'].map((row) => (
          <p key={row} className="t-sm flex items-center gap-2.5 text-ink">
            <span className="grid size-[22px] shrink-0 place-items-center rounded-full bg-success text-white">
              <Icon name="check" size={12} />
            </span>
            {row}
          </p>
        ))}
      </MockCard>
    ),
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cloud py-16 lg:py-[120px]">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="flex max-w-[640px] flex-col gap-4">
            <Eyebrow>How It Works</Eyebrow>
            <Heading className="t-h2 text-ink" lead="Three simple steps" accent=" to a fixed problem." />
          </div>
          <p className="t-body max-w-[400px] text-muted">
            Book in under a minute, approve a clear price, and let a licensed plumber take care of the rest.
          </p>
        </div>

        <ol className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5 lg:mt-14">
          {steps.map((s) => (
            <li key={s.n} className="flex flex-col gap-5 rounded-3xl bg-white px-3.5 pt-3.5 pb-7">
              <div className="flex h-60 items-center justify-center overflow-hidden rounded-[18px] bg-sky">{s.visual}</div>
              <div className="flex flex-col gap-2 px-3.5">
                <p className="t-caption flex items-center gap-2 text-muted">
                  <span className="grid size-[22px] place-items-center rounded-full bg-lime text-ink">
                    <Icon name="check" size={12} />
                  </span>
                  Step {s.n}
                </p>
                <h3 className="t-h4 text-ink">{s.title}</h3>
                <p className="t-sm text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
