import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { HelmetProvider } from "react-helmet-async"
import Home from "./pages/home"
import ThemeProvider from "./providers/theme-provider"
import RootLayout from "./layouts/root-layout"
import AuthProvider from "./providers/auth-provider"
import AuthLayout from "./layouts/auth-layout"
import Register from "./pages/register"
import Login from "./pages/login"
import { Toaster } from "sonner"
import PrivateLayout from "./layouts/private-layout"
import AddCraft from "./pages/add-craft"

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            {
              path: "/login",
              element: <Login />,
            },
            {
              path: "/register",
              element: <Register />,
            },
          ],
        },
        {
          element: <PrivateLayout />,
          children: [
            {
              path: "/add-craft",
              element: <AddCraft />,
            },
          ],
        },
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ])

  return (
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider>
          <Toaster position="bottom-center" />
          <RouterProvider router={routes} />
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
export default App
