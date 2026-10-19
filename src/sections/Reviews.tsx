import { useCallback, useEffect, useRef, useState } from 'react'
import customerImg from '../assets/images/customer.webp'
import { Icon } from '../components/Icon'
import { Container, Eyebrow, Heading, Stars } from '../components/ui'
import { reviewFilters, reviews, type ReviewFilter } from '../content/site'

type Review = (typeof reviews)[number]

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full w-[300px] shrink-0 snap-start flex-col gap-4 rounded-3xl bg-cloud px-3 pt-3 pb-5 md:w-[620px] md:flex-row-reverse md:gap-5 md:py-3 md:pr-3 md:pl-7">
      {review.photo ? (
        <img
          src={customerImg}
          alt=""
          width={896}
          height={1200}
          loading="lazy"
          className="h-[180px] w-full shrink-0 rounded-[18px] object-cover md:h-[276px] md:w-[220px]"
        />
      ) : (
        <span aria-hidden="true" className="h-[180px] w-full shrink-0 rounded-[18px] bg-sky md:h-[276px] md:w-[220px]" />
      )}
      <div className="flex flex-1 flex-col justify-between gap-6 px-2 py-4 md:px-0">
        <div className="flex flex-col gap-4">
          <Stars size={14} />
          <blockquote className="t-quote text-ink">{review.quote}</blockquote>
        </div>
        <div className="flex flex-col gap-2.5 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-0.5">
            <p className="t-ui text-ink">{review.name}</p>
            <p className="t-sm text-muted md:whitespace-nowrap">{review.meta}</p>
          </div>
          <p className="t-caption flex shrink-0 items-center gap-1.5 text-muted">
            <Icon name="badge-check" size={14} className="text-success" />
            Verified review
          </p>
        </div>
      </div>
    </article>
  )
}

export function Reviews() {
  const [filter, setFilter] = useState<ReviewFilter>('All reviews')
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const track = useRef<HTMLDivElement>(null)

  const visible = filter === 'All reviews' ? reviews : reviews.filter((r) => r.tags.includes(filter))

  const update = useCallback(() => {
    const el = track.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const el = track.current
    if (!el) return
    el.scrollTo({ left: 0 })
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [filter, update])

  const step = (dir: 1 | -1) => {
    const el = track.current
    const card = el?.querySelector('article')
    if (!el || !card) return
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + 20), behavior: 'smooth' })
  }

  const arrowCls = (enabled: boolean) =>
    `grid size-11 place-items-center rounded-full transition-colors ${
      enabled ? 'bg-lime text-ink hover:bg-[#bde65a]' : 'border border-line text-muted'
    }`

  return (
    <section id="reviews" className="overflow-hidden bg-white py-16 lg:py-[120px]">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="flex max-w-[560px] flex-col gap-4">
            <Eyebrow>Testimonials</Eyebrow>
            <Heading className="t-h2 text-ink" lead="Real stories from" accent=" our customers" />
          </div>
          <div className="flex max-w-[400px] flex-col items-start gap-4">
            <p className="t-body text-muted">
              Hear from homeowners across Greater Denver about what it is like to work with our team.
            </p>
            <p className="t-label flex items-center gap-2.5 rounded-full border border-line py-2 pr-4 pl-2 text-ink">
              <span className="grid size-8 place-items-center rounded-full bg-lime text-ink">
                <Icon name="star" size={16} />
              </span>
              4.9 average from 300+ Google reviews
            </p>
          </div>
        </div>

        <div
          ref={track}
          onScroll={update}
          aria-label="Customer reviews"
          tabIndex={0}
          className="no-scrollbar mt-7 mr-[calc(50%-50vw)] flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto md:gap-5 lg:mt-12"
        >
          {visible.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
          <span aria-hidden="true" className="w-px shrink-0" />
        </div>

        <div className="mt-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between lg:mt-12">
          <div role="tablist" aria-label="Filter reviews" className="flex flex-wrap gap-x-5 gap-y-3 md:gap-x-6">
            {reviewFilters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`t-label transition-colors ${filter === f ? 'text-ink' : 'text-subtle hover:text-muted'}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex gap-2.5">
            <button type="button" aria-label="Previous review" disabled={!canPrev} onClick={() => step(-1)} className={arrowCls(canPrev)}>
              <Icon name="arrow-left" size={18} />
            </button>
            <button type="button" aria-label="Next review" disabled={!canNext} onClick={() => step(1)} className={arrowCls(canNext)}>
              <Icon name="arrow-right" size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
