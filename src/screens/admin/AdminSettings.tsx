import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FormField, {
  formControlClassName,
  textAreaControlClassName,
} from "@/lib/components/form/FormField"
import { getCompanyDetails, updateCompanyDetails } from "@/lib/api/admin"
import { DEFAULT_FOOTER_DATA, DEFAULT_ABOUT_DETAIL_DATA } from "@/lib/constants"
import { Save, Building2, BookOpen } from "lucide-react"
import AdminLayout from "./AdminLayout"

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

  // Company Info tab
  const [companyName, setCompanyName] = useState(
    DEFAULT_FOOTER_DATA.companyName,
  )
  const [tagline, setTagline] = useState(
    "We build spaces that hold people, purpose, and possibility.",
  )
  const [address, setAddress] = useState(DEFAULT_FOOTER_DATA.address)
  const [phone, setPhone] = useState(DEFAULT_FOOTER_DATA.phone)
  const [whatsapp, setWhatsapp] = useState(DEFAULT_FOOTER_DATA.phone)
  const [email, setEmail] = useState(DEFAULT_FOOTER_DATA.email)
  const [website, setWebsite] = useState("www.rajconstructions.com")

  // About & Leadership tab
  const [yearsExperience, setYearsExperience] = useState(
    DEFAULT_ABOUT_DETAIL_DATA.companyIntroduction.yearsInBusinessValue,
  )
  const [mission, setMission] = useState(
    DEFAULT_ABOUT_DETAIL_DATA.missionVision.mission,
  )
  const [vision, setVision] = useState(
    DEFAULT_ABOUT_DETAIL_DATA.missionVision.vision,
  )
  const [founderName, setFounderName] = useState(
    DEFAULT_ABOUT_DETAIL_DATA.leadership.name,
  )
  const [founderRole, setFounderRole] = useState(
    DEFAULT_ABOUT_DETAIL_DATA.leadership.role,
  )

  useEffect(() => {
    getCompanyDetails(COMPANY_ID).then((res) => {
      if (!res?.data) return
      const d = res.data as Record<string, string>
      if (d.companyName) setCompanyName(d.companyName)
      if (d.address) setAddress(d.address)
      if (d.phone) setPhone(d.phone)
      if (d.whatsapp) setWhatsapp(d.whatsapp)
      if (d.email) setEmail(d.email)
      if (d.website) setWebsite(d.website)
      if (d.tagline) setTagline(d.tagline)
      if (d.yearsExperience) setYearsExperience(d.yearsExperience)
      if (d.mission) setMission(d.mission)
      if (d.vision) setVision(d.vision)
      if (d.founderName) setFounderName(d.founderName)
      if (d.founderRole) setFounderRole(d.founderRole)
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
      await updateCompanyDetails(
        { companyName, tagline, address, phone, whatsapp, email, website },
        COMPANY_ID,
      )
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
      await updateCompanyDetails(
        { yearsExperience, mission, vision, founderName, founderRole },
        COMPANY_ID,
      )
      showFeedback("About details saved successfully.")
    } catch {
      showFeedback("Failed to save. Please try again.")
    } finally {
      setIsSaving(false)
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
                    <FormField id="s-cname" label="Company Name">
                      <input
                        id="s-cname"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="RAJ Constructions"
                        className={formControlClassName}
                      />
                    </FormField>
                    <FormField id="s-website" label="Website">
                      <input
                        id="s-website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="www.rajconstructions.com"
                        className={formControlClassName}
                      />
                    </FormField>
                    <FormField id="s-phone" label="Phone Number">
                      <input
                        id="s-phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className={formControlClassName}
                      />
                    </FormField>
                    <FormField id="s-whatsapp" label="WhatsApp Number">
                      <input
                        id="s-whatsapp"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="+91 98765 43210"
                        className={formControlClassName}
                      />
                    </FormField>
                    <FormField id="s-email" label="Email Address">
                      <input
                        id="s-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="info@rajconstructions.com"
                        className={formControlClassName}
                      />
                    </FormField>
                  </div>
                  <FormField id="s-tagline" label="Tagline">
                    <input
                      id="s-tagline"
                      value={tagline}
                      onChange={(e) => setTagline(e.target.value)}
                      placeholder="Company tagline shown on homepage"
                      className={formControlClassName}
                    />
                  </FormField>
                  <FormField id="s-address" label="Office Address">
                    <textarea
                      id="s-address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Full office address"
                      className={`${textAreaControlClassName} resize-none`}
                      rows={2}
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
                  <FormField id="s-years" label="Years of Experience">
                    <input
                      id="s-years"
                      value={yearsExperience}
                      onChange={(e) => setYearsExperience(e.target.value)}
                      placeholder="15+ years of execution experience"
                      className={formControlClassName}
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
                    <FormField id="s-role" label="Founder Role">
                      <input
                        id="s-role"
                        value={founderRole}
                        onChange={(e) => setFounderRole(e.target.value)}
                        placeholder="Founder & Managing Director"
                        className={formControlClassName}
                      />
                    </FormField>
                  </div>
                  <SaveBar isSaving={isSaving} saveMessage={saveMessage} />
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}

export default AdminSettings
