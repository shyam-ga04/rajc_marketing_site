import React from "react"
import { Link } from "@tanstack/react-router"
import { Card, CardContent } from "@/components/ui/card"
import PageSection from "@/lib/components/PageSection"
import ServiceIcon from "@/lib/components/icons/ServiceIcon"
import {
  SCREEN_TEXT,
  SERVICE_DETAILS_DATA,
  type ServiceDetailItem,
} from "@/lib/constants"

const Services: React.FC = () => {
  const services: ServiceDetailItem[] = SERVICE_DETAILS_DATA

  return (
    <PageSection>
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
    </PageSection>
  )
}

export default Services
