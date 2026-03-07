import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FormField, { formControlClassName } from "@/lib/components/form/FormField"
import PageSection from "@/lib/components/PageSection"
import { SCREEN_TEXT } from "@/lib/constants"
import { signInWithEmailPassword } from "@/lib/firebase/auth"

interface FormErrors {
  email?: string
  password?: string
}

function validateForm(email: string, password: string) {
  const text = SCREEN_TEXT.adminLogin
  const errors: FormErrors = {}
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!email.trim()) {
    errors.email = text.emailRequiredError
  } else if (!emailRegex.test(email.trim())) {
    errors.email = text.emailInvalidError
  }

  if (!password) {
    errors.password = text.passwordRequiredError
  } else if (password.length < 6) {
    errors.password = text.passwordMinLengthError
  }

  return errors
}

function AdminLogin() {
  const text = SCREEN_TEXT.adminLogin
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverError, setServerError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setServerError("")
    setSuccessMessage("")

    const validationErrors = validateForm(email, password)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    try {
      setIsSubmitting(true)
      const result = await signInWithEmailPassword(email.trim(), password)
      setSuccessMessage(`${text.signedInPrefix} ${result.email}`)
      setPassword("")
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : text.unknownError,
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageSection
      maxWidthClassName="max-w-md"
      mainClassName="bg-background px-4 py-10 md:px-8"
      sectionClassName="space-y-0"
    >
        <Card className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('/brandLogo.png')" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-background/90"
            aria-hidden="true"
          />
          <CardContent className="relative z-10 space-y-6">
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold tracking-tight">
                {text.title}
              </h1>
              <p className="text-sm text-muted-foreground">
                {text.subtitle}
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <FormField id="email" label={text.emailLabel} error={errors.email}>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={text.emailPlaceholder}
                  className={formControlClassName}
                  aria-invalid={Boolean(errors.email)}
                />
              </FormField>

              <FormField id="password" label={text.passwordLabel} error={errors.password}>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder={text.passwordPlaceholder}
                  className={formControlClassName}
                  aria-invalid={Boolean(errors.password)}
                />
              </FormField>

              {serverError ? (
                <p className="text-sm text-destructive">{serverError}</p>
              ) : null}
              {successMessage ? (
                <p className="text-sm text-green-600">{successMessage}</p>
              ) : null}

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? text.signingInButton : text.signInButton}
              </Button>
            </form>
          </CardContent>
        </Card>
    </PageSection>
  )
}

export default AdminLogin
