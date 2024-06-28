import { useContext } from "react"
import { ThemeContext } from "../providers/theme-provider"
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      className="bg-secondary text-secondary-foreground flex items-center justify-center size-8 rounded-sm"
    >
      {theme === "dark" ? (
        <HiOutlineSun className="size-4" />
      ) : (
        <HiOutlineMoon className="size-4" />
      )}
    </button>
  )
}
export default ThemeToggle
