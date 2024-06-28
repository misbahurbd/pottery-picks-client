import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../providers/auth-provider"
import Loading from "../components/loading"

const PrivateLayout = () => {
  const { loading, user } = useContext(AuthContext)

  if (loading) {
    return <Loading />
  }

  if (!loading && !user) {
    return <Navigate to={"/login"} />
  }

  return <Outlet />
}
export default PrivateLayout
