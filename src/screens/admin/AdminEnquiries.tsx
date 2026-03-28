import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Search, Mail, Phone, MapPin, Calendar, Eye } from 'lucide-react'
import AdminLayout from './AdminLayout'

interface Enquiry {
  id: string
  name: string
  phone: string
  email: string
  location: string
  budgetRange: string
  message: string
  date: string
  status: 'new' | 'in-progress' | 'resolved'
}

const INITIAL_ENQUIRIES: Enquiry[] = [
  {
    id: 'e1',
    name: 'Suresh Reddy',
    phone: '+91 98765 12345',
    email: 'suresh.reddy@email.com',
    location: 'Bengaluru',
    budgetRange: '50 Lakhs - 1 Crore',
    message:
      'Looking to build a 3BHK independent house on my 30x40 plot in Whitefield. Need complete turnkey construction with interior works included.',
    date: '2026-03-25',
    status: 'new',
  },
  {
    id: 'e2',
    name: 'Priya Nair',
    phone: '+91 91234 56789',
    email: 'priya.nair@email.com',
    location: 'Mysuru',
    budgetRange: '25 - 50 Lakhs',
    message:
      'Planning a house renovation for a 20-year-old building. Need structural assessment and modern interior redesign.',
    date: '2026-03-23',
    status: 'in-progress',
  },
  {
    id: 'e3',
    name: 'Arun Kumar',
    phone: '+91 87654 32109',
    email: 'arun.kumar@email.com',
    location: 'Hyderabad',
    budgetRange: 'Above 1 Crore',
    message:
      'Interested in building a 4500 sq ft duplex villa. Have the plot, need architectural planning and full construction.',
    date: '2026-03-20',
    status: 'new',
  },
  {
    id: 'e4',
    name: 'Deepa Sharma',
    phone: '+91 99887 65432',
    email: 'deepa.sharma@email.com',
    location: 'Coimbatore',
    budgetRange: '10 - 25 Lakhs',
    message:
      'Need interior design services for a newly constructed 2BHK apartment. Prefer modern minimal style.',
    date: '2026-03-18',
    status: 'resolved',
  },
  {
    id: 'e5',
    name: 'Rajan Pillai',
    phone: '+91 96543 21098',
    email: 'rajan.pillai@email.com',
    location: 'Bengaluru',
    budgetRange: '50 Lakhs - 1 Crore',
    message:
      'Structural consultation needed for an additional floor construction on existing G+1 building.',
    date: '2026-03-15',
    status: 'in-progress',
  },
  {
    id: 'e6',
    name: 'Meena Iyer',
    phone: '+91 94321 09876',
    email: 'meena.iyer@email.com',
    location: 'Chennai',
    budgetRange: 'Below 10 Lakhs',
    message:
      'Looking for house extension services to add one additional room and bathroom to existing home.',
    date: '2026-03-12',
    status: 'resolved',
  },
]

const STATUS_BADGE: Record<Enquiry['status'], 'default' | 'secondary' | 'outline'> = {
  new: 'default',
  'in-progress': 'secondary',
  resolved: 'outline',
}

