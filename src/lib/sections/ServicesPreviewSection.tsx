import { Link } from "@tanstack/react-router"
import { Card, CardContent } from "@/components/ui/card"
import {
  DEFAULT_SERVICES_PREVIEW_DATA,
  type ServicesPreviewData,
} from "@/lib/constants"

interface ServicesPreviewSectionProps {
  data?: Partial<ServicesPreviewData>
}

function ServicesPreviewSection({ data }: ServicesPreviewSectionProps) {
  const servicesData: ServicesPreviewData = {
    ...DEFAULT_SERVICES_PREVIEW_DATA,
    ...data,
    items: data?.items ?? DEFAULT_SERVICES_PREVIEW_DATA.items,
  }

  return (
    <section className="mx-auto mt-8 w-full max-w-6xl">
      <Card>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {servicesData.title}
            </h2>
            <p className="text-muted-foreground">{servicesData.description}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.items.map((service) => (
              <article
                key={service.name}
                className="rounded-lg border border-border bg-muted/30 p-4"
              >
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
                >
                  {service.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default ServicesPreviewSection
