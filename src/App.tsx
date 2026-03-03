import { Outlet } from '@tanstack/react-router'
import Header from './lib/components/Header'

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
