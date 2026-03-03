import React from "react"
import { Card, CardContent } from "@/components/ui/card"

const ContactUs: React.FC = () => {
  return (
    <main className="bg-background px-4 py-8 md:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <Card>
          <CardContent className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight">Contact Us</h1>
            <p className="text-muted-foreground">
              Reach out to discuss your project requirements, timeline, and
              budget. We respond quickly with practical next steps.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default ContactUs
