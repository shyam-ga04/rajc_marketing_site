import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("w-full", className)} {...props} />
)

const AccordionItem = React.forwardRef<HTMLDetailsElement, React.ComponentProps<"details">>(
  ({ className, ...props }, ref) => (
    <details ref={ref} className={cn("group border-b", className)} {...props} />
  ),
)
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<HTMLElement, React.ComponentProps<"summary">>(
  ({ className, children, ...props }, ref) => (
    <summary
      ref={ref}
      className={cn(
        "flex cursor-pointer list-none items-center justify-between py-4 text-left text-sm font-medium",
        "[&::-webkit-details-marker]:hidden",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
    </summary>
  ),
)
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("pb-4 text-sm text-muted-foreground", className)} {...props} />
  ),
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
