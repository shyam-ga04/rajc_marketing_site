import React from "react"
import { Link } from "@tanstack/react-router"
import {
  Building2,
  ClipboardList,
  House,
  KeyRound,
  Paintbrush,
  Wrench,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  SCREEN_TEXT,
  SERVICE_DETAILS_DATA,
  type ServiceDetailItem,
} from "@/lib/constants"

function ServiceIcon({ name }: { name: string }) {
  const commonClass = "h-5 w-5 text-primary"

  if (name.includes("Residential")) {
    return <House className={commonClass} aria-hidden="true" />
  }

  if (name.includes("Commercial")) {
    return <Building2 className={commonClass} aria-hidden="true" />
  }

  if (name.includes("Renovation")) {
    return <Wrench className={commonClass} aria-hidden="true" />
  }

  if (name.includes("Turnkey")) {
    return <KeyRound className={commonClass} aria-hidden="true" />
  }

  if (name.includes("Interior")) {
    return <Paintbrush className={commonClass} aria-hidden="true" />
  }

  return <ClipboardList className={commonClass} aria-hidden="true" />
}

const Services: React.FC = () => {
  const services: ServiceDetailItem[] = SERVICE_DETAILS_DATA

  return (
    <main className="bg-background px-4 py-8 md:px-8">
      <section className="mx-auto w-full max-w-6xl space-y-6">
        <Card>
          <CardContent className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {SCREEN_TEXT.services.title}
            </h1>
            <p className="text-muted-foreground">
              {SCREEN_TEXT.services.description}
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.name} className="cursor-pointer">
              <CardContent className="space-y-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
                  <ServiceIcon name={service.name} />
                </div>
                <h2 className="text-lg font-semibold">{service.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {service.shortDescription}
                </p>
                <Link
                  to="/services/$serviceId"
                  params={{ serviceId: service.id }}
                  className="inline-flex text-sm font-medium text-primary hover:underline"
                >
                  View full details
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Services
