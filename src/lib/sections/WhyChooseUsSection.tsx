import { Card, CardContent } from "@/components/ui/card"
import {
  Boxes,
  Clock3,
  Eye,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react"
import {
  DEFAULT_WHY_CHOOSE_US_DATA,
  type WhyChooseUsData,
  type WhyChooseUsIconKey,
} from "@/lib/constants"

interface WhyChooseUsSectionProps {
  data?: Partial<WhyChooseUsData>
}

function WhyChooseUsIcon({ icon }: { icon: WhyChooseUsIconKey }) {
  if (icon === "experience") {
    return <Clock3 className="h-5 w-5" />
  }

  if (icon === "qualityMaterials") {
    return <Boxes className="h-5 w-5" />
  }

  if (icon === "onTimeDelivery") {
    return <Truck className="h-5 w-5" />
  }

  if (icon === "safetyFirst") {
    return <ShieldCheck className="h-5 w-5" />
  }

  if (icon === "skilledTeam") {
    return <Users className="h-5 w-5" />
  }

  return <Eye className="h-5 w-5" />
}

function WhyChooseUsSection({ data }: WhyChooseUsSectionProps) {
  const whyChooseUsData: WhyChooseUsData = {
    ...DEFAULT_WHY_CHOOSE_US_DATA,
    ...data,
    items: data?.items ?? DEFAULT_WHY_CHOOSE_US_DATA.items,
  }

  return (
    <section className="mx-auto mt-8 w-full max-w-6xl">
      <Card>
        <CardContent className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {whyChooseUsData.title}
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {whyChooseUsData.items.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-border bg-muted/30 p-4"
              >
                <div className="mb-3 inline-flex rounded-md bg-primary/10 p-2 text-primary">
                  <WhyChooseUsIcon icon={item.icon} />
                </div>
                <p className="font-medium">{item.title}</p>
              </article>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default WhyChooseUsSection
