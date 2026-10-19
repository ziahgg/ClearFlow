import { useId, useState } from 'react'
import { Icon } from '../components/Icon'
import { Button, Container, Eyebrow, Heading } from '../components/ui'
import { PHONE, PHONE_HREF, faqs } from '../content/site'

function FaqItem({ n, q, a, open, onToggle }: { n: number; q: string; a: string; open: boolean; onToggle: () => void }) {
  const id = useId()
  return (
    <li
      className={`rounded-[18px] border transition-colors duration-200 ${
        open ? 'border-line bg-white' : 'border-transparent bg-cloud'
      }`}
    >
      <h3>
        <button
          type="button"
          id={`${id}-q`}
          aria-expanded={open}
          aria-controls={`${id}-a`}
          onClick={onToggle}
          className="flex w-full items-center gap-5 py-[21px] pr-[21px] pl-[25px] text-left"
        >
          <span className="t-caption w-3.5 shrink-0 text-subtle">{String(n).padStart(2, '0')}</span>
          <span className="t-faq flex-1 text-ink">{q}</span>
          <span
            className={`grid size-9 shrink-0 place-items-center rounded-full text-ink transition-colors duration-200 ${
              open ? 'bg-lime' : 'bg-white'
            }`}
          >
            <Icon name={open ? 'minus' : 'plus'} size={16} />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-a`}
        role="region"
        aria-labelledby={`${id}-q`}
        className={`grid transition-[grid-template-rows] duration-300 ${open ? '-mt-[9px] grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="t-body pr-[55px] pb-[23px] pl-[65px] text-muted">{a}</p>
        </div>
      </div>
    </li>
  )
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-16 lg:py-[120px]">
      <Container className="grid gap-7 lg:grid-cols-[400px_1fr] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-5">
        <div className="flex flex-col gap-5">
          <Eyebrow>FAQ</Eyebrow>
          <Heading className="t-h2 text-ink" lead="Frequently asked qu" accent="estions" />
          <p className="t-body text-muted">
            Straight answers about pricing, scheduling and our work. Cannot find what you need? Talk to us.
          </p>
        </div>

        <ul className="flex flex-col gap-2.5 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:gap-3">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} n={i + 1} q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
          ))}
        </ul>

        <div className="flex flex-col items-start gap-3.5 self-start rounded-[22px] bg-ink p-6">
          <span className="grid size-11 place-items-center rounded-full bg-lime text-ink">
            <Icon name="phone" size={20} />
          </span>
          <h3 className="t-title text-white">Still have a question?</h3>
          <p className="t-sm text-white/72">
            Our office team answers Mon–Sat, 7am–7pm. Emergencies are answered 24/7.
          </p>
          <Button variant="lime" arrow href={PHONE_HREF}>
            Call {PHONE}
          </Button>
        </div>
      </Container>
    </section>
  )
}
