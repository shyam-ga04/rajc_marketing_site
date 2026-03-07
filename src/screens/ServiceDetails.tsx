import { Link, useNavigate, useParams } from "@tanstack/react-router"
import { useEffect, useMemo, useState, type ComponentType } from "react"
import {
  BadgeCheck,
  Clock3,
  HardHat,
  Headset,
  Landmark,
  ShieldCheck,
  Wallet,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import NotFoundCard from "@/lib/components/NotFoundCard"
import ServiceIcon from "@/lib/components/icons/ServiceIcon"
import PageSection from "@/lib/components/PageSection"
import { PROJECTS_DETAILS_DATA, SERVICE_DETAILS_DATA } from "@/lib/constants"

type IconCardItem = {
  title: string
  icon: ComponentType<{ className?: string }>
}

type ImageItem = {
  src: string
  alt: string
  label?: string
}

function SectionHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      {description ? <p className="max-w-3xl text-muted-foreground">{description}</p> : null}
    </div>
  )
}

function IconCard({ item }: { item: IconCardItem }) {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-4">
        <item.icon className="h-5 w-5 text-primary" />
        <p className="font-medium">{item.title}</p>
      </CardContent>
    </Card>
  )
}

function ImageGrid({
  images,
  onPreview,
}: {
  images: ImageItem[]
  onPreview: (image: ImageItem) => void
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <button
          key={image.src}
          type="button"
          className="overflow-hidden rounded-xl border text-left"
          onClick={() => onPreview(image)}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-52 w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {image.label ? <p className="px-3 py-2 text-sm text-muted-foreground">{image.label}</p> : null}
        </button>
      ))}
    </div>
  )
}

