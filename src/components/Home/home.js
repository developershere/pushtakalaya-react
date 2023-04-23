import BestAuthor from "../BestAuthor/bestAuthor";
import Service from "../Service/service";
import Banner from "../banner/banner";
import Carousal from "../carousal/carousal";
import Footer from "../footer/footer";

import Header from "../header/header";
import MostProduct from "../mostProductArea/mostproduct";
import Shop from "../shop/shop";
import TopInteresting from "../topInteresting/topInteresting";

function Home(){
   return<>
    <Header/>
    <Service/>
    <Carousal />
    <TopInteresting/>
    <BestAuthor/>
    <Shop/>
    <Banner/>
    <MostProduct/>
    <Footer/>
  
   </>
}

export default Home;