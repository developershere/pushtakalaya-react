import { useSelector } from "react-redux";
import './top.css'
function TopInteresting() {
  const { TopProductList } = useSelector((state) => state.topProduct);
  console.log(TopProductList)

  return <>
    <section className="our-project" id="projectid">
      <div className="container heading-design">
        <div data-aos="fade-up" data-aos-duration="400">
          <h1><span>Top Books</span></h1>
          <p class="sub-heading container">  <p>Browse the collection of our best selling and top interresting products. <br /> ll definitely find what you are looking for..</p></p>
        </div>
        <div className="container topinteresting" data-aos="fade-up" data-aos-duration={400}>
          <nav>
            <div
              className="nav nav-tabs row"
              style={{ paddingLeft: "18%" }}
              id="nav-tab"
              role="tablist"
            >

              <button
                className=" nav-link active col-2" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab" aria-controls="nav-all" aria-selected="true"  >  All
              </button>
              <button
                className=" nav-link col-2"
                id="nav-Remodeling-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-Remodeling"
                type="button"
                role="tab"
                aria-controls="nav-Remodeling"
                aria-selected="false"
              >
                Classice
              </button>
              <button
                className="nav-link col-2"
                id="nav-Construction-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-Construction"
                type="button"
                role="tab"
                aria-controls="nav-Construction"
                aria-selected="false"
              >
                Horror
              </button>
              <button
                className="nav-link col-2"
                id="nav-Repair-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-Repair"
                type="button"
                role="tab"
                aria-controls="nav-Repair"
                aria-selected="false"
              >
                history
              </button>
              <button
                className="nav-link col-2"
                id="nav-Design-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-Design"
                type="button"
                role="tab"
                aria-controls="nav-Design"
                aria-selected="false"
              >
                {" "}

              </button>
            </div>
          </nav>
        </div>
        <div
          className="tab-content "
          id="nav-tabContent"
          data-aos="fade-up"
          data-aos-duration={500}
        >
          <div
            className="tab-pane fade show active container"
            id="nav-all"
            role="tabpanel"
            aria-labelledby="nav-all-tab"
            tabIndex={0}
          >
            <div className="row">

              {TopProductList.map((product, item) =>
                <div className="col-md-3">
                  <section className="mx-auto my-5" style={{ maxWidth: "23rem" }}>
                    <div className="card">
                      <div
                        className="bg-image hover-overlay ripple"
                        data-mdb-ripple-color="light"
                      >
                        <div className="img_conrtainer text-center align-center">
                          <img src={product.photos} className="img-fluid text-center cardimg"/>
                        </div>
                        <a href="#!">
                          <div className="mask"  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} />
                        </a>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                          <a>{product.name}</a>
                        </h5>
                        <p className="mb-2">{product.author}</p>
                        <p className="card-text">
                          {product.description.substring(0, 30)}
                        </p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                          <button class="cardbutton me-md-2" type="button">ADD TO CART</button>
                          <button class="cardbutton " type="button">VIEW MORE</button>
                        </div>
                      </div>
                    </div>
                  </section>

                </div>)}
            </div>





          </div>

        </div>

      </div>
    </section>






  </>
}

export default TopInteresting;