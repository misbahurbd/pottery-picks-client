import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { addCraftFormSchema } from "../../validations"
import { useContext, useState } from "react"
import { AuthContext } from "../../providers/auth-provider"
import Loading from "../../components/loading"
import FormInput from "../../components/form-input"
import FormSelect from "../../components/form-select"
import {
  itemCategories,
  itemProcessTime,
  itemRating,
  itemStock,
} from "../../constant"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import SectionHeader from "../../components/section-header"

const AddCraft = () => {
  const { user, loading } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(addCraftFormSchema),
    defaultValues: {
      image: "",
      item_name: "",
      subcategory_name: "",
      short_description: "",
      price: "",
      rating: "",
      customization: "",
      processing_time: "",
      stockStatus: "",
    },
  })

  const onSubmit = async values => {
    setIsLoading(true)
    const toastId = toast.loading("Creating new craft...")
    try {
      const res = await fetch("http://localhost:4000/craft", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          user_name: user?.displayName,
          user_email: user?.email,
        }),
      })
      if (res.ok) {
        navigate("/my-craft")
        toast.success("Craft created successfully!", { id: toastId })
      }
    } catch (error) {
      toast.error("Unable to create craft", { id: toastId })
    } finally {
      setIsLoading(false)
    }
  }

  if (loading) return <Loading />

  return (
    <div className="px-4 flex-1 flex flex-col items-center justify-center">
      <SectionHeader title="Add Craft Item" />
      <div className="w-full max-w-[600px]">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3 p-8 rounded-md bg-secondary"
        >
          <FormInput
            form={form}
            name="image"
            label="Item Image"
            placeholder="Item image"
            disabled={isLoading}
          />
          <FormInput
            form={form}
            name="item_name"
            label="Item Name"
            placeholder="Item name"
            disabled={isLoading}
          />
          <FormInput
            form={form}
            name="short_description"
            label="Short Description"
            placeholder="Short description"
            disabled={isLoading}
          />

          <FormInput
            form={form}
            name="price"
            label="Price"
            placeholder="Price"
            disabled={isLoading}
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <FormSelect
              form={form}
              name="customization"
              label="Customization"
              placeholder="Customization"
              data={[
                { id: 1, label: "Yes", value: "yes" },
                { id: 2, label: "No", value: "no" },
              ]}
              className="w-full  sm:w-1/2"
              disabled={isLoading}
            />
            <FormSelect
              form={form}
              name="subcategory_name"
              label="Subcategory"
              placeholder="Subcategory"
              data={itemCategories}
              className="w-full  sm:w-1/2"
              disabled={isLoading}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <FormSelect
              form={form}
              name="rating"
              label="Rating"
              placeholder="Rating"
              data={itemRating}
              className="w-full  sm:w-1/2"
              disabled={isLoading}
            />
            <FormSelect
              form={form}
              name="stock_status"
              label="Stock Status"
              placeholder="Stock status"
              data={itemStock}
              className="w-full  sm:w-1/2"
              disabled={isLoading}
            />
            <FormSelect
              form={form}
              name="processing_time"
              label="Processing time"
              placeholder="Processing time"
              data={itemProcessTime}
              className="w-full  sm:w-1/2"
              disabled={isLoading}
            />
          </div>
          <button
            className="px-3 transition py-1.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/80"
            type="submit"
            disabled={isLoading}
          >
            Add Craft
          </button>
        </form>
      </div>
    </div>
  )
}
export default AddCraft
