import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface NotFoundCardProps {
  title: string
  description: string
  backLink: ReactNode
}

function NotFoundCard({
  title,
  description,
  backLink,
}: NotFoundCardProps) {
  return (
    <Card>
      <CardContent className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
        {backLink}
      </CardContent>
    </Card>
  )
}

export default NotFoundCard
