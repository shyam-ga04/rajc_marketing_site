import { firebaseConfig, isFirebaseConfigReady } from "@/lib/firebase/config"

interface FirebaseSignInResponse {
  localId: string
  email: string
  idToken: string
  refreshToken: string
  expiresIn: string
}

interface FirebaseApiError {
  error?: {
    message?: string
  }
}

function mapFirebaseError(errorCode?: string) {
  switch (errorCode) {
    case "INVALID_LOGIN_CREDENTIALS":
    case "INVALID_PASSWORD":
    case "EMAIL_NOT_FOUND":
      return "Invalid email or password."
    case "TOO_MANY_ATTEMPTS_TRY_LATER":
      return "Too many failed attempts. Please try again later."
    case "USER_DISABLED":
      return "This account has been disabled."
    default:
      return "Unable to sign in right now. Please try again."
  }
}

export async function signInWithEmailPassword(email: string, password: string) {
  if (!isFirebaseConfigReady()) {
    throw new Error(
      "Firebase is not configured. Update src/lib/firebase/config.ts with valid project values."
    )
  }

  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    }
  )

  if (!response.ok) {
    const errorData = (await response.json()) as FirebaseApiError
    throw new Error(mapFirebaseError(errorData?.error?.message))
  }

  const data = (await response.json()) as FirebaseSignInResponse
  return data
}