function ServiceDetails() {
  const navigate = useNavigate()
  const { serviceId } = useParams({ from: "/services/$serviceId" })
  const service = SERVICE_DETAILS_DATA.find((item) => item.id === serviceId)
  const [previewImage, setPreviewImage] = useState<ImageItem | null>(null)
  const [isContentVisible, setIsContentVisible] = useState(false)
  const [formSuccess, setFormSuccess] = useState("")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsContentVisible(false)
    const frameId = window.requestAnimationFrame(() => setIsContentVisible(true))
    return () => window.cancelAnimationFrame(frameId)
  }, [serviceId])

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

  const featureItems: IconCardItem[] = [
    { title: "Custom house design", icon: Landmark },
    { title: "Premium materials", icon: BadgeCheck },
    { title: "Experienced engineers", icon: HardHat },
    { title: "Quality supervision", icon: ShieldCheck },
    { title: "Cost transparency", icon: Wallet },
  ]

  const processSteps = [
    "Consultation",
    "Planning & Design",
    "Budget Estimation",
    "Construction",
    "Final Handover",
  ] as const

  const relatedProjects = PROJECTS_DETAILS_DATA.slice(0, 3)

  const galleryImages: ImageItem[] = [
    {
      src: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Construction work at site",
      label: "Construction Work",
    },
    {
      src: "https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Completed modern home",
      label: "Completed Homes",
    },
    {
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Interior work for residential project",
      label: "Interior Work",
    },
    {
      src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Dining area interior",
      label: "Interior Work",
    },
    {
      src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Completed bedroom interior",
      label: "Completed Homes",
    },
    {
      src: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Ongoing structure and finishing work",
      label: "Construction Work",
    },
  ]

  const whyChooseUs: IconCardItem[] = [
    { title: "Experienced Civil Engineers", icon: HardHat },
    { title: "Transparent Pricing", icon: Wallet },
    { title: "Quality Construction", icon: ShieldCheck },
    { title: "On-time Delivery", icon: Clock3 },
    { title: "Customer Support", icon: Headset },
  ]

  const faqs = [
    {
      q: "How long does construction take?",
      a: "Typical timelines range from 8 to 14 months based on size, approvals, and finish scope.",
    },
    {
      q: "Can I customize the design?",
      a: "Yes, we support layout and finish customizations before execution milestones are locked.",
    },
    {
      q: "Do you provide material?",
      a: "Yes, material procurement and quality tracking are included as per project package.",
    },
    {
      q: "Do you help with approvals?",
      a: "Yes, we assist with planning and documentation required for local authority approvals.",
    },
  ]

  const otherServices = useMemo(
    () => SERVICE_DETAILS_DATA.filter((item) => item.id !== service.id).slice(0, 3),
    [service.id],
  )

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormSuccess("Quote request submitted. Our team will contact you shortly.")
    event.currentTarget.reset()
  }

  return (
    <PageSection maxWidthClassName="max-w-6xl">
      <div
        className={`space-y-6 transition-opacity duration-500 ${
          isContentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Card className="overflow-hidden">
          <img
            src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt={`${service.name} service banner`}
            className="h-72 w-full object-cover md:h-[420px]"
            loading="lazy"
          />
          <CardContent className="space-y-4">
            <Badge variant="secondary" className="w-fit">
              Construction Service
            </Badge>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{service.name}</h1>
            <p className="text-base font-medium text-primary">
              Reliable construction execution with quality and accountability.
            </p>
            <p className="text-muted-foreground">{service.shortDescription}</p>
            <div className="flex flex-wrap gap-2">
              <Button type="button" onClick={() => navigate({ to: "/contact" })}>
                Get Quote
              </Button>
            </div>
          </CardContent>
        </Card>

        <Separator />

        <section className="space-y-4">
          <SectionHeader title="Service Overview" />
          <Card>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{service.fullDescription}</p>
              <p className="text-muted-foreground">
                This service includes planning support, detailed execution, quality controls,
                and progress communication to ensure your project remains cost-aware and on schedule.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeader title="Service Features" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureItems.map((item) => (
              <IconCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeader title="Service Process" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Card key={step}>
                <CardContent className="space-y-2 p-4">
                  <Badge variant="outline">Step {index + 1}</Badge>
                  <p className="font-semibold">{step}</p>
                  <p className="text-sm text-muted-foreground">
                    Stage-wise coordination and updates for better transparency.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeader title="Projects Completed for this Service" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((project) => (
              <Card key={project.id} className="h-full overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <CardContent className="flex h-full flex-col space-y-2 p-4">
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-auto w-fit"
                    onClick={() =>
                      navigate({ to: "/projects/$projectId", params: { projectId: project.id } })
                    }
                  >
                    View project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeader title="Gallery Section" />
          <ImageGrid images={galleryImages} onPreview={setPreviewImage} />
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeader title="Why Choose Us" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {whyChooseUs.map((item) => (
              <IconCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeader title="FAQ Section" />
          <Card>
            <CardContent>
              <Accordion>
                {faqs.map((faq) => (
                  <AccordionItem key={faq.q}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeader title="Contact / Quote Form" />
          <Card>
            <CardContent>
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="quote_name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="quote_name" placeholder="Enter your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="quote_phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input id="quote_phone" placeholder="Enter your phone number" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="quote_email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="quote_email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="quote_message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="quote_message" placeholder="Tell us about your project requirement" />
                  </div>
                </div>
                {formSuccess ? <p className="text-sm text-green-600">{formSuccess}</p> : null}
                <div className="flex flex-wrap gap-3">
                  <Button type="submit">Request Quote</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeader title="Other Services" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((item) => (
              <Card key={item.id} className="h-full">
                <CardContent className="flex h-full flex-col space-y-4 p-5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10">
                    <ServiceIcon name={item.name} />
                  </div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{item.shortDescription}</p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-auto w-fit"
                    onClick={() => navigate({ to: "/services/$serviceId", params: { serviceId: item.id } })}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Dialog open={Boolean(previewImage)} onOpenChange={(open) => !open && setPreviewImage(null)}>
          <DialogContent className="max-w-5xl p-4">
            {previewImage ? (
              <>
                <DialogHeader>
                  <DialogTitle>{previewImage.label ?? "Gallery Preview"}</DialogTitle>
                </DialogHeader>
                <img
                  src={previewImage.src}
                  alt={previewImage.alt}
                  className="mt-4 max-h-[80vh] w-full rounded-lg object-contain"
                />
              </>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </PageSection>
  )
}

export default ServiceDetails
