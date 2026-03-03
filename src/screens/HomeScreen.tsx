import { useNavigate } from "@tanstack/react-router"
import HeroSection from "@/lib/sections/HeroSection"
import QuickIntroSection from "@/lib/sections/QuickIntroSection"
import ServicesPreviewSection from "@/lib/sections/ServicesPreviewSection"
import {
  type QuickIntroData,
  type ServicesPreviewData,
} from "@/lib/constants"

function HomeScreen() {
  const navigate = useNavigate()
  const quickIntroDataFromApi: QuickIntroData | undefined = undefined
  const servicesPreviewDataFromApi: ServicesPreviewData | undefined = undefined

  return (
    <main className="bg-background px-4 py-8 md:px-8">
      <HeroSection onExplorePortfolio={() => navigate({ to: "/about" })} />
      <QuickIntroSection data={quickIntroDataFromApi} />
      <ServicesPreviewSection data={servicesPreviewDataFromApi} />
    </main>
  )
}

export default HomeScreen
