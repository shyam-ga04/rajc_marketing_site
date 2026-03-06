import { RootRoute, Route, Router } from "@tanstack/react-router"
import App from "./App"
import HomeScreen from "./screens/HomeScreen"
import AboutUs from "./screens/AboutUs"
import Services from "./screens/Services"
import Projects from "./screens/Projects"
import ContactUs from "./screens/ContactUs"
import AdminLogin from "./screens/AdminLogin"

const rootRoute = new RootRoute({
  component: App,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomeScreen,
})

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutUs,
})

const servicesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
})

const projectDetailsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: Projects,
})

const contactUsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactUs,
})

const adminRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminLogin,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  projectDetailsRoute,
  contactUsRoute,
  adminRoute,
])

export const router = new Router({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
