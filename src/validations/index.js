import { z } from "zod"

export const registerFormSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address")
      .toLowerCase(),
    photoUrl: z
      .string()
      .min(1, "Photo URL is required")
      .url("Invalid photo url"),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]{8,}$/gm, {
        message:
          "Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, and one number.",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine(values => values.password === values.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export const loginFormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(1, { message: "Password is required" }),
})

export const addCraftFormSchema = z.object({
  image: z.string().min(1, "Item image is required").url("Invalid image url"),
  item_name: z.string().min(1, "Item name is required"),
  subcategory_name: z.string().min(1, "Subcategory name is required"),
  short_description: z.string().min(1, "Short description is required"),
  price: z.string().min(1, "Price is required"),
  rating: z.string().min(1, "Rating is required"),
  customization: z.enum(["yes", "no"]),
  processing_time: z.string().min(1, "Processing time is required"),
  stock_status: z.enum(["In stock", "Out of stock", "Made to order"]),
})
