import { useId, useState, type CSSProperties, type FormEvent } from 'react'
import { Icon } from '../components/Icon'
import { Container, Eyebrow, Heading } from '../components/ui'
import { PHONE, PHONE_HREF, areaChips } from '../content/site'

/* Desktop map is the 1280×540 Figma frame. Positions right of the ZIP card are mapped so that they match
   the design exactly at 1280px and compress proportionally (without overlapping the cards) down to 1120px. */
const mapX = (x: number) => `calc(400px + (100% - 559px) * ${((x - 400) / 721).toFixed(4)})`
const CENTER_X = mapX(800)
const rings = [
  { size: 660, fill: 'bg-blue/4' },
  { size: 460, fill: 'bg-blue/6' },
  { size: 260, fill: 'bg-blue/9' },
]

/* Greater Denver ZIPs fall in the 800xx–801xx range (25 mi radius) */
const isServed = (zip: string) => /^80[01]\d\d$/.test(zip)

function HqMarker({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <div className={`flex items-center gap-2.5 rounded-full bg-ink py-1.5 pr-4 pl-1.5 shadow-soft ${className}`} style={style}>
      <span className="grid size-9 place-items-center rounded-full bg-lime text-ink">
        <Icon name="map-pin" size={18} />
      </span>
      <span className="flex flex-col whitespace-nowrap">
        <span className="t-label text-white">ClearFlow HQ</span>
        <span className="t-caption text-white/70">Denver, CO</span>
      </span>
    </div>
  )
}

function AreaChip({ name, className = '', style }: { name: string; className?: string; style?: CSSProperties }) {
  return (
    <li
      className={`t-label flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white py-[7px] pr-3 pl-2 text-ink shadow-soft ${className}`}
      style={style}
    >
      <Icon name="map-pin" size={14} className="text-blue" />
      {name}
    </li>
  )
}

function ZipChecker({ className = '' }: { className?: string }) {
  const id = useId()
  const [zip, setZip] = useState('')
  // The design shows the card after a successful check for 80202
  const [checked, setChecked] = useState<{ zip: string; ok: boolean } | null>({ zip: '80202', ok: true })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const value = zip.trim()
    if (!/^\d{5}$/.test(value)) {
      setChecked({ zip: value, ok: false })
      return
    }
    setChecked({ zip: value, ok: isServed(value) })
  }

  return (
    <div className={`flex flex-col gap-3.5 rounded-[22px] bg-white p-6 shadow-soft ${className}`}>
      <span className="grid size-11 place-items-center rounded-full bg-lime text-ink">
        <Icon name="search" size={20} />
      </span>
      <h3 className="t-title text-ink">Do we service your area?</h3>
      <p className="t-sm text-muted">Check your ZIP code to see arrival windows near you.</p>
      <form
        onSubmit={onSubmit}
        className="flex h-[60px] items-center gap-2 rounded-full border border-line py-1.5 pr-1.5 pl-4 focus-within:border-blue"
      >
        <label htmlFor={id} className="sr-only">
          ZIP code
        </label>
        <input
          id={id}
          inputMode="numeric"
          autoComplete="postal-code"
          maxLength={5}
          placeholder="Enter ZIP code"
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/\D/g, ''))}
          className="t-sm min-w-0 flex-1 bg-transparent text-ink outline-none placeholder:text-subtle"
        />
        <button type="submit" className="t-ui h-[46px] rounded-full bg-ink px-[22px] text-white transition-colors hover:bg-[#262b33]">
          Check
        </button>
      </form>
      <p
        aria-live="polite"
        className={`t-label flex items-center gap-2 rounded-xl px-3 py-2.5 text-ink ${
          checked ? (checked.ok ? 'bg-lime/35' : 'bg-cloud') : 'invisible'
        }`}
      >
        {checked?.ok ? (
          <>
            <Icon name="check" size={16} />
            Good news — we serve {checked.zip}
          </>
        ) : checked && /^\d{5}$/.test(checked.zip) ? (
          <>
            <Icon name="phone" size={16} />
            {checked.zip} is outside our map — call {PHONE}
          </>
        ) : (
          <>
            <Icon name="search" size={16} />
            Enter a 5-digit ZIP code
          </>
        )}
      </p>
      <p className="t-caption text-muted">
        Just outside the map?{' '}
        <a href={PHONE_HREF} className="underline-offset-2 hover:underline">
          Call us.
        </a>{' '}
        We may still be able to help.
      </p>
    </div>
  )
}

function RadiusStat({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-1 rounded-[20px] bg-white px-5 py-[18px] shadow-soft ${className}`}>
      <p className="t-caption text-muted">Service radius</p>
      <p className="t-stat text-[34px] text-ink xl:text-[44px]">25 mi</p>
      <p className="t-sm text-muted">from central Denver</p>
    </div>
  )
}

export function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-white py-16 lg:py-[120px]">
      <Container className="flex flex-col items-center">
        <div className="flex max-w-[760px] flex-col items-center gap-4 text-center">
          <Eyebrow>Service Areas</Eyebrow>
          <Heading className="t-h2 text-ink" lead="Proudly serving " accent="Greater Denver." />
          <p className="t-body max-w-[560px] text-muted">
            Our plumbers are based locally and cover the Denver metro area. Enter your ZIP code to confirm we can reach
            you.
          </p>
        </div>

        {/* Stacked layout (mobile → lg), from the mobile Figma frame */}
        <div className="mt-6 flex w-full flex-col gap-6 lg:mt-12 xl:hidden">
          <div className="grid gap-6 md:grid-cols-2">
            <ZipChecker />
            <div className="relative h-[300px] overflow-hidden rounded-[28px] bg-sky md:h-auto md:min-h-[300px]">
              {[280, 200, 120].map((s, i) => (
                <span
                  key={s}
                  aria-hidden="true"
                  className={`absolute top-1/2 left-1/2 -translate-1/2 rounded-full border border-blue/35 ${rings[i].fill}`}
                  style={{ width: s, height: s }}
                />
              ))}
              <HqMarker className="absolute top-1/2 left-1/2 -translate-1/2" />
            </div>
          </div>
          <ul aria-label="Areas we serve" className="flex flex-wrap gap-2">
            {areaChips.map((a) => (
              <AreaChip key={a.name} name={a.name} />
            ))}
          </ul>
          <RadiusStat />
        </div>

        {/* Desktop map (xl+) */}
        <div className="relative mt-12 hidden h-[540px] w-full overflow-hidden rounded-[28px] bg-sky xl:block">
          {rings.map((r) => (
            <span
              key={r.size}
              aria-hidden="true"
              className={`absolute -translate-1/2 rounded-full border border-blue/35 ${r.fill}`}
              style={{ left: CENTER_X, top: 280, width: r.size, height: r.size }}
            />
          ))}
          <HqMarker className="absolute -translate-1/2" style={{ left: CENTER_X, top: 280 }} />
          <ul aria-label="Areas we serve">
            {areaChips.map((a) => (
              <AreaChip key={a.name} name={a.name} className="absolute" style={{ left: mapX(a.x), top: a.y }} />
            ))}
          </ul>
          <ZipChecker className="absolute top-8 left-8 w-[340px]" />
          <RadiusStat className="absolute top-8 right-[41px] w-[167px]" />
        </div>

        <p className="t-sm mt-6 max-w-[760px] text-center text-muted lg:mt-12">
          Also serving Castle Rock, Commerce City, Highlands Ranch, Parker, Lone Tree, Northglenn and Federal Heights.
        </p>
      </Container>
    </section>
  )
}
