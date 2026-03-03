import { Button } from "@/components/ui/button"
import { useTheme } from "@/lib/theme"

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="text-foreground hover:bg-accent"
    >
      {isDark ? "Light" : "Dark"}
    </Button>
  )
}

export default ThemeToggle
