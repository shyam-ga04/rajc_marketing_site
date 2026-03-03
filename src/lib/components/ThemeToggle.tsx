import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/lib/theme"

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <label className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
      <span>{isDark ? "Dark" : "Light"}</span>
      <Switch
        checked={isDark}
        onCheckedChange={() => toggleTheme()}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      />
    </label>
  )
}

export default ThemeToggle
