import React from "react"
import { Link } from "@tanstack/react-router"
import { Card, CardContent } from "@/components/ui/card"
import {
  SCREEN_TEXT,
  SERVICE_DETAILS_DATA,
  type ServiceDetailItem,
} from "@/lib/constants"

function ServiceIcon({ name }: { name: string }) {
  const commonClass = "h-5 w-5 text-primary"

  if (name.includes("Residential")) {
    return (
      <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true">
        <path
          d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (name.includes("Commercial")) {
    return (
      <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true">
        <path
          d="M4 21V5h10v16M14 9h6v12M8 9h2m-2 4h2m-2 4h2m8-4h2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (name.includes("Renovation")) {
    return (
      <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true">
        <path
          d="m14 4 6 6m-7.5-4.5L6 12l-2 5 5-2 6.5-6.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (name.includes("Turnkey")) {
    return (
      <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true">
        <path
          d="M14 7a4 4 0 1 0-3.7 5.5L4 19l1 1 1.5-1.5L8 20l2-2-1.5-1.5L10 15l6.5-6.7A4 4 0 0 0 14 7Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (name.includes("Interior")) {
    return (
      <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true">
        <path
          d="M3 20h18M5 20v-6h14v6M8 14V8h8v6M10 8V5h4v3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true">
      <path
        d="M4 12h8m0 0-3-3m3 3-3 3m4.5-8.5h6.5v11h-6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
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