const STATUS_LABEL: Record<Enquiry['status'], string> = {
  new: 'New',
  'in-progress': 'In Progress',
  resolved: 'Resolved',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([...INITIAL_ENQUIRIES])
  const [search, setSearch] = useState('')
  const [viewEnquiry, setViewEnquiry] = useState<Enquiry | null>(null)

  const filtered = enquiries.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.email.toLowerCase().includes(search.toLowerCase()) ||
      e.location.toLowerCase().includes(search.toLowerCase()),
  )

  const byStatus = (status: Enquiry['status']) => filtered.filter((e) => e.status === status)

  function updateStatus(id: string, status: Enquiry['status']) {
    setEnquiries((prev) => prev.map((e) => (e.id === id ? { ...e, status } : e)))
    setViewEnquiry((prev) => (prev?.id === id ? { ...prev, status } : prev))
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Enquiries</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Contact form submissions from prospective clients.
          </p>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="relative max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 h-9"
              />
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="p-0">
            <Tabs defaultValue="all">
              <div className="px-4 pt-4">
                <TabsList>
                  <TabsTrigger value="all" className="text-xs">
                    All ({filtered.length})
                  </TabsTrigger>
                  <TabsTrigger value="new" className="text-xs">
                    New ({byStatus('new').length})
                  </TabsTrigger>
                  <TabsTrigger value="in-progress" className="text-xs">
                    In Progress ({byStatus('in-progress').length})
                  </TabsTrigger>
                  <TabsTrigger value="resolved" className="text-xs">
                    Resolved ({byStatus('resolved').length})
                  </TabsTrigger>
                </TabsList>
              </div>

              {(
                [
                  { value: 'all', rows: filtered },
                  { value: 'new', rows: byStatus('new') },
                  { value: 'in-progress', rows: byStatus('in-progress') },
                  { value: 'resolved', rows: byStatus('resolved') },
                ] as const
              ).map(({ value, rows }) => (
                <TabsContent key={value} value={value} className="mt-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Budget</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">View</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rows.map((enq) => (
                        <TableRow key={enq.id}>
                          <TableCell className="font-medium">{enq.name}</TableCell>
                          <TableCell>
                            <div className="space-y-0.5">
                              <p className="text-xs flex items-center gap-1 text-muted-foreground">
                                <Phone className="h-3 w-3 shrink-0" />
                                {enq.phone}
                              </p>
                              <p className="text-xs flex items-center gap-1 text-muted-foreground">
                                <Mail className="h-3 w-3 shrink-0" />
                                {enq.email}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                              <MapPin className="h-3.5 w-3.5 shrink-0" />
                              {enq.location}
                            </span>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {enq.budgetRange}
                          </TableCell>
                          <TableCell>
                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="h-3.5 w-3.5 shrink-0" />
                              {formatDate(enq.date)}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Badge variant={STATUS_BADGE[enq.status]} className="text-xs">
                              {STATUS_LABEL[enq.status]}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8"
                              onClick={() => setViewEnquiry(enq)}
                            >
                              <Eye className="h-3.5 w-3.5" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                      {rows.length === 0 && (
                        <TableRow>
                          <TableCell
                            colSpan={7}
                            className="py-10 text-center text-muted-foreground"
                          >
                            No enquiries found.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* View Enquiry Dialog */}
        <Dialog open={!!viewEnquiry} onOpenChange={() => setViewEnquiry(null)}>
          {viewEnquiry && (
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Enquiry — {viewEnquiry.name}</DialogTitle>
              </DialogHeader>
              <Separator />
              <div className="space-y-4 mt-2">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Phone</p>
                    <p className="text-sm font-medium">{viewEnquiry.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Email</p>
                    <p className="text-sm font-medium">{viewEnquiry.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Location</p>
                    <p className="text-sm font-medium">{viewEnquiry.location}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Budget Range</p>
                    <p className="text-sm font-medium">{viewEnquiry.budgetRange}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Date</p>
                    <p className="text-sm font-medium">
                      {new Date(viewEnquiry.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Status</p>
                    <Badge variant={STATUS_BADGE[viewEnquiry.status]} className="text-xs">
                      {STATUS_LABEL[viewEnquiry.status]}
                    </Badge>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Message</p>
                  <p className="text-sm bg-muted rounded-md p-3 leading-relaxed">
                    {viewEnquiry.message}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Update Status</p>
                  <div className="flex gap-2 flex-wrap">
                    {(['new', 'in-progress', 'resolved'] as const).map((s) => (
                      <Button
                        key={s}
                        size="sm"
                        variant={viewEnquiry.status === s ? 'default' : 'outline'}
                        onClick={() => updateStatus(viewEnquiry.id, s)}
                      >
                        {STATUS_LABEL[s]}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </AdminLayout>
  )
}

export default AdminEnquiries
