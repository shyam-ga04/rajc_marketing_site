import { Card, CardContent } from "@/components/ui/card"
import { SCREEN_TEXT } from "@/lib/constants"

function StrengthIcon({ item }: { item: string }) {
  if (item === "Safety") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 4 7v6c0 5 3.6 7.6 8 8 4.4-.4 8-3 8-8V7l-8-4Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (item === "Quality") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" />
        <path d="m9.5 12 1.6 1.6 3.4-3.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (item === "Transparency") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 13h4l2 3 4-8 2 5h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function AboutUs() {
  const about = SCREEN_TEXT.about
  const details = about.details

  return (
    <main className="bg-background px-4 py-8 md:px-8">
      <section className="mx-auto w-full max-w-6xl space-y-6">
        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              {about.title}
            </h2>
            <p className="text-muted-foreground">
              {details.companyIntroduction.whoWeAre}
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <p className="text-sm text-muted-foreground">
                  {details.companyIntroduction.yearsInBusinessLabel}
                </p>
                <p className="mt-1 font-medium">
                  {details.companyIntroduction.yearsInBusinessValue}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <p className="text-sm text-muted-foreground">
                  {details.companyIntroduction.projectTypesLabel}
                </p>
                <p className="mt-1 font-medium">
                  {details.companyIntroduction.projectTypesValue}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              {details.missionVision.heading}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-lg border border-border bg-muted/30 p-4">
                <h3 className="text-lg font-semibold">
                  {details.missionVision.missionTitle}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {details.missionVision.mission}
                </p>
              </article>
              <article className="rounded-lg border border-border bg-muted/30 p-4">
                <h3 className="text-lg font-semibold">
                  {details.missionVision.visionTitle}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {details.missionVision.vision}
                </p>
              </article>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              {details.companyJourney.heading}
            </h2>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                {details.companyJourney.startedTitle}
              </h3>
              <p className="text-muted-foreground">
                {details.companyJourney.startedDescription}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                {details.companyJourney.milestonesTitle}
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                {details.companyJourney.milestones.map((milestone) => (
                  <li key={milestone}>{milestone}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              {details.leadership.heading}
            </h2>
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="text-xl font-semibold">{details.leadership.name}</p>
              <p className="text-sm font-medium text-primary">
                {details.leadership.role}
              </p>
              <p className="mt-2 text-muted-foreground">
                {details.leadership.description}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              {details.strengthsValues.heading}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {details.strengthsValues.items.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-border bg-muted/30 p-4 text-center"
                >
                  <div className="mx-auto mb-2 inline-flex rounded-md bg-primary/10 p-2 text-primary">
                    <StrengthIcon item={item} />
                  </div>
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              {details.companyLocation.heading}
            </h2>
            <p className="text-muted-foreground">{details.companyLocation.address}</p>
            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                title="RAJ Constructions Location"
                src={details.companyLocation.mapEmbedUrl}
                className="h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default AboutUs
