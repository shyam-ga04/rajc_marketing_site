import { Card, CardContent } from "@/components/ui/card"
import PageSection from "@/lib/components/PageSection"
import StrengthIcon from "@/lib/components/icons/StrengthIcon"
import { SCREEN_TEXT } from "@/lib/constants"

function AboutUs() {
  const about = SCREEN_TEXT.about
  const details = about.details

  return (
    <PageSection>
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
    </PageSection>
  )
}

export default AboutUs
