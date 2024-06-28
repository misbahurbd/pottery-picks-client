import { useContext } from "react"
import { AuthContext } from "../providers/auth-provider"
import { Link } from "react-router-dom"
import {
  HiOutlineArrowLeftEndOnRectangle,
  HiOutlineCog6Tooth,
  HiOutlineUser,
} from "react-icons/hi2"

const UserBox = () => {
  const { loading, user, logout } = useContext(AuthContext)

  if (loading) {
    return null
  }

  return (
    <>
      {user ? (
        <div className="relative">
          <button className="flex group h-14 items-center">
            <img
              src={user?.photoURL}
              className="size-8 rounded-full object-cover flex"
            />
            <ul className="absolute z-[100] transition opacity-0 invisible translate-y-3 w-60 right-0 top-full bg-secondary backdrop-blur-sm rounded-md border-border border group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible flex flex-col">
              <li className="px-3 py-3 flex items-center gap-4">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="size-8 rounded-full object-cover"
                />
                <h2>{user?.displayName}</h2>
              </li>
              <span className="w-full border-b border-border" />
              <div className="flex flex-col gap-3 px-4 py-3">
                <li>
                  <Link
                    to="/profile"
                    className="flex items-center transition gap-3 text-muted-foreground hover:text-foreground"
                  >
                    <HiOutlineUser />
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className="flex items-center transition gap-3 text-muted-foreground hover:text-foreground"
                  >
                    <HiOutlineCog6Tooth />
                    <span>Settings</span>
                  </Link>
                </li>
              </div>
              <span className="w-full border-b border-border" />
              <li className="px-4 py-3">
                <div
                  to="/settings"
                  type="button"
                  onClick={logout}
                  className="flex items-center transition gap-3 text-muted-foreground hover:text-foreground"
                >
                  <HiOutlineArrowLeftEndOnRectangle />
                  <span>Logout</span>
                </div>
              </li>
            </ul>
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className=""
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-primary text-primary-foreground px-4 py-1.5 rounded-md"
          >
            Register
          </Link>
        </div>
      )}
    </>
  )
}
export default UserBox
