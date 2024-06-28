import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth"
import { auth } from "../firebase/config"

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState()

  const login = async values => {
    const data = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    )
    return data
  }

  const register = async values => {
    const data = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    )

    await updateProfile(auth.currentUser, {
      displayName: values.name,
      photoURL: values.photoUrl,
    })

    setUser({
      ...data.user,
      displayName: values.name,
      photoURL: values.photoUrl,
    })

    return data.user
  }

  const logout = async () => {
    await signOut(auth)
  }

  const updateUserProfile = async profileUpdates => {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, profileUpdates)
      setUser({
        ...user,
        ...profileUpdates,
      })
    }
  }

  const authData = { loading, user, login, register, logout, updateUserProfile }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
export default AuthProvider
