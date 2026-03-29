import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FormField, {
  formControlClassName,
  textAreaControlClassName,
} from "@/lib/components/form/FormField"
import {
  getCompanyDetails,
  createCompanyDetails,
  updateCompanyDetails,
} from "@/lib/api/admin"
import { Save, Building2, BookOpen, ImageIcon, Upload } from "lucide-react"
import AdminLayout from "./AdminLayout"
import { uploadCompanyLogo } from "@/lib/api/admin"
import LocationPicker from "@/lib/components/LocationPicker"

const COMPANY_ID = 1

interface SaveBarProps {
  isSaving: boolean
  saveMessage: string
}

function SaveBar({ isSaving, saveMessage }: SaveBarProps) {
  return (
    <div className="flex items-center justify-between pt-2">
      {saveMessage ? (
        <p
          className={`text-sm ${
            saveMessage.includes("Failed")
              ? "text-destructive"
              : "text-green-600"
          }`}
        >
          {saveMessage}
        </p>
      ) : (
        <span />
      )}
      <Button type="submit" size="sm" disabled={isSaving} className="gap-2">
        <Save className="h-4 w-4" />
        {isSaving ? "Saving..." : "Save Changes"}
      </Button>
    </div>
  )
}

function AdminSettings() {
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState("")
  const [recordExists, setRecordExists] = useState(false)

  // Company Info tab
  const [contactNumber, setContactNumber] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [flatNo, setFlatNo] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [pinCode, setPinCode] = useState("")
  const [companySummary, setCompanySummary] = useState("")
  const [companyFoundedYear, setCompanyFoundedYear] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")

  // Branding tab
  const [logoUrl, setLogoUrl] = useState("")
  const [selectedLogoFile, setSelectedLogoFile] = useState<File | null>(null)
  const [logoPreview, setLogoPreview] = useState("")
  const [isUploadingLogo, setIsUploadingLogo] = useState(false)
  const [logoMessage, setLogoMessage] = useState("")

  // About & Leadership tab
  const [founderName, setFounderName] = useState("")
  const [founderDegrees, setFounderDegrees] = useState("")
  const [founderSummary, setFounderSummary] = useState("")
  const [mission, setMission] = useState("")
  const [vision, setVision] = useState("")
  const [keyMilestones, setKeyMilestones] = useState("")

  useEffect(() => {
    getCompanyDetails(COMPANY_ID).then((res) => {
      if (!res?.data) return
      const d = res.data as Record<string, string>
      console.log({ d })
      setRecordExists(true)
      if (d.contact_number) setContactNumber(d.contact_number)
      if (d.contact_email) setContactEmail(d.contact_email)
      if (d.flat_no) setFlatNo(d.flat_no)
      if (d.address) setAddress(d.address)
      if (d.city) setCity(d.city)
      if (d.country) setCountry(d.country)
      if (d.pin_code) setPinCode(d.pin_code)
      if (d.company_summary) setCompanySummary(d.company_summary)
      if (d.company_founded_year) setCompanyFoundedYear(d.company_founded_year)
      if (d.Latitude) setLatitude(d.Latitude)
      if (d.longitude) setLongitude(d.longitude)
      if (d.founder_name) setFounderName(d.founder_name)
      if (d.founder_degrees) setFounderDegrees(d.founder_degrees)
      if (d.founder_summary) setFounderSummary(d.founder_summary)
      if (d.mission) setMission(d.mission)
      if (d.vision) setVision(d.vision)
      if (d.key_milestones) setKeyMilestones(d.key_milestones)
      if (d.logo) setLogoUrl(d.logo)
    })
  }, [])

  function showFeedback(msg: string) {
    setSaveMessage(msg)
    setTimeout(() => setSaveMessage(""), 3000)
  }

  async function handleSaveCompany(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSaving(true)
    try {
      const payload = {
        contact_number: contactNumber,
        contact_email: contactEmail,
        flat_no: flatNo,
        address,
        city,
        country,
        pin_code: pinCode,
        company_summary: companySummary,
        company_founded_year: companyFoundedYear,
        Latitude: latitude,
        longitude,
      }
      if (recordExists) {
        await updateCompanyDetails(payload, COMPANY_ID)
      } else {
        await createCompanyDetails(payload)
        setRecordExists(true)
      }
      showFeedback("Company details saved successfully.")
    } catch {
      showFeedback("Failed to save. Please try again.")
    } finally {
      setIsSaving(false)
    }
  }

  async function handleSaveAbout(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSaving(true)
    try {
      const payload = {
        founder_name: founderName,
        founder_degrees: founderDegrees,
        founder_summary: founderSummary,
        mission,
        vision,
        key_milestones: keyMilestones,
      }
      if (recordExists) {
        await updateCompanyDetails(payload, COMPANY_ID)
      } else {
        await createCompanyDetails(payload)
        setRecordExists(true)
      }
      showFeedback("About details saved successfully.")
    } catch {
      showFeedback("Failed to save. Please try again.")
    } finally {
      setIsSaving(false)
    }
  }

  function handleLogoFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setSelectedLogoFile(file)
    setLogoPreview(URL.createObjectURL(file))
  }

  async function handleLogoUpload() {
    if (!selectedLogoFile) return
    setIsUploadingLogo(true)
    setLogoMessage("")
    try {
      const res = await uploadCompanyLogo(selectedLogoFile, COMPANY_ID)
      const url = res?.data?.logo ?? logoPreview
      setLogoUrl(url)
      setSelectedLogoFile(null)
      setLogoPreview("")
      setLogoMessage("Logo uploaded successfully.")
    } catch {
      setLogoMessage("Failed to upload logo. Please try again.")
    } finally {
      setIsUploadingLogo(false)
      setTimeout(() => setLogoMessage(""), 3000)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage company information displayed on the website.
          </p>
        </div>

        <Tabs defaultValue="company">
          <TabsList>
            <TabsTrigger value="company">Company Info</TabsTrigger>
            <TabsTrigger value="about">About & Leadership</TabsTrigger>
            <TabsTrigger value="branding">Branding</TabsTrigger>
          </TabsList>

          <TabsContent value="company">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  Company Details
                </CardTitle>
              </CardHeader>
              <Separator />
              <CardContent className="pt-6">
                <form onSubmit={handleSaveCompany} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField id="s-phone" label="Contact Number">
                      <input
                        id="s-phone"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        placeholder="+91 98765 43210"
                        className={formControlClassName}
                      />
                    </FormField>
                    <FormField id="s-email" label="Contact Email">
                      <input
                        id="s-email"
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="info@rajconstructions.com"
                        className={formControlClassName}
                      />
                    </FormField>
                    <FormField id="s-flatno" label="Flat / Unit No">
                      <input
                        id="s-flatno"
                        value={flatNo}
                        onChange={(e) => setFlatNo(e.target.value)}
                        placeholder="Flat / Suite number"
                        className={formControlClassName}
                      />
                    </FormField>
                    <FormField id="s-city" label="City">
                      <input
                        id="s-city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Bengaluru"
                        className={formControlClassName}
                      />
                    </FormField>
                    <FormField id="s-country" label="Country">
                      <input
                        id="s-country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="India"
                        className={formControlClassName}
                      />
                    </FormField>
                    <FormField id="s-pin" label="PIN Code">
                      <input
                        id="s-pin"
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                        placeholder="560001"
                        className={formControlClassName}
                      />
                    </FormField>
                    <FormField id="s-year" label="Company Founded Year">
                      <input
                        id="s-year"
                        value={companyFoundedYear}
                        onChange={(e) => setCompanyFoundedYear(e.target.value)}
                        placeholder="2010"
                        className={formControlClassName}
                      />
                    </FormField>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Office Location</p>
                    <LocationPicker
                      lat={latitude ? parseFloat(latitude) : null}
                      lng={longitude ? parseFloat(longitude) : null}
                      onChange={(lat, lng) => {
                        setLatitude(String(lat))
                        setLongitude(String(lng))
                      }}
                    />
                  </div>
                  <FormField id="s-address" label="Street Address">
                    <textarea
                      id="s-address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Street address / building name"
                      className={`${textAreaControlClassName} resize-none`}
                      rows={2}
                    />
                  </FormField>
                  <FormField id="s-summary" label="Company Summary">
                    <textarea
                      id="s-summary"
                      value={companySummary}
                      onChange={(e) => setCompanySummary(e.target.value)}
                      placeholder="Brief description of the company..."
                      className={`${textAreaControlClassName} resize-none`}
                      rows={3}
                    />
                  </FormField>
                  <SaveBar isSaving={isSaving} saveMessage={saveMessage} />
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  About & Leadership
                </CardTitle>
              </CardHeader>
              <Separator />
              <CardContent className="pt-6">
                <form onSubmit={handleSaveAbout} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField id="s-founder" label="Founder Name">
                      <input
                        id="s-founder"
                        value={founderName}
                        onChange={(e) => setFounderName(e.target.value)}
                        placeholder="Founder name"
                        className={formControlClassName}
                      />
                    </FormField>
                    <FormField
                      id="s-degrees"
                      label="Founder Degrees / Qualifications"
                    >
                      <input
                        id="s-degrees"
                        value={founderDegrees}
                        onChange={(e) => setFounderDegrees(e.target.value)}
                        placeholder="B.E (Civil), MBA"
                        className={formControlClassName}
                      />
                    </FormField>
                  </div>
                  <FormField id="s-founder-bio" label="Founder Bio">
                    <textarea
                      id="s-founder-bio"
                      value={founderSummary}
                      onChange={(e) => setFounderSummary(e.target.value)}
                      placeholder="Brief description of the founder..."
                      className={`${textAreaControlClassName} resize-none`}
                      rows={3}
                    />
                  </FormField>
                  <FormField id="s-mission" label="Mission Statement">
                    <textarea
                      id="s-mission"
                      value={mission}
                      onChange={(e) => setMission(e.target.value)}
                      placeholder="Company mission statement..."
                      className={`${textAreaControlClassName} resize-none`}
                      rows={3}
                    />
                  </FormField>
                  <FormField id="s-vision" label="Vision Statement">
                    <textarea
                      id="s-vision"
                      value={vision}
                      onChange={(e) => setVision(e.target.value)}
                      placeholder="Company vision statement..."
                      className={`${textAreaControlClassName} resize-none`}
                      rows={3}
                    />
                  </FormField>
                  <FormField id="s-milestones" label="Key Milestones">
                    <textarea
                      id="s-milestones"
                      value={keyMilestones}
                      onChange={(e) => setKeyMilestones(e.target.value)}
                      placeholder="Key milestones in company history..."
                      className={`${textAreaControlClassName} resize-none`}
                      rows={4}
                    />
                  </FormField>
                  <SaveBar isSaving={isSaving} saveMessage={saveMessage} />
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="branding">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <ImageIcon className="h-4 w-4 text-primary" />
                  Brand Logo
                </CardTitle>
              </CardHeader>
              <Separator />
              <CardContent className="pt-6">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Current Logo</p>
                    {logoPreview || logoUrl ? (
                      <div className="w-40 h-40 rounded-lg border border-input flex overflow-hidden bg-muted">
                        <img
                          src={logoPreview || logoUrl}
                          alt="Brand logo"
                          className="w-full h-full object-fill"
                        />
                      </div>
                    ) : (
                      <div className="w-40 h-40 rounded-lg border border-dashed border-input flex flex-col items-center justify-center gap-2 bg-muted text-muted-foreground">
                        <ImageIcon className="h-8 w-8" />
                        <span className="text-xs">No logo uploaded</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="logo-upload"
                      className="text-sm font-medium"
                    >
                      Upload New Logo
                    </label>
                    <input
                      id="logo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleLogoFileChange}
                      className={formControlClassName + " pt-2 cursor-pointer"}
                    />
                    <p className="text-xs text-muted-foreground">
                      Accepted formats: PNG, JPG, SVG, WebP
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {logoMessage ? (
                      <p
                        className={`text-sm ${
                          logoMessage.includes("Failed")
                            ? "text-destructive"
                            : "text-green-600"
                        }`}
                      >
                        {logoMessage}
                      </p>
                    ) : (
                      <span />
                    )}
                    <Button
                      onClick={handleLogoUpload}
                      size="sm"
                      disabled={!selectedLogoFile || isUploadingLogo}
                      className="gap-2"
                    >
                      <Upload className="h-4 w-4" />
                      {isUploadingLogo ? "Uploading..." : "Upload Logo"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}

export default AdminSettings
