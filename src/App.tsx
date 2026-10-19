import { About } from './sections/About'
import { Faq } from './sections/Faq'
import { FinalCta } from './sections/FinalCta'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { HowItWorks } from './sections/HowItWorks'
import { Pricing } from './sections/Pricing'
import { Reviews } from './sections/Reviews'
import { ServiceAreas } from './sections/ServiceAreas'
import { Services } from './sections/Services'
import { TrustBar } from './sections/TrustBar'
import { WhyChooseUs } from './sections/WhyChooseUs'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="t-ui sr-only rounded-full bg-ink px-5 py-3 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>
      <Hero />
      <main id="main">
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <Pricing />
        <Reviews />
        <HowItWorks />
        <ServiceAreas />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
