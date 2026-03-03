import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SCREEN_TEXT } from "@/lib/constants"

interface ContactFormValues {
  name: string
  phone: string
  email: string
  location: string
  budgetRange: string
  message: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

const initialFormValues: ContactFormValues = {
  name: "",
  phone: "",
  email: "",
  location: "",
  budgetRange: "",
  message: "",
}

function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const formText = SCREEN_TEXT.contact.form
  const errors: ContactFormErrors = {}
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^[0-9+\-\s()]{10,15}$/

  if (!values.name.trim()) {
    errors.name = formText.nameRequiredError
  } else if (values.name.trim().length < 2) {
    errors.name = formText.nameInvalidError
  }

  if (!values.phone.trim()) {
    errors.phone = formText.phoneRequiredError
  } else if (!phoneRegex.test(values.phone.trim())) {
    errors.phone = formText.phoneInvalidError
  }

  if (!values.email.trim()) {
    errors.email = formText.emailRequiredError
  } else if (!emailRegex.test(values.email.trim())) {
    errors.email = formText.emailInvalidError
  }

  if (!values.location.trim()) {
    errors.location = formText.locationRequiredError
  }

  if (!values.budgetRange) {
    errors.budgetRange = formText.budgetRangeRequiredError
  }

  if (!values.message.trim()) {
    errors.message = formText.messageRequiredError
  } else if (values.message.trim().length < 10) {
    errors.message = formText.messageInvalidError
  }

  return errors
}

function ContactUs() {
  const formText = SCREEN_TEXT.contact.form
  const [values, setValues] = useState<ContactFormValues>(initialFormValues)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [successMessage, setSuccessMessage] = useState("")

  function handleChange<K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K]
  ) {
    setValues((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSuccessMessage("")

    const validationErrors = validateContactForm(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setSuccessMessage(formText.successMessage)
    setValues(initialFormValues)
  }

  return (
    <main className="bg-background px-4 py-8 md:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <Card>
          <CardContent className="space-y-6">
            <h1 className="text-3xl font-semibold tracking-tight">
              {SCREEN_TEXT.contact.title}
            </h1>
            <p className="text-muted-foreground">
              {SCREEN_TEXT.contact.description}
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {formText.nameLabel}
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={values.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    placeholder={formText.namePlaceholder}
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name ? <p className="text-xs text-destructive">{errors.name}</p> : null}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    {formText.phoneLabel}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={values.phone}
                    onChange={(event) => handleChange("phone", event.target.value)}
                    placeholder={formText.phonePlaceholder}
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone ? <p className="text-xs text-destructive">{errors.phone}</p> : null}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {formText.emailLabel}
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    placeholder={formText.emailPlaceholder}
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email ? <p className="text-xs text-destructive">{errors.email}</p> : null}
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium">
                    {formText.locationLabel}
                  </label>
                  <input
                    id="location"
                    type="text"
                    value={values.location}
                    onChange={(event) => handleChange("location", event.target.value)}
                    placeholder={formText.locationPlaceholder}
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    aria-invalid={Boolean(errors.location)}
                  />
                  {errors.location ? (
                    <p className="text-xs text-destructive">{errors.location}</p>
                  ) : null}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="budget_range" className="text-sm font-medium">
                  {formText.budgetRangeLabel}
                </label>
                <select
                  id="budget_range"
                  value={values.budgetRange}
                  onChange={(event) => handleChange("budgetRange", event.target.value)}
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                  aria-invalid={Boolean(errors.budgetRange)}
                >
                  <option value="">{formText.budgetRangePlaceholder}</option>
                  {formText.budgetRangeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.budgetRange ? (
                  <p className="text-xs text-destructive">{errors.budgetRange}</p>
                ) : null}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {formText.messageLabel}
                </label>
                <textarea
                  id="message"
                  value={values.message}
                  onChange={(event) => handleChange("message", event.target.value)}
                  placeholder={formText.messagePlaceholder}
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message ? (
                  <p className="text-xs text-destructive">{errors.message}</p>
                ) : null}
              </div>

              {successMessage ? (
                <p className="text-sm text-green-600">{successMessage}</p>
              ) : null}

              <Button type="submit">{formText.submitButton}</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default ContactUs
