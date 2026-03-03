import { Card, CardContent } from "@/components/ui/card"
import { DEFAULT_QUICK_INTRO_DATA, type QuickIntroData } from "@/lib/constants"

interface QuickIntroSectionProps {
  data?: Partial<QuickIntroData>
}

function QuickIntroSection({ data }: QuickIntroSectionProps) {
  const introData: QuickIntroData = {
    ...DEFAULT_QUICK_INTRO_DATA,
    ...data,
    introLines: data?.introLines ?? DEFAULT_QUICK_INTRO_DATA.introLines,
  }

  return (
    <section className="mx-auto mt-8 w-full max-w-6xl">
      <Card>
        <CardContent className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {introData.introTitle}
          </h2>

          <div className="space-y-3 text-muted-foreground">
            {introData.introLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-muted/40 p-4">
              <p className="text-sm text-muted-foreground">{introData.yearsExperienceLabel}</p>
              <p className="mt-1 text-2xl font-semibold">{introData.yearsExperienceValue}</p>
            </div>

            <div className="rounded-lg border border-border bg-muted/40 p-4">
              <p className="text-sm text-muted-foreground">{introData.projectTypesLabel}</p>
              <p className="mt-1 font-medium">{introData.projectTypesValue}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default QuickIntroSection
