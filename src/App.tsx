import { Outlet } from '@tanstack/react-router'
import Header from './lib/components/Header'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
