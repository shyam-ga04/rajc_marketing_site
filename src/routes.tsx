import { RootRoute, Route, Router } from "@tanstack/react-router";
import App from "./App";
import HomeScreen from "./screens/HomeScreen";
import AboutUs from "./screens/AboutUs";
import Services from "./screens/Services";
import ProjectDetails from "./screens/ProjectDetails";
import ContactUs from "./screens/ContactUs";

const rootRoute = new RootRoute({
  component: App,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomeScreen,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutUs,
});

const servicesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});

const projectDetailsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/project-details",
  component: ProjectDetails,
});

const contactUsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactUs,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  projectDetailsRoute,
  contactUsRoute,
]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
