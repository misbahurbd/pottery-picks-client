import { useForm } from "react-hook-form"
import FormInput from "../../components/form-input"
import { useContext, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormSchema } from "../../validations"
import { toast } from "sonner"
import { AuthContext } from "../../providers/auth-provider"

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useContext(AuthContext)
  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",

      password: "",
    },
  })

  const onLogin = async values => {
    setIsLoading(true)
    const toastId = toast.loading("Login account...")
    try {
      await login(values)
      toast.success("Login successfuly!", { id: toastId })
    } catch (error) {
      let message
      switch (error.code) {
        case "auth/email-already-in-use":
          message = "The email address is already in use by another account."
          break
        case "auth/invalid-email":
          message = "The email address is not valid."
          break
        case "auth/invalid-password":
          message =
            "The provided password is invalid. It must be at least six characters."
          break
        case "auth/account-exists-with-different-credential":
          message =
            "An account already exists with this email. Please use a different sign-in method."
          break
        case "auth/popup-blocked":
          message = "The popup was blocked by the browser."
          break
        case "auth/popup-closed-by-user":
          message = "The popup was closed before completing the operation."
          break
        case "auth/unauthorized-domain":
          message = "This domain is not authorized for this operation."
          break
        case "auth/user-disabled":
          message = "The user account has been disabled."
          break
        case "auth/user-not-found":
          message =
            "No user found with this email. Please check the email address or sign up."
          break
        case "auth/invalid-credential":
          message = "Invalid credential. Please try again."
          break
        default:
          message = "Unable to login. Please try again."
          break
      }
      toast.error(message || "Unable to login", { id: toastId })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onLogin)}
      className="w-full max-w-96 bg-secondary shadow-sm p-8 rounded-md flex flex-col gap-4"
    >
      <FormInput
        form={form}
        label="Email"
        name="email"
        placeholder="Email Address"
        type="email"
        disabled={isLoading}
      />
      <FormInput
        form={form}
        label="Password"
        name="password"
        placeholder="Password"
        type="password"
        disabled={isLoading}
      />
      <button className="rounded bg-primary text-primary-foreground py-1 px-4">
        Login
      </button>
    </form>
  )
}
export default Login
