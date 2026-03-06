import React from "react"
import { Link, useNavigate, useParams } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PROJECTS_DETAILS_DATA } from "@/lib/constants"

const HOME_INTERIOR_IMAGES = [
  {
    src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Modern living room interior with neutral palette",
  },
  {
    src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Warm bedroom interior with soft lighting",
  },
  {
    src: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Contemporary modular kitchen design",
  },
  {
    src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Dining area with modern furniture",
  },
  {
    src: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Minimalist living hall with wood accents",
  },
] as const

const ProjectDetails: React.FC = () => {
  const navigate = useNavigate()
  const [activeImage, setActiveImage] = React.useState<{
    src: string
    alt: string
  } | null>(null)

  const { projectId } = useParams({ from: "/projects/$projectId" })
  const project = PROJECTS_DETAILS_DATA.find((item) => item.id === projectId)

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  if (!project) {
    return (
      <main className="bg-background px-4 py-8 md:px-8">
        <section className="mx-auto w-full max-w-4xl">
          <Card>
            <CardContent className="space-y-4">
              <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Project not found
              </h1>
              <p className="text-muted-foreground">
                The requested project details are not available.
              </p>
              <Link
                to="/projects"
                className="inline-flex text-sm font-medium text-primary hover:underline"
              >
                Back to projects
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
        <div className="relative">
          <img
            src={project.imageUrl}
            alt={project.imageAlt}
            className="h-72 w-full cursor-pointer rounded-xl object-cover md:h-96"
            loading="lazy"
            onClick={() =>
              setActiveImage({ src: project.imageUrl, alt: project.imageAlt })
            }
          />
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white ${
              project.status === "sold" ? "bg-red-600" : "bg-emerald-600"
            }`}
          >
            {project.status === "sold" ? "Sold" : "Available"}
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {project.name}
          </h1>
          <p className="text-muted-foreground">{project.description}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <Card>
            <CardContent className="space-y-2">
              <h2 className="text-base font-semibold">Square Feet</h2>
              <p className="text-muted-foreground">{project.squareFeet}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-2">
              <h2 className="text-base font-semibold">Location</h2>
              <p className="text-muted-foreground">{project.location}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-2">
              <h2 className="text-base font-semibold">Price</h2>
              <p className="text-muted-foreground">{project.price}</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
            <p className="text-muted-foreground">{project.overview}</p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            Home Interior Gallery
          </h2>
          <div className="overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-4 snap-x snap-mandatory">
              {HOME_INTERIOR_IMAGES.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-56 w-[85%] shrink-0 snap-start cursor-pointer rounded-xl object-cover md:h-64 md:w-[420px]"
                  onClick={() => setActiveImage({ src: image.src, alt: image.alt })}
                />
              ))}
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Project Scope</h2>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              {project.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="flex flex-wrap items-center gap-3">
          <Button type="button" onClick={() => navigate({ to: "/contact" })}>
            Contact Us
          </Button>
          <Link
            to="/projects"
            className="inline-flex text-sm font-medium text-primary hover:underline"
          >
            Back to projects
          </Link>
        </div>
      </section>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveImage(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              setActiveImage(null)
            }
          }}
          aria-label="Close image preview"
        >
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="max-h-[90vh] w-full max-w-5xl rounded-xl object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </main>
  )
}

export default ProjectDetails
