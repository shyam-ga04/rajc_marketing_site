import { Card, CardContent } from "@/components/ui/card"
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
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (icon === "qualityMaterials") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 10 12 5l8 5-8 5-8-5Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15v4" strokeLinecap="round" />
        <path d="M7 12.5v3.5l5 3 5-3v-3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (icon === "onTimeDelivery") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 7h11v8H3z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 10h3l3 3v2h-6z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    )
  }

  if (icon === "safetyFirst") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 4 7v6c0 5 3.6 7.6 8 8 4.4-.4 8-3 8-8V7l-8-4Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8v5" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (icon === "skilledTeam") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="8" cy="9" r="2.5" />
        <circle cx="16" cy="9" r="2.5" />
        <path d="M4 18c.6-2.2 2.3-3.5 4-3.5s3.4 1.3 4 3.5" strokeLinecap="round" />
        <path d="M12 18c.6-2.2 2.3-3.5 4-3.5s3.4 1.3 4 3.5" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3 4 7v6c0 5 3.6 7.6 8 8 4.4-.4 8-3 8-8V7l-8-4Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
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
