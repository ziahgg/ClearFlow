import { Fragment } from 'react'
import { Icon } from '../components/Icon'
import { Container, Stars } from '../components/ui'
import { trustItems } from '../content/site'

export function TrustBar() {
  return (
    <section aria-label="Why homeowners trust ClearFlow" className="bg-white py-8 lg:py-9">
      <Container>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-6 lg:grid-cols-3 xl:flex xl:flex-row xl:items-center xl:justify-between xl:gap-4">
          <div className="flex items-center gap-3.5">
            <span className="t-stat text-ink">4.9</span>
            <span className="flex flex-col gap-1">
              <Stars size={16} />
              <span className="t-sm text-muted">Google rating · 300+ reviews</span>
            </span>
          </div>
          {trustItems.map((item) => (
            <Fragment key={item.title}>
              <span aria-hidden="true" className="hidden h-11 w-px shrink-0 bg-line xl:block" />
              <div className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-cloud text-ink">
                  <Icon name={item.icon} size={20} />
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="t-ui text-ink">{item.title}</span>
                  <span className="t-sm text-muted">{item.text}</span>
                </span>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="mt-7 h-px bg-line lg:mt-9" />
      </Container>
    </section>
  )
}
