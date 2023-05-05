import Footer from "../footer/footer";
import Header from "../header/header";
import "./viewDescription.css"
import { useLocation } from "react-router-dom";
function ViewDescription() {

    const location = useLocation();
    const book = location?.state?.bookDetails;
    return <>
        {/* Hello world */}
        <Header />
        <div className="mt-5" id="layoutSidenav">
            <div id="layoutSidenav_nav">
                {/* side nav  */}
                {/* side nav end  */}
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <div className="container-fluid" id="main_wrapper">
                            <div className="container" id="container_wrapper">
                                <div className="mid_wrapper">
                                    <div id="div1">
                                        <div id="main_image" className="image">
                                            <img
                                                src={"https://drive.google.com/uc?export=view&id=" + book.photos.substring(32, book.photos.lastIndexOf("/"))}
                                                alt=""
                                                id="mainImage"
                                            />
                                        </div>
                                        {/* image array */}

                                    </div>
                                    <div id="div2">
                                        <div>
                                            <p className="dectitel">{book.name}</p>

                                            <p className="desprice">&#8377; {book.price}</p>
                                            <span className="decauther">By:  <span className="authername"> {book.author} </span>  (Author)  </span>
                                            <p className="bookdescription">{book.description.substring(0, 120)}</p>
                                        </div>

                                        <div className="discriptionbuttons">
                                            <a>
                                                <button className="discriptionbtn">Add to cart</button>
                                            </a>
                                            <a href>
                                                <button className="discriptionbtn2 ml-3">add to wishlist</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                {/* footer */}
                {/* footer end */}
            </div>
        </div>
        {/* <Footer/> */}

    </>



}

export default ViewDescription;