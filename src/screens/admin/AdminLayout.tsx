import { type ReactNode, useEffect, useState } from "react"
import { Link, useNavigate, useRouterState } from "@tanstack/react-router"
import {
  LayoutDashboard,
  FolderKanban,
  Wrench,
  MessageSquare,
  Settings,
  LogOut,
  HardHat,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const NAV_ITEMS = [
  { label: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Projects", href: "/admin/dashboard/projects", icon: FolderKanban },
  { label: "Services", href: "/admin/dashboard/services", icon: Wrench },
  {
    label: "Enquiries",
    href: "/admin/dashboard/enquiries",
    icon: MessageSquare,
  },
  { label: "Settings", href: "/admin/dashboard/settings", icon: Settings },
] as const

interface AdminLayoutProps {
  children: ReactNode
}

function AdminLayout({ children }: AdminLayoutProps) {
  const navigate = useNavigate()
  const state = useRouterState()
  const pathname = state.location.pathname
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    const token = sessionStorage.getItem("adminToken")
    if (!token) {
      navigate({ to: "/admin" })
    } else {
      setAuthorized(true)
    }
  }, [navigate])

  function handleSignOut() {
    sessionStorage.removeItem("adminToken")
    navigate({ to: "/admin" })
  }

  if (!authorized) return null

  const sidebarContent = (
    <>
      <div className="p-5 flex items-center gap-3">
        <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center shrink-0">
          <HardHat className="h-5 w-5 text-primary-foreground" />
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-sm truncate">RAJ Constructions</p>
          <p className="text-xs text-muted-foreground">Admin Panel</p>
        </div>
      </div>
      <Separator />
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>
      <Separator />
      <div className="p-3">
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive"
          onClick={handleSignOut}
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </>
  )

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:w-60 border-r flex-col shrink-0">
        {sidebarContent}
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="absolute left-0 top-0 bottom-0 w-60 bg-background border-r flex flex-col z-50">
            {sidebarContent}
          </aside>
        </div>
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile topbar */}
        <header className="md:hidden flex items-center gap-3 px-4 py-3 border-b shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <span className="font-semibold text-sm">RAJ Constructions Admin</span>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

export default AdminLayout
