import { useState, useEffect } from "react"
import SectionHeader from "../../components/section-header"
import CraftCard from "../../components/craft-card"

const OurCrafts = () => {
  const [crafts, setCrafts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:4000/craft", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
      const craftData = await data.json()
      setCrafts(craftData)
    }
    fetchData()
  }, [])

  return (
    <section className="px-4">
      <SectionHeader title="Our Art & Craft" />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {crafts.map((item, i) => (
          <CraftCard
            key={"craft-card" + "-" + i}
            data={item}
            action={false}
          />
        ))}
      </div>
    </section>
  )
}
export default OurCrafts
