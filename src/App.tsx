import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainLayout from "./components/layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import AuthLayout from "./components/layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,

    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/app",
    element: <MainLayout />,

    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
