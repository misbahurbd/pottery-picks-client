import { Link, NavLink, useLocation } from "react-router-dom"
import { cn } from "../lib/utils"
import UserBox from "./user-box"
import { useEffect, useRef, useState } from "react"
import ThemeToggle from "./theme-toggle"
import { HiBars3 } from "react-icons/hi2"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)
  const { pathname } = useLocation()

  const menuItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Our Art & Craft",
      path: "/crafts",
    },
    {
      label: "Add Craft Item",
      path: "/add-craft",
    },
    {
      label: "My Art & Craft List",
      path: "/my-craft",
    },
  ]

  const toggleMenu = () => {
    setIsOpen(open => !open)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="h-14 relative">
      <nav className="h-14 z-50 fixed w-full top-0 flex gap-6 items-center p-4 backdrop-blur-sm bg-background/80 text-foreground border-b border-border">
        <div className="flex-1 flex gap-3">
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden"
          >
            <HiBars3 className="size-6" />
          </button>
          <Link
            href="./"
            className="font-bold text-foreground"
          >
            Pottery Picks
          </Link>
        </div>
        <ul className="items-center gap-8 hidden md:flex">
          {menuItems.map(item => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "transition text-muted-foreground hover:text-foreground",
                    isActive && "text-primary"
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex-1 flex gap-3 items-center justify-end">
          <ThemeToggle />
          <UserBox />
        </div>
        <ul
          className={cn(
            "invisible transition md:hidden opacity-0 translate-y-2 flex absolute top-full w-full left-0 flex-col  bg-secondary/90 z-20",
            isOpen && "visible opacity-100 translate-y-0"
          )}
        >
          {menuItems.map(item => (
            <li
              key={item.path}
              ref={ref}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "no-underline block font-light transition px-4 py-2 border-b border-border text-sm",
                    isActive && "text-primary"
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
export default Header
