import { Link } from "@tanstack/react-router"
import { Card, CardContent } from "@/components/ui/card"
import {
  PROJECTS_DETAILS_DATA,
  type FeaturedProjectsData,
} from "@/lib/constants"

interface FeaturedProjectsSectionProps {
  data?: Partial<FeaturedProjectsData>
}

function FeaturedProjectsSection({ data }: FeaturedProjectsSectionProps) {
  const fallbackItems = PROJECTS_DETAILS_DATA
  const items = data?.items ?? fallbackItems
  const projectIdByName = new Map(
    PROJECTS_DETAILS_DATA.map((project) => [project.name, project.id])
  )

  const projectsData: FeaturedProjectsData = {
    title: data?.title ?? "Featured Projects",
    ...data,
    items,
  }

  const displayedProjects = projectsData.items.map((project) => ({
    ...project,
    id:
      projectIdByName.get(project.name) ??
      project.name.toLowerCase().replace(/\s+/g, "-"),
  }))

  return (
    <section className="mx-auto mt-8 w-full max-w-6xl">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {projectsData.title}
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {displayedProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
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
                to="/projects/$projectId"
                params={{ projectId: project.id }}
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
