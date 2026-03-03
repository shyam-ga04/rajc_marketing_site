import React from "react"
import { useNavigate } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

function HomeScreen() {
  const navigate = useNavigate()

  return (
    <main className="bg-slate-100 px-4 py-8 md:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <Card className="relative min-h-[520px] overflow-hidden border-slate-200 bg-slate-900 text-slate-100">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/brandLogo.png')" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/65"
            aria-hidden="true"
          />
          <CardContent className="relative z-10 flex min-h-[520px] items-center">
            <div className="max-w-3xl space-y-6">
              <p className="w-fit rounded-full border border-slate-200/30 bg-slate-100/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                Raj Constructions
              </p>
              <blockquote className="space-y-4">
                <p className="text-3xl font-semibold leading-tight md:text-5xl">
                  "We build spaces that hold people, purpose, and possibility."
                </p>
                <p className="max-w-2xl text-base text-slate-300 md:text-lg">
                  From concept to completion, our team delivers durable,
                  human-first projects designed to last.
                </p>
              </blockquote>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-slate-900 hover:bg-slate-200"
                  onClick={() => navigate({ to: "/about" })}
                >
                  Explore Portfolio
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default HomeScreen
