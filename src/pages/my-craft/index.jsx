import { useContext, useState, useEffect } from "react"
import SectionHeader from "../../components/section-header"
import { AuthContext } from "../../providers/auth-provider"
import CraftCard from "../../components/craft-card"

const MyCraft = () => {
  const [crafts, setCrafts] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:4000/my-craft/" + user.email, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
      const craftData = await data.json()
      setCrafts(craftData)
    }
    fetchData()
  }, [user.email])

  return (
    <section className="px-4">
      <SectionHeader title="My Art & Craft" />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {crafts.map((item, i) => (
          <CraftCard
            key={"craft-card" + "-" + i}
            data={item}
            action
          />
        ))}
      </div>
    </section>
  )
}
export default MyCraft
