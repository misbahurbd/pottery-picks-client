import PropTypes from "prop-types"
import { useContext, useState } from "react"
import { HiEye, HiPencil, HiStar, HiTrash, HiXMark } from "react-icons/hi2"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../providers/auth-provider"
import { toast } from "sonner"

const CraftCard = ({ data, action = false }) => {
  const { user } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleDelete = async () => {
    const toastId = toast.loading("Deleting craft item")
    try {
      const res = await fetch(`http://localhost:4000/craft/${data._id}`, {
        method: "DELETE",
      })
      if (res.ok) {
        toast.success("Craft item delete successfully!", { id: toastId })
        setIsOpen(false)
      }
    } catch (error) {
      toast.error("Unable to delete craft item!", { id: toastId })
    }
  }

  return (
    <div className="shadow-md rounded-md border-border border">
      {isOpen && (
        <div
          className="fixed p-8 w-full h-full bg-background/30 backdrop-blur-sm z-[20] top-0 left-0 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-96 bg-background shadow-md rounded-md p-4 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 text-lg"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              <HiXMark />
            </button>
            <p className="text-center py-12">
              Are you sure you want to delete?
            </p>
            <div className="flex gap-2 items-center">
              <button
                className="flex-1 rounded-md px-4 py-2 bg-destructive hover:bg-destructive/80 text-destructive-foreground"
                onClick={handleDelete}
              >
                Yes
              </button>
              <button
                className="flex-1 rounded-md px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground"
                onClick={() => setIsOpen(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col h-full gap-3 items-stretch bg-secondary rounded-md overflow-hidden">
        <div className="aspect-[5/3] shrink-0 relative">
          <img
            src={data.image}
            alt={data.item_name}
            className=" absolute w-full h-full top-0 left-0 object-cover"
          />
          <span className="absolute right-2 top-2 rounded uppercase text-xs bg-background text-muted-foreground px-1.5 py-1">
            {data.stock_status}
          </span>
          <span className="bg-secondary absolute bottom-0 right-4 rounded-t-md px-2 py-1 flex items-center gap-1.5 text-sm">
            <HiStar className="text-primary" />
            <span>{data.rating}.0</span>
          </span>
        </div>

        <div className="p-3 flex-1 flex gap-1 flex-col">
          <p className="text-xs text-muted-foreground/60">
            {data.subcategory_name}
          </p>
          <Link
            to={`/crafts/${data._id}`}
            className="group"
          >
            <h3 className="font-semibold transition text-lg text-secondary-foreground line-clamp-3 group-hover:text-primary">
              {data.item_name}
            </h3>
          </Link>
          <h3 className="text-sm line-clamp-2">{data.short_description}</h3>
          <p className="text-primary font-semibold text-lg mt-auto">
            ${data.price}
          </p>
          {action && user?.email && user.email === data.user_email && (
            <ul className="flex gap-2 mt-3 w-full">
              <li
                className="px-2 grow justify-center py-2 hover:bg-foreground hover:text-background cursor-pointer text-sm bg-background rounded flex items-center gap-2"
                onClick={() => navigate(`/crafts/${data._id}`)}
              >
                <HiEye />
                <span>View</span>
              </li>
              <li
                className="px-2 grow justify-center py-2 hover:bg-primary hover:text-primary-foreground cursor-pointer text-sm bg-background rounded flex items-center gap-2"
                onClick={() => navigate(`/crafts/edit/${data._id}`)}
              >
                <HiPencil />
                <span>Edit</span>
              </li>
              <li
                className="px-2 grow justify-center py-2 hover:bg-destructive hover:text-destructive-foreground cursor-pointer text-sm bg-background rounded flex items-center gap-2"
                onClick={() => setIsOpen(true)}
              >
                <HiTrash />
                <span>Delete</span>
              </li>
            </ul>
          )}
          {!action && (
            <Link
              to={`/crafts/${data._id}`}
              className="flex mt-3 font-medium transition px-3 py-1 rounded items-center justify-center gap-2 bg-background hover:bg-primary hover:text-primary-foreground"
            >
              <HiEye />
              <span>View Craft</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

CraftCard.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string,
    image: PropTypes.string,
    item_name: PropTypes.string,
    subcategory_name: PropTypes.string,
    short_description: PropTypes.string,
    price: PropTypes.string,
    rating: PropTypes.string,
    customization: PropTypes.string,
    processing_time: PropTypes.string,
    stock_status: PropTypes.string,
    user_name: PropTypes.string,
    user_email: PropTypes.string,
  }),
  action: PropTypes.bool,
}
export default CraftCard
