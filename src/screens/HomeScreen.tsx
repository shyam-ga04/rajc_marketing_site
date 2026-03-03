import { useNavigate } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

function HomeScreen() {
  const navigate = useNavigate()

  return (
    <main className="bg-background px-4 py-8 md:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <Card className="relative min-h-[520px] overflow-hidden border-border bg-card text-card-foreground">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/brandLogo.png')" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/65"
            aria-hidden="true"
          />
          <CardContent className="relative z-10 flex min-h-[520px] items-center">
            <div className="max-w-3xl space-y-6">
              <p className="w-fit rounded-full border border-border/80 bg-muted/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Raj Constructions
              </p>
              <blockquote className="space-y-4">
                <p className="text-3xl font-semibold leading-tight md:text-5xl">
                  "We build spaces that hold people, purpose, and possibility."
                </p>
                <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                  From concept to completion, our team delivers durable,
                  human-first projects designed to last.
                </p>
              </blockquote>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border bg-background text-foreground hover:bg-accent"
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
