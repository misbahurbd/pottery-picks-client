import { useEffect, useState } from "react"
import SectionHeader from "../../../components/section-header"
import CraftCard from "../../../components/craft-card"
import { Sckeleton } from "../../../components/craft-card-sckeleton"

const CraftList = () => {
  const [crafts, setCrafts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:4000/craft")
      const craftData = await data.json()
      setCrafts(craftData)
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <section className="px-4">
      <SectionHeader title="Latest Art & Craft" />

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading && (
          <>
            {Array.from({ length: 12 }).map((_, i) => (
              <Sckeleton key={"home" + "dummy" + i} />
            ))}
          </>
        )}
        {crafts.slice(0, 12).map((item, i) => (
          <CraftCard
            data={item}
            key={"home-card-" + i}
          />
        ))}
      </div>
    </section>
  )
}
export default CraftList
