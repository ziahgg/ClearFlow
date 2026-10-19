import technicianImg from '../assets/images/technician.webp'
import { Icon } from '../components/Icon'
import { Button, Container, Eyebrow, Stars } from '../components/ui'

/* Arrival-window bars from the "Timeline" frame; the 5th (tallest) is highlighted */
const bars = [28, 40, 34, 56, 72, 48, 62]
const avatars = ['bg-blue', 'bg-lime', 'bg-navy', 'bg-mist']

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="bg-white pt-14 pb-14 lg:pt-[72px] lg:pb-[120px]">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <Eyebrow>Why ClearFlow</Eyebrow>
          <p className="t-sm text-muted md:text-right">
            Family-owned and operated.
            <br />
            Licensed in the State of Colorado.
          </p>
        </div>

        <h2 id="why-title" className="t-statement mt-7 max-w-[1120px] text-ink lg:mt-12">
          ClearFlow is a local plumbing team built on a simple promise: arrive on time, explain the problem in plain
          language, and charge exactly what we quoted.{' '}
          <span className="text-subtle">From a dripping tap to a full repipe, every job gets the same care and clean-up.</span>
        </h2>

        <div className="mt-7 grid gap-3 md:grid-cols-2 md:gap-5 lg:mt-12 lg:grid-cols-[290fr_310fr_310fr_310fr]">
          {/* Technician portrait with overlay */}
          <div className="relative flex h-[280px] flex-col justify-end overflow-hidden rounded-3xl p-3.5 md:h-[320px]">
            <img
              src={technicianImg}
              alt="ClearFlow technician in uniform"
              width={928}
              height={1152}
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="relative flex flex-col gap-1.5 rounded-2xl bg-white/94 p-4">
              <p className="t-title flex items-center gap-2 text-ink">
                <Icon name="badge-check" size={18} className="text-blue" />
                Vetted technicians
              </p>
              <p className="t-sm text-muted">Licensed, background-checked and uniformed. No subcontractors.</p>
            </div>
          </div>

          {/* On-time arrival */}
          <div className="flex h-[260px] flex-col justify-between rounded-3xl bg-cloud p-6 md:h-[320px]">
            <div className="flex flex-col gap-1.5">
              <p className="t-sm text-muted">Arrival windows</p>
              <p className="t-stat text-ink">2-hour</p>
            </div>
            <div aria-hidden="true" className="flex h-[72px] items-end gap-1.5">
              {bars.map((h, i) => (
                <span key={i} className={`flex-1 rounded-md ${h === 72 ? 'bg-lime' : 'bg-mist'}`} style={{ height: h }} />
              ))}
            </div>
            <p className="t-sm text-ink">We text when we are on the way, with a live ETA, so you are never left waiting.</p>
          </div>

          {/* Customer satisfaction */}
          <div className="flex h-[260px] flex-col justify-between rounded-3xl bg-cloud p-6 md:h-[320px]">
            <div className="flex flex-col gap-1.5">
              <p className="t-sm text-muted">Homeowners rate us</p>
              <p className="flex items-center gap-2.5">
                <span className="t-stat text-ink">4.9/5</span>
                <Stars size={14} />
              </p>
            </div>
            <div aria-hidden="true" className="flex">
              {avatars.map((c, i) => (
                <span key={c} className={`size-[38px] rounded-full border-[3px] border-white ${c} ${i ? '-ml-2.5' : ''}`} />
              ))}
            </div>
            <p className="font-serif text-[21px] leading-[1.25] tracking-[-0.003em] text-ink italic">
              “They explained the problem clearly and the price never changed.”
            </p>
          </div>

          {/* Upfront pricing */}
          <div className="flex h-[260px] flex-col justify-between rounded-3xl bg-ink p-6 md:h-[320px]">
            <div className="flex items-center justify-between">
              <p className="t-title text-white">Upfront pricing</p>
              <span className="grid size-9 place-items-center rounded-full bg-lime text-ink">
                <Icon name="dollar" size={18} />
              </span>
            </div>
            <p className="font-serif text-[42px] leading-[1.1] tracking-[-0.01em] text-white italic">
              No surprise fees. Ever.
            </p>
            <div className="flex items-center justify-between gap-3">
              <p className="t-sm text-white/70">Written quotes</p>
              <Button variant="lime" href="#pricing">
                See pricing
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
