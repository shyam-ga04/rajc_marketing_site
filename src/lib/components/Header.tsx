import { Link } from "@tanstack/react-router"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/lib/components/ThemeToggle"
import { cn } from "@/lib/utils"

const navItems = [
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/project-details", label: "Project Details" },
  { to: "/contact", label: "Contact Us" },
] as const

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navClass =
    "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
  const activeNavClass = "bg-accent text-accent-foreground"

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/brandLogo.png" alt="Brand Logo" className="h-10 w-10 rounded-sm" />
          <span className="text-sm font-semibold tracking-wide text-foreground">
            Raj Constructions
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={navClass}
              activeProps={{ className: cn(navClass, activeNavClass) }}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn("block rounded-md px-3 py-2 text-sm text-muted-foreground", navClass)}
                activeProps={{ className: cn(navClass, activeNavClass) }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
