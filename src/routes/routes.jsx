import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/home/index";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import AdminDashboard from "../pages/admin/index";
import VisitorLists from "../pages/admin/VisitorLists";
import VisitorDashboard from "../pages/visitors";

// layouts
import AdminLayout from "../layout/admin/Layout";
import AuthLayout from "../layout/auth/layout";
import VisitorLayout from "../layout/visitor/layout";
import Settings from "../pages/admin/Settings";
import Reports from "../pages/admin/Reports";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },

      // Auth
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          { path: "login", element: <LoginPage /> },
          { path: "register", element: <RegisterPage /> },
        ],
      },

      // Visitor Dashboard
      {
        path: "visitor",
        element: <VisitorLayout />,
        children: [
          { path: "dashboard", element: <VisitorDashboard /> },
          // { path: "book-visit", element: <BookVisit /> },
          // { path: "visit/:id", element: <VisitDetails /> },
          // { path: "history", element: <VisitHistory /> },
        ],
      },

      // Admin Dashboard
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          { path: "dashboard", element: <AdminDashboard /> },
          { path: "visitors", element: <VisitorLists /> },
          // { path: "visitor/:id", element: <VisitorDetail /> },
          { path: "reports", element: <Reports /> },
          { path: "settings", element: <Settings /> },
        ],
      },

      // 404 Fallback
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
