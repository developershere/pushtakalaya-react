import './author.css'
function BestAuthor() {
  return <>
    <div className="banner-area-5 mtb-95 ">

    </div>
    {/* banner-area-end */}
    {/* bestseller-area-start */}
    <div className="bestseller-area pb-100 ">
      <div className="container ">
        <div className="row ">
          <div className="col-lg-8 col-md-12 col-12 ">
            <div className="bestseller-content ">
              <h1>Author best selling</h1>
              <h2>
                J. K. <br />
                Rowling
              </h2>
              <p>
                Vestibulum porttitor iaculis gravida. Praesent vestibulum varius
                placerat. Cras tempor congue neque, id aliquam orci finibus sit
                amet. Fusce at facilisis arcu. Donec aliquet nulla id turpis
                semper, a bibendum metus vulputate. Suspendisse potenti.{" "}
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
            <div className="banner-img-2 ">
              <a href="# ">
                <img src="img/banner/6.jpg " alt="banner " />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-12" >


            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="img\product\1.jpg" className="author" alt="..." />
                  <img src="img\product\4.jpg" className="author" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="img\product\4.jpg" className="author" alt="..." />
                  <img src="img\product\4.jpg" className="author" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="img\product\3.jpg" className="author" alt="..." />
                  <img src="img\product\4.jpg" className="author" alt="..." />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>


            {/* ------------------------------------------- */}

            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="img\product\1.jpg" className="author" alt="..." />
                  <img src="img\product\4.jpg" className="author" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="img\product\4.jpg" className="author" alt="..." />
                  <img src="img\product\4.jpg" className="author" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="img\product\3.jpg" className="author" alt="..." />
                  <img src="img\product\4.jpg" className="author" alt="..." />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
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