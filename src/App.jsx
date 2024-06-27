import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import { HelmetProvider } from "react-helmet-async"

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ])

  return (
    <HelmetProvider>
      <RouterProvider router={routes} />
    </HelmetProvider>
  )
}
export default App
