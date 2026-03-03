import { Link } from "@tanstack/react-router"
import { Card, CardContent } from "@/components/ui/card"
import {
  DEFAULT_FEATURED_PROJECTS_DATA,
  type FeaturedProjectsData,
} from "@/lib/constants"

interface FeaturedProjectsSectionProps {
  data?: Partial<FeaturedProjectsData>
}

function FeaturedProjectsSection({ data }: FeaturedProjectsSectionProps) {
  const projectsData: FeaturedProjectsData = {
    ...DEFAULT_FEATURED_PROJECTS_DATA,
    ...data,
    items: data?.items ?? DEFAULT_FEATURED_PROJECTS_DATA.items,
  }

  return (
    <section className="mx-auto mt-8 w-full max-w-6xl">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {projectsData.title}
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projectsData.items.map((project) => (
          <Card key={project.name} className="overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.imageAlt}
              className="h-56 w-full object-cover"
              loading="lazy"
            />
            <CardContent className="space-y-2">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-sm font-medium text-primary">{project.location}</p>
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <Link
                to="/project-details"
                className="inline-flex text-sm font-medium text-primary hover:underline"
              >
                View project
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjectsSection
