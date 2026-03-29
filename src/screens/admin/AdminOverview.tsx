import { Link } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  FolderKanban,
  Wrench,
  MessageSquare,
  TrendingUp,
  MapPin,
  ArrowRight,
  Building2,
} from 'lucide-react'
import { PROJECTS_DETAILS_DATA, SERVICE_DETAILS_DATA } from '@/lib/constants'
import AdminLayout from './AdminLayout'

const MOCK_ENQUIRY_COUNT = 12
const MOCK_PENDING_COUNT = 3

const QUICK_ACTIONS = [
  { label: 'Manage Projects', href: '/admin/dashboard/projects', icon: FolderKanban },
  { label: 'Manage Services', href: '/admin/dashboard/services', icon: Wrench },
  { label: 'View Enquiries', href: '/admin/dashboard/enquiries', icon: MessageSquare },
  { label: 'Company Settings', href: '/admin/dashboard/settings', icon: Building2 },
] as const

function AdminOverview() {
  const soldCount = PROJECTS_DETAILS_DATA.filter((p) => p.status === 'sold').length
  const availableCount = PROJECTS_DETAILS_DATA.filter((p) => p.status === 'available').length

  const stats = [
    {
      label: 'Total Projects',
      value: PROJECTS_DETAILS_DATA.length,
      sub: `${soldCount} sold · ${availableCount} available`,
      icon: FolderKanban,
    },
    {
      label: 'Active Services',
      value: SERVICE_DETAILS_DATA.length,
      sub: 'All services live',
      icon: Wrench,
    },
    {
      label: 'New Enquiries',
      value: MOCK_ENQUIRY_COUNT,
      sub: `${MOCK_PENDING_COUNT} pending review`,
      icon: MessageSquare,
    },
    {
      label: 'Years Active',
      value: '15+',
      sub: 'Since 2010',
      icon: TrendingUp,
    },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Welcome back. Here's a snapshot of RAJ Constructions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="pt-5 pb-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
                  </div>
                  <div className="h-9 w-9 bg-primary/10 rounded-md flex items-center justify-center shrink-0">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Projects */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold">Recent Projects</CardTitle>
                <Link
                  to="/admin/dashboard/projects"
                  className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  View all <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4 space-y-3">
              {PROJECTS_DETAILS_DATA.map((project) => (
                <div key={project.id} className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{project.name}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <MapPin className="h-3 w-3 shrink-0" />
                      {project.location}
                    </p>
                  </div>
                  <Badge
                    variant={project.status === 'sold' ? 'secondary' : 'default'}
                    className="shrink-0 text-xs capitalize"
                  >
                    {project.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold">Quick Actions</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4 space-y-2">
              {QUICK_ACTIONS.map((action) => (
                <Link
                  key={action.href}
                  to={action.href}
                  className="flex items-center justify-between p-3 rounded-md hover:bg-muted transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-primary/10 rounded-md flex items-center justify-center">
                      <action.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{action.label}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminOverview
