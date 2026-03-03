import React from "react"
import { Card, CardContent } from "@/components/ui/card"

const Services: React.FC = () => {
  return (
    <main className="bg-background px-4 py-8 md:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <Card>
          <CardContent className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
            <p className="text-muted-foreground">
              End-to-end construction services including planning, execution,
              site management, and quality control.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default Services
