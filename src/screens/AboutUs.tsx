import React from "react"
import { Card, CardContent } from "@/components/ui/card"

const AboutUs: React.FC = () => {
  return (
    <main className="bg-background px-4 py-8 md:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <Card>
          <CardContent className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight">About Us</h1>
            <p className="text-muted-foreground">
              We are a construction team focused on delivering durable,
              human-centered spaces with quality and accountability at every
              phase.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default AboutUs
