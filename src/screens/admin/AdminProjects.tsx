import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
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
import { PROJECTS_DETAILS_DATA, type DetailedProjectItem } from '@/lib/constants'
import { Plus, Search, Pencil, Trash2, MapPin } from 'lucide-react'
import FormField, {
  formControlClassName,
  textAreaControlClassName,
} from '@/lib/components/form/FormField'
import AdminLayout from './AdminLayout'

function AdminProjects() {
  const [projects, setProjects] = useState([...PROJECTS_DETAILS_DATA])
  const [search, setSearch] = useState('')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<DetailedProjectItem | null>(null)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  const filtered = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase()),
  )

  function openEdit(project: DetailedProjectItem) {
    setEditingProject(project)
    setDialogOpen(true)
  }

  function openAdd() {
    setEditingProject(null)
    setDialogOpen(true)
  }

  function handleSave(data: Partial<DetailedProjectItem>) {
    if (editingProject) {
      setProjects((prev) =>
        prev.map((p) => (p.id === editingProject.id ? { ...p, ...data } : p)),
      )
    } else {
      setProjects((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          imageUrl: '',
          imageAlt: '',
          overview: '',
          scope: [],
          timeline: '',
          clientGoal: '',
          challenge: '',
          solution: '',
          outcome: '',
          name: '',
          location: '',
          price: '',
          squareFeet: '',
          description: '',
          status: 'available',
          ...data,
        },
      ])
    }
    setDialogOpen(false)
  }

  function handleDelete(id: string) {
    setProjects((prev) => prev.filter((p) => p.id !== id))
    setDeleteId(null)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage all construction projects and their listing details.
            </p>
          </div>
          <Button size="sm" className="gap-2 shrink-0" onClick={openAdd}>
            <Plus className="h-4 w-4" />
            Add Project
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="relative flex-1 max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or location..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 h-9"
                />
              </div>
              <span className="text-sm text-muted-foreground shrink-0">
                {filtered.length} project{filtered.length !== 1 ? 's' : ''}
              </span>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Area</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.name}</TableCell>
                    <TableCell>
                      <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        {project.location}
                      </span>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {project.squareFeet}
                    </TableCell>
                    <TableCell className="text-sm">{project.price}</TableCell>
                    <TableCell>
                      <Badge
                        variant={project.status === 'sold' ? 'secondary' : 'default'}
                        className="text-xs capitalize"
                      >
                        {project.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8"
                          onClick={() => openEdit(project)}
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          onClick={() => setDeleteId(project.id)}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {filtered.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="py-10 text-center text-muted-foreground">
                      No projects found.
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
              <DialogTitle>{editingProject ? 'Edit Project' : 'Add Project'}</DialogTitle>
            </DialogHeader>
            <Separator />
            <ProjectForm
              key={editingProject?.id ?? 'new'}
              project={editingProject}
              onSave={handleSave}
              onCancel={() => setDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>

        {/* Delete Confirm Dialog */}
        <Dialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle>Delete Project</DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground mt-2">
              Are you sure you want to delete this project? This cannot be undone.
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

interface ProjectFormProps {
  project: DetailedProjectItem | null
  onSave: (data: Partial<DetailedProjectItem>) => void
  onCancel: () => void
}

function ProjectForm({ project, onSave, onCancel }: ProjectFormProps) {
  const [name, setName] = useState(project?.name ?? '')
  const [location, setLocation] = useState(project?.location ?? '')
  const [price, setPrice] = useState(project?.price ?? '')
  const [squareFeet, setSquareFeet] = useState(project?.squareFeet ?? '')
  const [status, setStatus] = useState<'sold' | 'available'>(project?.status ?? 'available')
  const [description, setDescription] = useState(project?.description ?? '')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSave({ name, location, price, squareFeet, status, description })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="grid grid-cols-2 gap-4">
        <FormField id="pf-name" label="Project Name">
          <input
            id="pf-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Skyline Villa"
            className={formControlClassName}
            required
          />
        </FormField>
        <FormField id="pf-location" label="Location">
          <input
            id="pf-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, State"
            className={formControlClassName}
            required
          />
        </FormField>
        <FormField id="pf-price" label="Price">
          <input
            id="pf-price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="INR 1.5 Cr"
            className={formControlClassName}
          />
        </FormField>
        <FormField id="pf-area" label="Area (sq ft)">
          <input
            id="pf-area"
            value={squareFeet}
            onChange={(e) => setSquareFeet(e.target.value)}
            placeholder="3,500 sq ft"
            className={formControlClassName}
          />
        </FormField>
      </div>
      <FormField id="pf-status" label="Status">
        <select
          id="pf-status"
          value={status}
          onChange={(e) => setStatus(e.target.value as 'sold' | 'available')}
          className={formControlClassName}
        >
          <option value="available">Available</option>
          <option value="sold">Sold</option>
        </select>
      </FormField>
      <FormField id="pf-desc" label="Short Description">
        <textarea
          id="pf-desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Brief description of the project..."
          className={`${textAreaControlClassName} resize-none`}
          rows={3}
        />
      </FormField>
      <div className="flex justify-end gap-2 pt-1">
        <Button type="button" variant="outline" size="sm" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" size="sm">
          {project ? 'Save Changes' : 'Add Project'}
        </Button>
      </div>
    </form>
  )
}

export default AdminProjects
