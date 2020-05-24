import { lazy } from "react";

const LoginPage = lazy(() => import("../pages/guest/Login"));
const HomePage = lazy(() => import("../pages/guest/Home"));
const BlogPage = lazy(() => import("../pages/guest/Blog"));

const routes = {
  login: {
    path: "/login",
    exact: true,
    Component: LoginPage,
  },
  home: {
    path: "/",
    exact: true,
    Component: HomePage,
  },
  blog: {
    path: "/blog",
    exact: true,
    Component: BlogPage,
  },
};

export default routes;
