import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { SCREEN_TEXT } from "@/lib/constants"

const Projects: React.FC = () => {
  return (
    <main className="bg-background px-4 py-8 md:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <Card>
          <CardContent className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight">
              {SCREEN_TEXT.projectDetails.title}
            </h1>
            <p className="text-muted-foreground">
              {SCREEN_TEXT.projectDetails.description}
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default Projects
