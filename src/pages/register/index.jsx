import { useForm } from "react-hook-form"
import FormInput from "../../components/form-input"
import { useContext, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema } from "../../validations"
import { toast } from "sonner"
import { AuthContext } from "../../providers/auth-provider"

const Register = () => {
  const { register } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      photoUrl: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onRegister = async values => {
    setIsLoading(true)
    const toastId = toast.loading("Creating new account...")
    try {
      const res = await register(values)
      console.log({ res })
      toast.success("Register successfully!", { id: toastId })
    } catch (error) {
      let message
      switch (error.code) {
        case "auth/email-already-in-use":
          message = "Email already used"
          break
        case "auth/invalid-email":
          message = "Invalid email address"
          break
        default:
          message = "Unable to register"
          break
      }
      toast.error(message, { id: toastId })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onRegister)}
      className="w-full max-w-96 bg-secondary shadow-sm p-8 rounded-md flex flex-col gap-4"
    >
      <FormInput
        form={form}
        label="Name"
        name="name"
        placeholder="Name"
        disabled={isLoading}
      />
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
        label="Photo URL"
        name="photoUrl"
        placeholder="Photo URL"
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

      <FormInput
        form={form}
        label="Confirm Password"
        name="confirmPassword"
        placeholder="Confirm Password"
        type="password"
        disabled={isLoading}
      />

      <button className="rounded bg-primary text-primary-foreground py-1 px-4">
        Register
      </button>
    </form>
  )
}
export default Register
