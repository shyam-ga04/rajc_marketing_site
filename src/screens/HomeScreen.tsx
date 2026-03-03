import { useNavigate } from "@tanstack/react-router"
import HeroSection from "@/lib/sections/HeroSection"
import QuickIntroSection from "@/lib/sections/QuickIntroSection"
import ServicesPreviewSection from "@/lib/sections/ServicesPreviewSection"
import FeaturedProjectsSection from "@/lib/sections/FeaturedProjectsSection"
import WhyChooseUsSection from "@/lib/sections/WhyChooseUsSection"
import {
  type FeaturedProjectsData,
  type QuickIntroData,
  type ServicesPreviewData,
  type WhyChooseUsData,
} from "@/lib/constants"

function HomeScreen() {
  const navigate = useNavigate()
  const quickIntroDataFromApi: QuickIntroData | undefined = undefined
  const servicesPreviewDataFromApi: ServicesPreviewData | undefined = undefined
  const featuredProjectsDataFromApi: FeaturedProjectsData | undefined = undefined
  const whyChooseUsDataFromApi: WhyChooseUsData | undefined = undefined

  return (
    <main className="bg-background px-4 py-8 md:px-8">
      <HeroSection onExplorePortfolio={() => navigate({ to: "/about" })} />
      <QuickIntroSection data={quickIntroDataFromApi} />
      <ServicesPreviewSection data={servicesPreviewDataFromApi} />
      <FeaturedProjectsSection data={featuredProjectsDataFromApi} />
      <WhyChooseUsSection data={whyChooseUsDataFromApi} />
    </main>
  )
}

export default HomeScreen
