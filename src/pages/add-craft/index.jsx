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

const AddCraft = () => {
  const { user, loading } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)

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
      user_name: user?.displayName || "",
      user_email: user?.email || "",
    },
  })

  if (loading) return <Loading />

  return (
    <div className="px-4 flex-1 flex items-center justify-center">
      <div className="w-full max-w-[600px]">
        <form className="flex flex-col gap-3 p-8 rounded-md bg-secondary">
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
          <div className="flex gap-4">
            <FormInput
              form={form}
              name="price"
              label="Price"
              placeholder="Price"
              className="w-1/2"
              disabled={isLoading}
            />
            <FormInput
              form={form}
              name="rating"
              label="Rating"
              placeholder="Rating"
              className="w-1/2"
              disabled={isLoading}
            />
          </div>
          <div className="flex gap-4">
            <FormSelect
              form={form}
              name="customization"
              label="Customization"
              placeholder="Customization"
              data={[
                { id: 1, label: "Yes", value: "yes" },
                { id: 2, label: "No", value: "no" },
              ]}
              className="w-1/2"
              disabled={isLoading}
            />
            <FormSelect
              form={form}
              name="subcategory_name"
              label="Subcategory Name"
              placeholder="Subcategory name"
              data={itemCategories}
              className="w-1/2"
              disabled={isLoading}
            />
          </div>
          <div className="flex gap-4">
            <FormSelect
              form={form}
              name="rating"
              label="Rating"
              placeholder="Rating"
              data={itemRating}
              className="w-1/2"
              disabled={isLoading}
            />
            <FormSelect
              form={form}
              name="stock_status"
              label="Stock Status"
              placeholder="Stock status"
              data={itemStock}
              className="w-1/2"
              disabled={isLoading}
            />
            <FormSelect
              form={form}
              name="processing_time"
              label="Processing time"
              placeholder="Processing time"
              data={itemProcessTime}
              className="w-1/2"
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
