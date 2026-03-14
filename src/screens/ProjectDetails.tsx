import { Link, useNavigate, useParams } from "@tanstack/react-router"
import { useEffect, useMemo, useState } from "react"
import {
  Building2,
  Car,
  CheckCircle2,
  Cctv,
  Fence,
  Home,
  MapPin,
  PlugZap,
  School,
  Sparkles,
  Trees,
  Waves,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import NotFoundCard from "@/lib/components/NotFoundCard"
import PageSection from "@/lib/components/PageSection"
import { PROJECTS_DETAILS_DATA } from "@/lib/constants"

type GalleryImage = {
  src: string
  alt: string
  category?: string
}

type Highlight = {
  title: string
  icon: React.ComponentType<{ className?: string }>
}

type Amenity = {
  label: string
  icon: React.ComponentType<{ className?: string }>
}

type PropertySpec = {
  propertyType: string
  bedrooms: string
  bathrooms: string
  plotSize: string
  builtUpArea: string
  facing: string
  parking: string
  floors: string
}

type PricePlan = {
  propertyType: string
  price: string
  plotSize: string
  builtUpArea: string
  bookingAmount: string
}

type StageProgress = {
  id: string
  label: string
  status: "Completed" | "In Progress" | "Upcoming"
  details: string
}

function SectionHeading({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}

function GalleryGrid({
  images,
  onPreview,
}: {
  images: GalleryImage[]
  onPreview: (image: GalleryImage) => void
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <button
          key={image.src}
          type="button"
          className="group overflow-hidden rounded-xl border text-left"
          onClick={() => onPreview(image)}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {image.category ? (
            <div className="px-3 py-2 text-sm text-muted-foreground">
              {image.category}
            </div>
          ) : null}
        </button>
      ))}
    </div>
  )
}

