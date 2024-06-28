import { useEffect } from "react"
import PropTypes from "prop-types"

const ThemeProvider = ({ children }) => {
  const theme = localStorage.theme

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])
  return <>{children}</>
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
}

export default ThemeProvider
