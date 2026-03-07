import React from "react"
import { Link, useParams } from "@tanstack/react-router"
import { Card, CardContent } from "@/components/ui/card"
import NotFoundCard from "@/lib/components/NotFoundCard"
import PageSection from "@/lib/components/PageSection"
import { SERVICE_DETAILS_DATA } from "@/lib/constants"

const ServiceDetails: React.FC = () => {
  const { serviceId } = useParams({ from: "/services/$serviceId" })
  const service = SERVICE_DETAILS_DATA.find((item) => item.id === serviceId)

  if (!service) {
    return (
      <PageSection maxWidthClassName="max-w-4xl" sectionClassName="space-y-0">
        <NotFoundCard
          title="Service not found"
          description="The requested service details are not available."
          backLink={
            <Link
              to="/services"
              className="inline-flex text-sm font-medium text-primary hover:underline"
            >
              Back to services
            </Link>
          }
        />
      </PageSection>
    )
  }

  return (
    <PageSection maxWidthClassName="max-w-5xl">
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
    </PageSection>
  )
}

export default ServiceDetails
