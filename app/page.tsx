import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'
import ArchitectureSection from './sections/ArchitectureSection'
import ConciergeSection from './sections/ConciergeSection'
import FounderSection from './sections/FounderSection'
import ProcessSection from './sections/ProcessSection'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ArchitectureSection />
      <ConciergeSection />
      <FounderSection />
      <ProcessSection />
      <Footer />
    </>
  )
}
