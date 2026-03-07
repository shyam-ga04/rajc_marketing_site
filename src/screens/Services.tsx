import { useNavigate } from "@tanstack/react-router"
import type { ComponentType } from "react"
import {
  BadgeCheck,
  Building2,
  CalendarClock,
  ClipboardList,
  DraftingCompass,
  HardHat,
  Hammer,
  Home,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Wallet,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import PageSection from "@/lib/components/PageSection"

interface ServiceItem {
  serviceId: string
  name: string
  description: string
  icon: ComponentType<{ className?: string }>
}

interface HighlightItem {
  title: string
  icon: ComponentType<{ className?: string }>
}

const SERVICES_DATA: ServiceItem[] = [
  {
    serviceId: "home-construction",
    name: "Home Construction",
    description:
      "End-to-end home construction with structural safety, quality execution, and milestone-based project tracking.",
    icon: Home,
  },
  {
    serviceId: "villa-construction",
    name: "Villa Construction",
    description:
      "Premium villa builds designed for modern family living, ventilation, and long-term durability.",
    icon: Building2,
  },
  {
    serviceId: "renovation-remodeling",
    name: "Building Renovation",
    description:
      "Renovation and remodeling services for homes and buildings to improve layout, comfort, and functionality.",
    icon: Hammer,
  },
  {
    serviceId: "interior-design",
    name: "Interior Design",
    description:
      "Practical interior design and fit-outs tailored to your lifestyle, space use, and visual preferences.",
    icon: Paintbrush,
  },
  {
    serviceId: "architectural-planning",
    name: "Architectural Planning",
    description:
      "Plan approvals, concept layouts, and detailed architectural planning aligned with project goals.",
    icon: DraftingCompass,
  },
  {
    serviceId: "turnkey-construction",
    name: "Turnkey Construction",
    description:
      "Single-point responsibility from planning to handover with transparent progress and predictable delivery.",
    icon: ClipboardList,
  },
  {
    serviceId: "structural-consultation",
    name: "Structural Consultation",
    description:
      "Expert structural consultation for load safety, material optimization, and build risk reduction.",
    icon: HardHat,
  },
  {
    serviceId: "house-extension",
    name: "House Extension",
    description:
      "Vertical and horizontal home extensions integrated with existing structure and utility planning.",
    icon: Ruler,
  },
]

const HIGHLIGHTS_DATA: HighlightItem[] = [
  { title: "10+ Years Experience", icon: BadgeCheck },
  { title: "Quality Materials", icon: ShieldCheck },
  { title: "On-Time Delivery", icon: CalendarClock },
  { title: "Transparent Pricing", icon: Wallet },
  { title: "Expert Engineers", icon: HardHat },
]

const PROCESS_STEPS = [
  "Consultation",
  "Planning",
  "Design",
  "Construction",
  "Handover",
] as const

function SectionHeader({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      {description ? <p className="max-w-3xl text-muted-foreground">{description}</p> : null}
    </div>
  )
}

function ServiceCardItem({
  service,
  onViewDetails,
}: {
  service: ServiceItem
  onViewDetails: () => void
}) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col space-y-4 p-5">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10">
          <service.icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold">{service.name}</h3>
        <p className="text-sm leading-6 text-muted-foreground">{service.description}</p>
        <Button type="button" variant="outline" className="mt-auto w-fit" onClick={onViewDetails}>
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}

function HighlightCard({ item }: { item: HighlightItem }) {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-4">
        <item.icon className="h-5 w-5 text-primary" />
        <p className="text-sm font-medium">{item.title}</p>
      </CardContent>
    </Card>
  )
}

function ProcessStepCard({ step, index }: { step: string; index: number }) {
  return (
    <Card className="relative">
      <CardContent className="space-y-2 p-4">
        <Badge variant="outline">Step {index + 1}</Badge>
        <h3 className="text-base font-semibold">{step}</h3>
        <p className="text-sm text-muted-foreground">
          Structured execution with quality checks and client updates at this stage.
        </p>
      </CardContent>
    </Card>
  )
}

function Services() {
  const navigate = useNavigate()

  return (
    <PageSection>
      <Card className="relative overflow-hidden border-0">
        <img
          src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Construction site banner"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
        <CardContent className="relative z-10 space-y-4 px-6 py-12 md:px-10 md:py-16">
          <Badge className="w-fit">Construction Excellence</Badge>
          <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Our Construction Services
          </h1>
          <p className="max-w-2xl text-sm text-white/90 md:text-base">
            We provide complete construction solutions from concept planning to final handover,
            delivering safe structures, durable materials, and timely execution.
          </p>
          <Button type="button" onClick={() => navigate({ to: "/contact" })}>
            Get Consultation
          </Button>
        </CardContent>
      </Card>

      <Separator />

      <section className="space-y-5">
        <SectionHeader
          title="Services Grid"
          description="Explore all key services delivered by our civil engineering and construction team."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES_DATA.map((service) => (
            <ServiceCardItem
              key={service.name}
              service={service}
              onViewDetails={() =>
                navigate({
                  to: "/services/$serviceId",
                  params: { serviceId: service.serviceId },
                })
              }
            />
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-5">
        <SectionHeader title="Service Highlights Section" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {HIGHLIGHTS_DATA.map((item) => (
            <HighlightCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-5">
        <SectionHeader title="Process Section" />
        <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStepCard key={step} step={step} index={index} />
          ))}
        </div>
      </section>

      <Separator />

      <section>
        <Card className="bg-muted/30">
          <CardContent className="space-y-5 p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Planning to build your dream home?
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Talk to our team for project estimation, site planning, design support, and
              execution guidance.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button type="button" onClick={() => navigate({ to: "/contact" })}>
                Get Free Consultation
              </Button>
              <Button type="button" variant="outline" onClick={() => navigate({ to: "/contact" })}>
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </PageSection>
  )
}

export default Services
