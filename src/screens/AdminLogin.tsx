import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
    <main className="bg-background px-4 py-10 md:px-8">
      <section className="mx-auto w-full max-w-md">
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
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {text.emailLabel}
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={text.emailPlaceholder}
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email ? (
                  <p className="text-xs text-destructive">{errors.email}</p>
                ) : null}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  {text.passwordLabel}
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder={text.passwordPlaceholder}
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  aria-invalid={Boolean(errors.password)}
                />
                {errors.password ? (
                  <p className="text-xs text-destructive">{errors.password}</p>
                ) : null}
              </div>

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
      </section>
    </main>
  )
}

export default AdminLogin
