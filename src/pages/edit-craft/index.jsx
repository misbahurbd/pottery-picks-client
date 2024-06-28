import { useParams } from "react-router-dom"

const EditCraft = () => {
  const { id } = useParams()
  console.log(id)

  return <div>EditCraft</div>
}
export default EditCraft
