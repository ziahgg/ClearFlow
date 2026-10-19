import { useState } from 'react'
import heroImg from '../assets/images/hero.webp'
import { Icon } from '../components/Icon'
import { Button, Container } from '../components/ui'
import { PHONE, PHONE_HREF } from '../content/site'
import { Header } from './Header'

const days = [
  { day: 'Mon', date: '19' },
  { day: 'Tue', date: '20' },
  { day: 'Wed', date: '21' },
  { day: 'Thu', date: '22' },
  { day: 'Fri', date: '23' },
]

function BookingCard({ className = '' }: { className?: string }) {
  const [selected, setSelected] = useState('Tue')
  return (
    <div className={`flex flex-col gap-3.5 rounded-[20px] bg-white p-[18px] shadow-float ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <p className="t-ui text-ink">Book a visit</p>
          <p className="t-caption text-muted">Pick an arrival window</p>
        </div>
        <Icon name="calendar" size={18} className="text-muted" />
      </div>
      <div className="flex gap-1.5" role="radiogroup" aria-label="Arrival day">
        {days.map(({ day, date }) => {
          const active = selected === day
          return (
            <button
              key={day}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setSelected(day)}
              className={`flex h-[52px] flex-1 flex-col items-center gap-0.5 rounded-xl py-2 transition-colors ${
                active ? 'bg-lime' : 'bg-cloud hover:bg-mist'
              }`}
            >
              <span className={`t-caption ${active ? 'text-ink' : 'text-muted'}`}>{day}</span>
              <span className="t-ui text-ink">{date}</span>
            </button>
          )
        })}
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-line px-3 py-2.5">
        <Icon name="clock" size={15} className="text-muted" />
        <span className="t-sm flex-1 text-ink">2:30 – 4:30 PM arrival</span>
        <Icon name="check" size={15} className="text-success" />
      </div>
      <Button variant="dark" href="#contact" className="w-full">
        Confirm booking
      </Button>
    </div>
  )
}

function QuoteCard({ className = '' }: { className?: string }) {
  const rows = [
    ['Kitchen drain clearing', 'Flat rate'],
    ['P-trap replacement', 'Flat rate'],
    ['Parts & labor', 'Itemized'],
  ]
  return (
    <div className={`flex flex-col gap-3 rounded-[20px] bg-white p-[18px] shadow-float ${className}`}>
      <div className="flex items-center justify-between">
        <p className="t-ui text-ink">Written quote</p>
        <span className="t-caption flex items-center gap-1 rounded-full bg-lime/50 px-2 py-1 text-ink">
          <Icon name="check" size={12} />
          Approved
        </span>
      </div>
      {rows.map(([label, value]) => (
        <div key={label} className="flex justify-between border-b border-line py-2.5">
          <span className="t-sm text-muted">{label}</span>
          <span className="t-label pt-0.5 text-ink">{value}</span>
        </div>
      ))}
      <div className="flex items-center gap-2 rounded-xl bg-cloud px-3 py-2.5">
        <span className="grid size-[22px] place-items-center rounded-full bg-lime text-ink">
          <Icon name="check" size={12} />
        </span>
        <span className="t-label text-ink">Price agreed before work starts</span>
      </div>
    </div>
  )
}

function EtaPill({ className = '' }: { className?: string }) {
  return (
    <div className={`flex w-[219px] items-center gap-2.5 rounded-full bg-ink py-2 pr-4 pl-2 shadow-float ${className}`}>
      <span className="grid size-8 place-items-center rounded-full bg-lime text-ink">
        <Icon name="truck" size={16} />
      </span>
      <span className="flex flex-col">
        <span className="t-label text-white">Technician on the way</span>
        <span className="t-caption text-white/70">Text updates with live ETA</span>
      </span>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="overflow-hidden bg-[linear-gradient(180deg,#0c4f97_0%,#277cd1_50%,#c7e5fa_100%)] pt-3 pb-10 lg:pt-5 lg:pb-0"
    >
      <Container>
        <Header />

        <div className="mx-auto flex max-w-[960px] flex-col items-center gap-5 pt-10 pb-8 text-center lg:gap-6 lg:pt-[84px] lg:pb-16">
          <div className="flex flex-col items-center gap-1.5 rounded-[18px] border border-white/32 bg-white/14 px-3 pt-2 pb-2.5 sm:flex-row sm:gap-2.5 sm:rounded-full sm:py-[5px] sm:pr-4 sm:pl-[5px]">
            <span className="t-label flex items-center gap-1.5 rounded-full bg-lime py-[5px] pr-2.5 pl-2 text-ink">
              <Icon name="badge-check" size={14} />
              Licensed &amp; insured
            </span>
            <span className="t-label text-white">Master plumbers serving Greater Denver, CO</span>
          </div>

          <h1 className="t-display text-white">
            Reliable plumbing, fixed right
            <br />
            <span className="serif-accent">the first time.</span>
          </h1>

          <p className="t-body-lg max-w-[640px] text-white/90">
            Same-day repairs, drain cleaning and water heater service from local, background-checked plumbers. You see a
            written, flat-rate quote before any work begins.
          </p>

          <p className="t-label flex items-start justify-center gap-2 text-white sm:items-center">
            <Icon name="map-pin" size={16} className="text-lime" />
            Serving Denver, Aurora, Lakewood, Littleton &amp; 20+ nearby communities
          </p>

          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Button variant="lime" arrow href="#contact" className="justify-between sm:justify-center">
              Book a plumber
            </Button>
            <Button variant="white" href={PHONE_HREF}>
              Call {PHONE}
            </Button>
          </div>

          <p className="t-sm flex items-center gap-2 text-white/85">
            <Icon name="clock" size={15} className="text-white" />
            Mon–Sat 7am–7pm&nbsp;&nbsp;·&nbsp;&nbsp;24/7 emergency dispatch
          </p>
        </div>

        {/* Hero visual — stacked on small screens, floating cards around the photo from lg (1280×420 frame) */}
        <div className="relative mx-auto flex max-w-[1280px] flex-col gap-4 md:max-w-[720px] lg:block lg:h-[420px] lg:max-w-[1280px]">
          <div className="relative lg:absolute lg:inset-y-0 lg:left-[21.875%] lg:w-[56.25%]">
            <div className="relative h-[260px] overflow-hidden rounded-[20px] sm:h-[360px] lg:h-full lg:rounded-b-none lg:rounded-t-[28px]">
              <img
                src={heroImg}
                alt="ClearFlow plumber repairing a kitchen sink"
                width={1376}
                height={768}
                fetchPriority="high"
                className="size-full object-cover"
              />
              {/* 6px inside stroke, white 45% */}
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_6px_rgb(255_255_255/0.45)]" />
            </div>
            <EtaPill className="absolute bottom-3 left-3 lg:hidden" />
          </div>
          <BookingCard className="lg:absolute lg:top-24 lg:left-[8.6%] lg:w-[300px]" />
          <QuoteCard className="hidden lg:absolute lg:top-11 lg:left-[68%] lg:flex lg:w-[300px]" />
          <EtaPill className="hidden lg:absolute lg:top-[318px] lg:left-[61.7%] lg:flex" />
        </div>
      </Container>
    </section>
  )
}
