import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { SERVICE_DETAILS_DATA, type ServiceDetailItem } from '@/lib/constants'
import { Plus, Search, Pencil, Trash2, Wrench } from 'lucide-react'
import FormField, {
  formControlClassName,
  textAreaControlClassName,
} from '@/lib/components/form/FormField'
import AdminLayout from './AdminLayout'

function AdminServices() {
  const [services, setServices] = useState([...SERVICE_DETAILS_DATA])
  const [search, setSearch] = useState('')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingService, setEditingService] = useState<ServiceDetailItem | null>(null)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  const filtered = services.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(search.toLowerCase()),
  )

  function openEdit(service: ServiceDetailItem) {
    setEditingService(service)
    setDialogOpen(true)
  }

  function openAdd() {
    setEditingService(null)
    setDialogOpen(true)
  }

  function handleSave(data: Partial<ServiceDetailItem>) {
    if (editingService) {
      setServices((prev) =>
        prev.map((s) => (s.id === editingService.id ? { ...s, ...data } : s)),
      )
    } else {
      setServices((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          name: '',
          shortDescription: '',
          fullDescription: '',
          scope: [],
          process: [],
          deliverables: [],
          idealFor: '',
          ...data,
        },
      ])
    }
    setDialogOpen(false)
  }

  function handleDelete(id: string) {
    setServices((prev) => prev.filter((s) => s.id !== id))
    setDeleteId(null)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Services</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage the services offered by RAJ Constructions.
            </p>
          </div>
          <Button size="sm" className="gap-2 shrink-0" onClick={openAdd}>
            <Plus className="h-4 w-4" />
            Add Service
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="relative flex-1 max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search services..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 h-9"
                />
              </div>
              <span className="text-sm text-muted-foreground shrink-0">
                {filtered.length} service{filtered.length !== 1 ? 's' : ''}
              </span>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10"></TableHead>
                  <TableHead>Service Name</TableHead>
                  <TableHead>Short Description</TableHead>
                  <TableHead>Ideal For</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell>
                      <div className="h-8 w-8 bg-primary/10 rounded-md flex items-center justify-center">
                        <Wrench className="h-4 w-4 text-primary" />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{service.name}</TableCell>
                    <TableCell className="text-sm text-muted-foreground max-w-xs">
                      <p className="truncate">{service.shortDescription}</p>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground max-w-xs">
                      <p className="truncate">{service.idealFor}</p>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8"
                          onClick={() => openEdit(service)}
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          onClick={() => setDeleteId(service.id)}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {filtered.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="py-10 text-center text-muted-foreground">
                      No services found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Add / Edit Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{editingService ? 'Edit Service' : 'Add Service'}</DialogTitle>
            </DialogHeader>
            <Separator />
            <ServiceForm
              key={editingService?.id ?? 'new'}
              service={editingService}
              onSave={handleSave}
              onCancel={() => setDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>

        {/* Delete Confirm Dialog */}
        <Dialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle>Delete Service</DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground mt-2">
              Are you sure you want to delete this service? This cannot be undone.
            </p>
            <div className="flex justify-end gap-2 mt-5">
              <Button variant="outline" size="sm" onClick={() => setDeleteId(null)}>
                Cancel
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteId && handleDelete(deleteId)}
              >
                Delete
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  )
}

interface ServiceFormProps {
  service: ServiceDetailItem | null
  onSave: (data: Partial<ServiceDetailItem>) => void
  onCancel: () => void
}

function ServiceForm({ service, onSave, onCancel }: ServiceFormProps) {
  const [name, setName] = useState(service?.name ?? '')
  const [shortDescription, setShortDescription] = useState(service?.shortDescription ?? '')
  const [fullDescription, setFullDescription] = useState(service?.fullDescription ?? '')
  const [idealFor, setIdealFor] = useState(service?.idealFor ?? '')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSave({ name, shortDescription, fullDescription, idealFor })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <FormField id="sf-name" label="Service Name">
        <input
          id="sf-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Home Construction"
          className={formControlClassName}
          required
        />
      </FormField>
      <FormField id="sf-short" label="Short Description">
        <textarea
          id="sf-short"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          placeholder="One-line summary shown in listings..."
          className={`${textAreaControlClassName} resize-none`}
          rows={2}
        />
      </FormField>
      <FormField id="sf-full" label="Full Description">
        <textarea
          id="sf-full"
          value={fullDescription}
          onChange={(e) => setFullDescription(e.target.value)}
          placeholder="Detailed description of the service..."
          className={`${textAreaControlClassName} resize-none`}
          rows={4}
        />
      </FormField>
      <FormField id="sf-ideal" label="Ideal For">
        <input
          id="sf-ideal"
          value={idealFor}
          onChange={(e) => setIdealFor(e.target.value)}
          placeholder="e.g. Families planning independent homes"
          className={formControlClassName}
        />
      </FormField>
      <div className="flex justify-end gap-2 pt-1">
        <Button type="button" variant="outline" size="sm" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" size="sm">
          {service ? 'Save Changes' : 'Add Service'}
        </Button>
      </div>
    </form>
  )
}

export default AdminServices
