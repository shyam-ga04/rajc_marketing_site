import {
  Building2,
  ClipboardList,
  House,
  KeyRound,
  Paintbrush,
  Wrench,
} from "lucide-react"

interface ServiceIconProps {
  name: string
}

function ServiceIcon({ name }: ServiceIconProps) {
  const commonClass = "h-5 w-5 text-primary"

  if (name.includes("Residential")) {
    return <House className={commonClass} aria-hidden="true" />
  }

  if (name.includes("Commercial")) {
    return <Building2 className={commonClass} aria-hidden="true" />
  }

  if (name.includes("Renovation")) {
    return <Wrench className={commonClass} aria-hidden="true" />
  }

  if (name.includes("Turnkey")) {
    return <KeyRound className={commonClass} aria-hidden="true" />
  }

  if (name.includes("Interior")) {
    return <Paintbrush className={commonClass} aria-hidden="true" />
  }

  return <ClipboardList className={commonClass} aria-hidden="true" />
}

export default ServiceIcon
