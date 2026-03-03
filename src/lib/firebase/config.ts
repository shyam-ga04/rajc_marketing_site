export interface FirebaseWebConfig {
  apiKey: string
  authDomain: string
  projectId: string
}

// Dummy config. Replace with real Firebase project values before production.
export const firebaseConfig: FirebaseWebConfig = {
  apiKey: "REPLACE_WITH_FIREBASE_API_KEY",
  authDomain: "REPLACE_WITH_FIREBASE_AUTH_DOMAIN",
  projectId: "REPLACE_WITH_FIREBASE_PROJECT_ID",
}

export function isFirebaseConfigReady() {
  return !Object.values(firebaseConfig).some((value) => value.startsWith("REPLACE_WITH_"))
}
