import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface PageSectionProps {
  children: ReactNode
  sectionChildren?: ReactNode
  maxWidthClassName?: string
  mainClassName?: string
  sectionClassName?: string
}

function PageSection({
  children,
  sectionChildren,
  maxWidthClassName = "max-w-6xl",
  mainClassName,
  sectionClassName,
}: PageSectionProps) {
  return (
    <main className={cn("bg-background px-4 py-8 md:px-8", mainClassName)}>
      <section
        className={cn(
          "mx-auto w-full space-y-6",
          maxWidthClassName,
          sectionClassName,
        )}
      >
        {children}
        {sectionChildren}
      </section>
    </main>
  )
}

export default PageSection
