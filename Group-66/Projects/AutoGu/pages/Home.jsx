import BrandButtons from "../components/brandButtons";
import FindCarSearch from "../components/FindCarSearch";


function Home() {
  return (
    <div>
      <h1>Welcome to AutoGu</h1>
      <FindCarSearch />
      <h1>Explore Our Brands</h1>
      <BrandButtons />
    </div>
  )
}

export default Home;