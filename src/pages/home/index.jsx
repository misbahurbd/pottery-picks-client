import { Helmet } from "react-helmet-async"
import HomeSlider from "./components/slider"
import CraftList from "./components/craft-list"

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Helmet>
        <title>Pottery Picks</title>
      </Helmet>
      <HomeSlider />
      <CraftList />
    </div>
  )
}
export default Home
