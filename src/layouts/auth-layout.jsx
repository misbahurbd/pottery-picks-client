import { Link, Navigate, Outlet } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../providers/auth-provider"
import Loading from "../components/loading"

const AuthLayout = () => {
  const { loading, user } = useContext(AuthContext)

  if (loading) {
    return <Loading />
  }

  if (!loading && user) return <Navigate to={"/"} />

  return (
    <div className="flex-1 flex flex-col gap-6 items-center justify-center">
      <Link
        to="/"
        className="font-bold text-3xl text-foreground"
      >
        Pottery Picks
      </Link>
      <Outlet />
    </div>
  )
}
export default AuthLayout
