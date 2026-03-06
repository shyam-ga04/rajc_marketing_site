import React from "react"
import { Link, useParams } from "@tanstack/react-router"
import { Card, CardContent } from "@/components/ui/card"
import { SERVICE_DETAILS_DATA } from "@/lib/constants"

const ServiceDetails: React.FC = () => {
  const { serviceId } = useParams({ from: "/services/$serviceId" })
  const service = SERVICE_DETAILS_DATA.find((item) => item.id === serviceId)

  if (!service) {
    return (
      <main className="bg-background px-4 py-8 md:px-8">
        <section className="mx-auto w-full max-w-4xl">
          <Card>
            <CardContent className="space-y-4">
              <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Service not found
              </h1>
              <p className="text-muted-foreground">
                The requested service details are not available.
              </p>
              <Link
                to="/services"
                className="inline-flex text-sm font-medium text-primary hover:underline"
              >
                Back to services
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>
    )
  }

  return (
    <main className="bg-background px-4 py-8 md:px-8">
      <section className="mx-auto w-full max-w-5xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {service.name}
          </h1>
          <p className="text-muted-foreground">{service.shortDescription}</p>
        </div>

        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              Full Explanation
            </h2>
            <p className="text-muted-foreground">{service.fullDescription}</p>
          </CardContent>
        </Card>

        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">Scope</h2>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                {service.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">Process</h2>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                {service.process.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              Deliverables
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Ideal For</h2>
            <p className="text-muted-foreground">{service.idealFor}</p>
          </CardContent>
        </Card>

        <Link
          to="/services"
          className="inline-flex text-sm font-medium text-primary hover:underline"
        >
          Back to services
        </Link>
      </section>
    </main>
  )
}

export default ServiceDetails
