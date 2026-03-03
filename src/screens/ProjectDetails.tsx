import React from "react"
import { Card, CardContent } from "@/components/ui/card"

const ProjectDetails: React.FC = () => {
  return (
    <main className="bg-background px-4 py-8 md:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <Card>
          <CardContent className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight">
              Project Details
            </h1>
            <p className="text-muted-foreground">
              Explore completed and ongoing projects with scope highlights,
              timelines, and delivery outcomes.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default ProjectDetails
