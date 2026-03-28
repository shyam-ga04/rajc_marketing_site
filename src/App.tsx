import { Outlet, useRouterState } from '@tanstack/react-router'
import Header from './lib/components/Header'
import Footer from './lib/components/Footer'

function App() {
  const state = useRouterState()
  const isAdminDashboard = state.location.pathname.startsWith('/admin/dashboard')

  if (isAdminDashboard) {
    return <Outlet />
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
