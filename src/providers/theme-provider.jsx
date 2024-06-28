import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

export const ThemeContext = createContext(null)

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState()

  useEffect(() => {
    if (
      theme === "dark" ||
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
      setTheme("dark")
    } else {
      document.documentElement.classList.remove("dark")
      setTheme("light")
    }
  }, [theme])

  const toggleTheme = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light"
      setTheme("light")
    } else {
      localStorage.theme = "dark"
      setTheme("dark")
    }
  }

  const themeData = { theme, toggleTheme }
  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
}

export default ThemeProvider
