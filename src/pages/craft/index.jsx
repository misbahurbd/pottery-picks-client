import { useParams } from "react-router-dom"

const Craft = () => {
  const { id } = useParams()
  console.log(id)
  return <div>Craft</div>
}
export default Craft
