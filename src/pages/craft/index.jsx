import { useLoaderData } from "react-router-dom"
import NotFound from "../not-found"

const Craft = () => {
  const craft = useLoaderData()

  if (!craft) return <NotFound />
  console.log(craft)

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-y-4 w-full flex-1 px-4 sm:gap-12">
      <div className="aspect-[5/3] relative sm:w-1/2">
        <img
          src={craft.image}
          alt={craft.item_name}
          className="absolute object-cover rounded-md h-full w-full"
        />
      </div>
      <div className="flex flex-col gap-3 sm:w-1/2">
        <p className="text-xs text-muted-foreground">
          {craft.subcategory_name}
        </p>
        <h1 className="font-bold text-foreground text-xl">{craft.item_name}</h1>
        <div className="grid grid-cols-2 gap-3">
          <div className="text-sm">
            Custom: <span className="capitalize">{craft.customization}</span>
          </div>
          <div className="text-sm">
            Rating: <span className="capitalize">{craft.rating} star</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          {craft.short_description}
        </p>
        <p className="text-primary font-semibold text-2xl">${craft.price}</p>
      </div>
    </div>
  )
}
export default Craft
