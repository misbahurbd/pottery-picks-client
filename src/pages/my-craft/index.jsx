import { useContext, useState, useEffect } from "react"
import SectionHeader from "../../components/section-header"
import { AuthContext } from "../../providers/auth-provider"
import CraftCard from "../../components/craft-card"
import EmptyResult from "../../components/empty-result"
import { HiOutlineArchiveBoxXMark } from "react-icons/hi2"
import Loading from "../../components/loading"

const MyCraft = () => {
  const [crafts, setCrafts] = useState([])
  const { user } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://art-and-craft-server-coral.vercel.app/my-craft/" + user.email,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      )
      const craftData = await data.json()
      setCrafts(craftData)
      setLoading(false)
    }
    fetchData()
  }, [user.email])

  if (loading) {
    return <Loading />
  }

  return (
    <section className="px-4">
      <SectionHeader title="My Art & Craft" />
      {crafts && crafts.length === 0 && (
        <EmptyResult
          icon={HiOutlineArchiveBoxXMark}
          title="No craft you publish yat!"
        />
      )}
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
