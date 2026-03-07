import { BadgeCheck, Eye, HeartPulse, ShieldCheck } from "lucide-react"

interface StrengthIconProps {
  item: string
}

function StrengthIcon({ item }: StrengthIconProps) {
  if (item === "Safety") {
    return <ShieldCheck className="h-5 w-5" />
  }

  if (item === "Quality") {
    return <BadgeCheck className="h-5 w-5" />
  }

  if (item === "Transparency") {
    return <Eye className="h-5 w-5" />
  }

  return <HeartPulse className="h-5 w-5" />
}

export default StrengthIcon
