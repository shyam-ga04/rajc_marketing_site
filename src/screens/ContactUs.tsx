import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import FormField, {
  formControlClassName,
  textAreaControlClassName,
} from "@/lib/components/form/FormField"
import PageSection from "@/lib/components/PageSection"
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
    <PageSection maxWidthClassName="max-w-6xl" sectionClassName="space-y-0">
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
                <FormField id="name" label={formText.nameLabel} error={errors.name}>
                  <input
                    id="name"
                    type="text"
                    value={values.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    placeholder={formText.namePlaceholder}
                    className={formControlClassName}
                    aria-invalid={Boolean(errors.name)}
                  />
                </FormField>

                <FormField id="phone" label={formText.phoneLabel} error={errors.phone}>
                  <input
                    id="phone"
                    type="tel"
                    value={values.phone}
                    onChange={(event) => handleChange("phone", event.target.value)}
                    placeholder={formText.phonePlaceholder}
                    className={formControlClassName}
                    aria-invalid={Boolean(errors.phone)}
                  />
                </FormField>

                <FormField id="email" label={formText.emailLabel} error={errors.email}>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    placeholder={formText.emailPlaceholder}
                    className={formControlClassName}
                    aria-invalid={Boolean(errors.email)}
                  />
                </FormField>

                <FormField id="location" label={formText.locationLabel} error={errors.location}>
                  <input
                    id="location"
                    type="text"
                    value={values.location}
                    onChange={(event) => handleChange("location", event.target.value)}
                    placeholder={formText.locationPlaceholder}
                    className={formControlClassName}
                    aria-invalid={Boolean(errors.location)}
                  />
                </FormField>
              </div>

              <FormField
                id="budget_range"
                label={formText.budgetRangeLabel}
                error={errors.budgetRange}
              >
                <select
                  id="budget_range"
                  value={values.budgetRange}
                  onChange={(event) => handleChange("budgetRange", event.target.value)}
                  className={formControlClassName}
                  aria-invalid={Boolean(errors.budgetRange)}
                >
                  <option value="">{formText.budgetRangePlaceholder}</option>
                  {formText.budgetRangeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField id="message" label={formText.messageLabel} error={errors.message}>
                <textarea
                  id="message"
                  value={values.message}
                  onChange={(event) => handleChange("message", event.target.value)}
                  placeholder={formText.messagePlaceholder}
                  rows={5}
                  className={textAreaControlClassName}
                  aria-invalid={Boolean(errors.message)}
                />
              </FormField>

              {successMessage ? (
                <p className="text-sm text-green-600">{successMessage}</p>
              ) : null}

              <Button type="submit">{formText.submitButton}</Button>
            </form>
          </CardContent>
        </Card>
    </PageSection>
  )
}

export default ContactUs
