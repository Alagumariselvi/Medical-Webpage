import Header from "./header";
import Banner from "./banner";
import BlockImage from "./BlockImage";
import Footer from "./footer";
import Popularcategories from "./PopularCategories";
import NewArrivals from "./NewArrivals";
function Home()
{
    return(
        <>
            <Header/>
        <Banner/>
        <BlockImage/>
        <Popularcategories/>
        <NewArrivals/>
        <Footer/>
        </>
    )

}
export default Home;