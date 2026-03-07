import React from "react"
import { Link } from "@tanstack/react-router"
import { Card, CardContent } from "@/components/ui/card"
import PageSection from "@/lib/components/PageSection"
import { PROJECTS_DETAILS_DATA, SCREEN_TEXT } from "@/lib/constants"

const Projects: React.FC = () => {
  const projects = PROJECTS_DETAILS_DATA.slice(0, 4)

  return (
    <PageSection>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {SCREEN_TEXT.projectDetails.title}
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            {SCREEN_TEXT.projectDetails.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.imageAlt}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <CardContent className="space-y-2">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p className="text-sm font-medium text-primary">
                  {project.location}
                </p>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <Link
                  to="/projects/$projectId"
                  params={{ projectId: project.id }}
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

export default Projects
