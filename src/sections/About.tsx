import teamImg from '../assets/images/team.webp'
import { Icon } from '../components/Icon'
import { Button, Container, Eyebrow, Heading } from '../components/ui'
import { EMAIL } from '../content/site'

const stats = [
  { value: '15+', label: 'Years in business' },
  { value: '12k+', label: 'Jobs completed' },
  { value: '18', label: 'Licensed plumbers' },
]

export function About() {
  return (
    <section id="about" className="bg-cloud py-16 lg:py-[120px]">
      <Container className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-[72px]">
        <div className="relative flex h-[300px] shrink-0 flex-col justify-end overflow-hidden rounded-[28px] p-5 md:h-[460px] lg:aspect-square lg:h-auto lg:w-[45.3%]">
          <img
            src={teamImg}
            alt="The ClearFlow team with their service van"
            width={1024}
            height={1024}
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
          <p className="t-ui relative flex w-fit items-center gap-2.5 rounded-full bg-white py-2 pr-[18px] pl-2 text-ink shadow-soft">
            <span className="grid size-9 place-items-center rounded-full bg-lime text-ink">
              <Icon name="home" size={18} />
            </span>
            Family-owned since 2008
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:gap-6">
          <Eyebrow>About ClearFlow</Eyebrow>
          <Heading className="t-h2 text-ink" lead="Local plumbers wh" accent="o treat your home like their own." />
          <p className="t-body-lg text-muted">
            ClearFlow started with one truck and a simple idea: do honest work at a fair, upfront price. Today our team
            of licensed plumbers serves homeowners and small businesses across the Denver metro area.
          </p>
          <p className="t-body text-muted">
            We train our own technicians, stock our trucks with quality parts, and stand behind every job with a written
            workmanship warranty.
          </p>
          <dl className="grid grid-cols-3 gap-2 md:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse gap-1 rounded-[20px] bg-white px-3.5 py-5 md:p-5">
                <dt className="t-sm text-muted">{s.label}</dt>
                <dd className="t-stat text-[34px] text-ink md:text-[44px]">{s.value}</dd>
              </div>
            ))}
          </dl>
          <p className="t-label flex items-start gap-2.5 text-ink">
            <Icon name="badge-check" size={18} className="text-blue" />
            Colorado Master Plumber Lic. #PL-000000&nbsp;&nbsp;·&nbsp;&nbsp;Fully insured
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="dark" arrow href="#contact">
              Meet the team
            </Button>
            <Button variant="white" href={`mailto:${EMAIL}?subject=Careers`}>
              Careers
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
