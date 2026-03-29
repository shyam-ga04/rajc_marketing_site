import { RootRoute, Route, Router } from "@tanstack/react-router"
import App from "./App"
import HomeScreen from "./screens/HomeScreen"
import AboutUs from "./screens/AboutUs"
import Services from "./screens/Services"
import ServiceDetails from "./screens/ServiceDetails"
import Projects from "./screens/Projects"
import ProjectDetails from "./screens/ProjectDetails"
import ContactUs from "./screens/ContactUs"
import AdminLogin from "./screens/AdminLogin"
import AdminOverview from "./screens/admin/AdminOverview"
import AdminProjects from "./screens/admin/AdminProjects"
import AdminServices from "./screens/admin/AdminServices"
import AdminEnquiries from "./screens/admin/AdminEnquiries"
import AdminSettings from "./screens/admin/AdminSettings"
import PrivacyPolicy from "./screens/PrivacyPolicy"
import TermsOfService from "./screens/TermsOfService"

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

const serviceDetailByIdRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/services/$serviceId",
  component: ServiceDetails,
})

const projectDetailsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: Projects,
})

const projectDetailByIdRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects/$projectId",
  component: ProjectDetails,
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

const adminDashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/admin/dashboard",
  component: AdminOverview,
})

const adminProjectsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/admin/dashboard/projects",
  component: AdminProjects,
})

const adminServicesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/admin/dashboard/services",
  component: AdminServices,
})

const adminEnquiriesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/admin/dashboard/enquiries",
  component: AdminEnquiries,
})

const adminSettingsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/admin/dashboard/settings",
  component: AdminSettings,
})

const privacyPolicyRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/privacy-policy",
  component: PrivacyPolicy,
})

const termsOfServiceRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/terms-of-service",
  component: TermsOfService,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  serviceDetailByIdRoute,
  projectDetailsRoute,
  projectDetailByIdRoute,
  contactUsRoute,
  adminRoute,
  adminDashboardRoute,
  adminProjectsRoute,
  adminServicesRoute,
  adminEnquiriesRoute,
  adminSettingsRoute,
  privacyPolicyRoute,
  termsOfServiceRoute,
])

export const router = new Router({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
