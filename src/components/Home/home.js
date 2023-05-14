import BestAuthor from "../BestAuthor/bestAuthor";
import Service from "../Service/service";
import Loader from "../Spinner/Loader";
import Spinner from "../Spinner/Spinner";
import Spinner2 from "../Spinner/Spinner2";
import Banner from "../banner/banner";
import Carousal from "../carousal/carousal";
import Footer from "../footer/footer";

import Header from "../header/header";


import TopInteresting from "../topInteresting/topInteresting";

function Home(){
   return<>
    <Loader/>
    <Header/>
    <Service/>
    <Carousal />
    <TopInteresting/>
    <BestAuthor/>
    <Banner/>
    <Footer/>
  
   </>
}

export default Home;