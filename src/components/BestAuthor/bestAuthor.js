import { useSelector } from 'react-redux';
import recentProductSlice from '../../router-config/recentProductSlice';
import './author.css'
import { Externals } from '../../Externals/BestAuthore';
function BestAuthor() {
  const { recentProductList } = useSelector((state) => state.recentProduct);

  return <>
    <div className="banner-area-5 mtb-95 ">

    </div>
    {/* banner-area-end */}
    {/* bestseller-area-start */}
    <div className="bestseller-area pb-100 ">
      <div className="container ">
        <div className="row ">
          <div className="col-lg-8 col-md-12 col-12 ">
            <div className="bestseller-content col-sm-12 col-xs-12 ">
              <h1>Author best selling</h1>
              <h2 className='col-sm-12'>
                {Externals.NAME}
                {Externals.LAST_NAME}
              </h2>
              <p>
                {Externals.BEST_AUTHORE}
              </p>
              <div className="social-author ">
                <ul>
                  <li>
                    <a href="# ">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="banner-img-2 col-sm-12 col-md-12 col-xs-12 ">
              <a href="# ">
                <img src="img/banner/6.jpg" className="bannerImage" alt="banner " />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-12 col-sm-12 " >
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" >
              <div className="carousel-inner col-xs-12">
                <div className="carousel-item active ">
                  <img src="img\product\1.jpg" className="author col-xs-12 imgwit" alt="..." />
                  <img src="img\product\4.jpg" className="author imgwit col-xs-12" alt="..." />
                </div>
                <div className="carousel-item  col-xs-12">
                  <img src="img\product\4.jpg" className="author imgwit" alt="..." />
                  <img src="img\product\4.jpg" className="author imgwit" alt="..." />
                </div>
                <div className="carousel-item col-xs-12 ">
                  <img src="img\product\3.jpg" className="author display" alt="..." />
                  <img src="img\product\4.jpg" className="author display" alt="..." />
                </div>
              </div>
              <a className="carousel-control-prev display" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next display" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>


            {/* ------------------------------------------- */}

            <div id="carouselExampleControls" className="carousel slide display" data-ride="carousel" >
              <div className="carousel-inner display">
                <div className="carousel-item active col-xs-12">
                  <img src="img\product\1.jpg" className="author display" alt="..." />
                  <img src="img\product\4.jpg" className="author display" alt="..." />
                </div>
                <div className="carousel-item col-xs-12">
                  <img src="img\product\4.jpg" className="author display" alt="..." />
                  <img src="img\product\4.jpg" className="author display" alt="..." />
                </div>
                <div className="carousel-item col-xs-12">
                  <img src="img\product\3.jpg" className="author display" alt="..." />
                  <img src="img\product\4.jpg" className="author display" alt="..." />
                </div>
              </div>
              <a className="carousel-control-prev display" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next display" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>


          </div>
          {/* ----------------------second--------------------- */}
         </div>
      </div>
    </div>


  </>


}

export default BestAuthor;