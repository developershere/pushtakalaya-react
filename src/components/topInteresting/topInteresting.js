import { useSelector } from "react-redux";

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
                className=" nav-link active col-2" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab"  aria-controls="nav-all"  aria-selected="true"  >  All
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
              {TopProductList.map((item,index)=>
                <div class=" col-md-3 p-2 " data-aos="fade-up" data-aos-duration="500">
                <div class=" card pb-3">
                    <div className="card-header text-center">{item.name}</div>
                    <div class="card-img "><img
                            src={item.photos
                            } style={{height:"270px" ,width:"270px"}}/>
                      </div>
                    <div class="post-content container mt-2">
                    <h6 className="text-center"> Price : {item.price}</h6>
                    <h6 className=""> Author:  {item.author}</h6>
                       
                     
                        <div class="post-logo d-flex align-items-center">
                        <button className="  text-uppercase  btn btn-outline-dark" type="submit">Add To Cart</button>
                      
                        </div>
                        <hr/>
                        <a class="readmore" href=""><span>Read More</span><i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>)}
             
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/construction-1.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">construction 1</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/repairs-1.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">repairs-1</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/design-1.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">design-1</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/remodeling-2.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">remodeling-2</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/construction-2.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">construction-2</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/repairs-2.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">repairs-2</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/design-2.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">design-2</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/remodeling-3.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">remodeling-3</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/construction-3.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">construction-3</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/repairs-3.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">repairs-3</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/design-3.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">design-3</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade container"
            id="nav-Remodeling"
            role="tabpanel"
            aria-labelledby="nav-remodeling-tab"
            tabIndex={0}
          >
            <div className="row">
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/remodeling-3.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">Remodeling 1</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/remodeling-2.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">Remodeling 1</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/remodeling-1.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">Remodeling 1</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade conainer"
            id="nav-Construction"
            role="tabpanel"
            aria-labelledby="nav-Construction-tab"
            tabIndex={0}
          >
            <div className="row">
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/construction-1.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">construction-1</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/construction-2.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">construction </div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/construction-3.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">construction 3</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade container"
            id="nav-Repair"
            role="tabpanel"
            aria-labelledby="nav-Repair-tab"
            tabIndex={0}
          >
            <div className="row">
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/repairs-1.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">repairs 1</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/repairs-2.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">repairs 2</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/repairs-3.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">repairs 3</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade container"
            id="nav-Design"
            role="tabpanel"
            aria-labelledby="nav-Design-tab"
            tabIndex={0}
          >
            <div className="row">
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/design-1.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">design 1</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/design-2.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">design 2</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
              <div className="all-img col-md-4 p-3">
                <div className="inner_box">
                  <img src="	https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/design-3.jpg" />
                </div>
                <div className="inner_box1">
                  <div className="bg-warning p-1">design 3 1</div>
                  <div className="icon">
                    <i className="bi bi-zoom-in" />
                    <i className="bi bi-link-45deg" />
                  </div>
                  <h5>Lorem ipsum, dolor sit amet consectetur</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>




  </>
}

export default TopInteresting;