function ProjectDetails() {
  const navigate = useNavigate()
  const { projectId } = useParams({ from: "/projects/$projectId" })
  const project = PROJECTS_DETAILS_DATA.find((item) => item.id === projectId)
  const [previewImage, setPreviewImage] = useState<GalleryImage | null>(null)
  const [enquirySuccess, setEnquirySuccess] = useState("")
  const [isContentVisible, setIsContentVisible] = useState(false)

  if (!project) {
    return (
      <PageSection maxWidthClassName="max-w-4xl" sectionClassName="space-y-0">
        <NotFoundCard
          title="Project not found"
          description="The requested project details are not available."
          backLink={
            <Link
              to="/projects"
              className="inline-flex text-sm font-medium text-primary hover:underline"
            >
              Back to projects
            </Link>
          }
        />
      </PageSection>
    )
  }

  const projectStatus: "Upcoming" | "Under Construction" | "Ready to Move" =
    project.status === "sold" ? "Ready to Move" : "Under Construction"

  const overviewStats = [
    { label: "Total Homes", value: "86 Homes" },
    { label: "Plot Size", value: "1,200 - 2,200 sq ft" },
    { label: "Built-up Area", value: project.squareFeet },
    { label: "Floors", value: "G + 1" },
    { label: "Completion Timeline", value: project.timeline },
  ]

  const highlights: Highlight[] = [
    { title: "3BHK Villas", icon: Home },
    { title: "Covered Parking", icon: Car },
    { title: "Prime Location", icon: MapPin },
    { title: "Premium Construction", icon: Building2 },
    { title: "Nearby School", icon: School },
    { title: "Vastu Compliant", icon: Sparkles },
  ]

  const propertyDetails: PropertySpec[] = [
    {
      propertyType: "Premium Villa",
      bedrooms: "3 BHK",
      bathrooms: "3",
      plotSize: "1800 sq ft",
      builtUpArea: "2400 sq ft",
      facing: "East",
      parking: "2 Cars",
      floors: "G+1",
    },
    {
      propertyType: "Family Villa",
      bedrooms: "4 BHK",
      bathrooms: "4",
      plotSize: "2200 sq ft",
      builtUpArea: "3000 sq ft",
      facing: "North",
      parking: "2 Cars",
      floors: "G+2",
    },
    {
      propertyType: "Compact Villa",
      bedrooms: "3 BHK",
      bathrooms: "3",
      plotSize: "1400 sq ft",
      builtUpArea: "2100 sq ft",
      facing: "West",
      parking: "1 Car",
      floors: "G+1",
    },
  ]

  const floorPlans: GalleryImage[] = [
    {
      src: "https://images.pexels.com/photos/2180796/pexels-photo-2180796.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Ground floor plan drawing",
      category: "Ground Floor",
    },
    {
      src: "https://images.pexels.com/photos/7937657/pexels-photo-7937657.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "First floor plan drawing",
      category: "First Floor",
    },
    {
      src: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Master layout plan",
      category: "Master Plan",
    },
  ]

  const galleryImages: GalleryImage[] = [
    { src: project.imageUrl, alt: project.imageAlt, category: "Exterior" },
    {
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Luxury living room interior",
      category: "Interior",
    },
    {
      src: "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Bedroom interior styling",
      category: "Interior",
    },
    {
      src: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Site progress and structure work",
      category: "Construction Progress",
    },
    {
      src: "https://images.pexels.com/photos/12756787/pexels-photo-12756787.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Finishing works at site",
      category: "Construction Progress",
    },
    {
      src: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Modern kitchen and dining area",
      category: "Interior",
    },
  ]

  const amenities: Amenity[] = [
    { label: "CCTV", icon: Cctv },
    { label: "24/7 Water", icon: Waves },
    { label: "Garden", icon: Trees },
    { label: "Power Backup", icon: PlugZap },
    { label: "Wide Roads", icon: Car },
    { label: "Gated Community", icon: Fence },
  ]

  const specifications = [
    {
      title: "Structure",
      description:
        "RCC framed structure with earthquake-resistant design and high-grade concrete.",
    },
    {
      title: "Flooring",
      description:
        "Premium vitrified tiles in living spaces and anti-skid ceramic tiles in wet areas.",
    },
    {
      title: "Kitchen",
      description:
        "Granite counter, stainless steel sink, and modular-ready utility points.",
    },
    {
      title: "Doors",
      description:
        "Teak wood main door and engineered wood internal doors with quality fittings.",
    },
    {
      title: "Windows",
      description:
        "Powder-coated aluminum sliding windows with mosquito mesh provision.",
    },
    {
      title: "Electrical",
      description:
        "Concealed copper wiring with modular switches, inverter provision, and MCB safety.",
    },
  ]

  const nearbyLocations = [
    { place: "School", distance: "1.2 km" },
    { place: "Hospital", distance: "2.1 km" },
    { place: "Bus Stop", distance: "0.6 km" },
    { place: "Highway", distance: "3.8 km" },
    { place: "Shopping Mall", distance: "4.2 km" },
  ]

  const pricingPlans: PricePlan[] = [
    {
      propertyType: "3BHK Villa",
      price: "INR 1.25 Cr",
      plotSize: "1500 sq ft",
      builtUpArea: "2200 sq ft",
      bookingAmount: "INR 5 Lakhs",
    },
  ]

  const progressStages: StageProgress[] = [
    {
      id: "foundation",
      label: "Foundation",
      status: "Completed",
      details:
        "Footing and basement works completed with quality and soil safety checks.",
    },
    {
      id: "structure",
      label: "Structure",
      status: "Completed",
      details:
        "Main structural frame and slab casting completed for all blocks.",
    },
    {
      id: "plastering",
      label: "Plastering",
      status: "In Progress",
      details: "Internal and external plastering is in progress across phases.",
    },
    {
      id: "finishing",
      label: "Finishing",
      status: "Upcoming",
      details:
        "Flooring, painting, and fittings will begin after plaster curing.",
    },
    {
      id: "completion",
      label: "Completion",
      status: "Upcoming",
      details: "Final inspections, snag checks, and handover documentation.",
    },
  ]

  const relatedProjects = useMemo(
    () =>
      PROJECTS_DETAILS_DATA.filter((item) => item.id !== project.id).slice(
        0,
        4,
      ),
    [project.id],
  )

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsContentVisible(false)
    const frameId = window.requestAnimationFrame(() =>
      setIsContentVisible(true),
    )

    return () => window.cancelAnimationFrame(frameId)
  }, [projectId])

  function handleEnquirySubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setEnquirySuccess("Thank you. Our sales team will contact you shortly.")
    event.currentTarget.reset()
  }

  return (
    <PageSection maxWidthClassName="max-w-6xl">
      <div
        className={`transition-opacity duration-500 ${
          isContentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Card className="overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.imageAlt}
            className="h-72 w-full object-cover md:h-[420px]"
            loading="lazy"
          />
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge
                variant={
                  projectStatus === "Ready to Move" ? "default" : "secondary"
                }
                className="text-xs uppercase"
              >
                {projectStatus}
              </Badge>
              <Badge variant="outline">{project.location}</Badge>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {project.name}
              </h1>
              <p className="text-muted-foreground">
                Contemporary villas engineered for practical luxury and
                long-term durability.
              </p>
              <p className="text-base font-semibold text-primary">
                Price starting from {project.price}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                onClick={() => navigate({ to: "/contact" })}
              >
                Enquire
              </Button>
            </div>
          </CardContent>
        </Card>

        <Separator />

        <section className="space-y-4">
          <SectionHeading
            title="Project Overview"
            description={project.overview}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {overviewStats.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="space-y-1 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="text-sm font-semibold">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeading title="Key Highlights" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.title}>
                <CardContent className="flex items-center gap-3 p-4">
                  <item.icon className="h-5 w-5 text-primary" />
                  <p className="font-medium">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeading title="Property Details" />
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Property Type</TableHead>
                    <TableHead>Bedrooms</TableHead>
                    <TableHead>Bathrooms</TableHead>
                    <TableHead>Plot Size</TableHead>
                    <TableHead>Built-up Area</TableHead>
                    <TableHead>Facing</TableHead>
                    <TableHead>Parking</TableHead>
                    <TableHead>Floors</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {propertyDetails.map((row) => (
                    <TableRow key={`${row.propertyType}-${row.plotSize}`}>
                      <TableCell>{row.propertyType}</TableCell>
                      <TableCell>{row.bedrooms}</TableCell>
                      <TableCell>{row.bathrooms}</TableCell>
                      <TableCell>{row.plotSize}</TableCell>
                      <TableCell>{row.builtUpArea}</TableCell>
                      <TableCell>{row.facing}</TableCell>
                      <TableCell>{row.parking}</TableCell>
                      <TableCell>{row.floors}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeading title="Floor Plans" />
          <GalleryGrid images={floorPlans} onPreview={setPreviewImage} />
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeading title="Project Gallery" />
          <GalleryGrid images={galleryImages} onPreview={setPreviewImage} />
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeading title="Amenities / Features" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity) => (
              <Card key={amenity.label}>
                <CardContent className="flex items-center gap-3 p-4">
                  <amenity.icon className="h-5 w-5 text-primary" />
                  <p className="font-medium">{amenity.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeading title="Construction Specifications" />
          <Card>
            <CardContent>
              <Accordion>
                {specifications.map((spec) => (
                  <AccordionItem key={spec.title}>
                    <AccordionTrigger>{spec.title}</AccordionTrigger>
                    <AccordionContent>{spec.description}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeading title="Location" />
          <Card>
            <CardContent className="space-y-4">
              <div className="overflow-hidden rounded-lg border">
                <iframe
                  title={`${project.name} location`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(project.location)}&output=embed`}
                  className="h-72 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {nearbyLocations.map((item) => (
                  <Card key={item.place} className="shadow-none">
                    <CardContent className="space-y-1 p-4">
                      <p className="text-sm font-semibold">{item.place}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.distance}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeading title="Pricing Section" />
          <div className="grid gap-4 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card key={plan.propertyType}>
                <CardContent className="space-y-3 p-5">
                  <h3 className="text-lg font-semibold">{plan.propertyType}</h3>
                  <p className="text-xl font-semibold text-primary">
                    {plan.price}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Plot Size: {plan.plotSize}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Built-up Area: {plan.builtUpArea}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Booking Amount: {plan.bookingAmount}
                  </p>
                  <Button
                    type="button"
                    className="w-full"
                    onClick={() => navigate({ to: "/contact" })}
                  >
                    Book This Unit
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeading title="Construction Progress" />
          <Card>
            <CardContent className="space-y-4">
              <Tabs defaultValue={progressStages[0].id}>
                <TabsList className="w-full flex-wrap gap-1 bg-transparent p-0">
                  {progressStages.map((stage) => (
                    <TabsTrigger
                      key={stage.id}
                      value={stage.id}
                      className="border border-border"
                    >
                      {stage.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {progressStages.map((stage) => (
                  <TabsContent key={stage.id} value={stage.id}>
                    <div className="rounded-lg border bg-muted/20 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <p className="font-semibold">{stage.label}</p>
                        <Badge variant="outline">{stage.status}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {stage.details}
                      </p>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeading title="Enquiry Form" />
          <Card>
            <CardContent>
              <form className="space-y-4" onSubmit={handleEnquirySubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="enquiry_name"
                      className="text-sm font-medium"
                    >
                      Name
                    </label>
                    <Input
                      id="enquiry_name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="enquiry_phone"
                      className="text-sm font-medium"
                    >
                      Phone
                    </label>
                    <Input
                      id="enquiry_phone"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="enquiry_email"
                      className="text-sm font-medium"
                    >
                      Email
                    </label>
                    <Input
                      id="enquiry_email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label
                      htmlFor="enquiry_message"
                      className="text-sm font-medium"
                    >
                      Message
                    </label>
                    <Textarea
                      id="enquiry_message"
                      placeholder="Tell us about your requirement"
                    />
                  </div>
                </div>
                {enquirySuccess ? (
                  <p className="text-sm text-green-600">{enquirySuccess}</p>
                ) : null}
                <Button type="submit">Submit Enquiry</Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section className="space-y-4">
          <SectionHeading title="Related Projects" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProjects.map((related) => (
              <Card key={related.id} className="h-full overflow-hidden">
                <img
                  src={related.imageUrl}
                  alt={related.imageAlt}
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
                <CardContent className="flex h-full flex-col space-y-2 p-4">
                  <h3 className="font-semibold">{related.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {related.location}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    Starting from {related.price}
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-auto w-full"
                    onClick={() =>
                      navigate({
                        to: "/projects/$projectId",
                        params: { projectId: related.id },
                      })
                    }
                  >
                    View details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Dialog
          open={Boolean(previewImage)}
          onOpenChange={(open) => !open && setPreviewImage(null)}
        >
          <DialogContent className="max-w-5xl p-4">
            {previewImage ? (
              <>
                <DialogHeader>
                  <DialogTitle>
                    {previewImage.category ?? "Image Preview"}
                  </DialogTitle>
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

export default ProjectDetails
