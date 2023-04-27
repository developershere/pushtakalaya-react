import { Link,useNavigate } from 'react-router-dom';
import './topbar.css'
import { useSelector } from 'react-redux';
function TopBar() {
    // const {recentProductList,error} = useSelector(state=>state.recentProduct);
    const{currentUser}=useSelector((state)=>state.user);
    const navigate = useNavigate();
    function debounce(func, timeout = 3000){
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
      }
      function saveInput(){
        console.log("Searching Books...");
        navigate("/book");
      }
      const processChange = debounce(() => saveInput());
    return <>
        <div className="container-fluid topbarcontainr">
            <div className='row'>
                <div className='col-md-4 col-lg-4 col-sm-4 col-xm -4 topbardiv'>
                    <img src="img/logo/logo.png" alt="logo"  className='logoimg mb-3 pb-3 mt-1'  />
                    <span className='topbarlogoheading ' >Pustakalaya</span>
                </div>
                <div className='col-md-4  col-lg-4 col-sm-4 col-xm -4 topbardiv'>
                <div className="header-search mt-5">
                            <form action="#">
                                <input type="text" onKeyUp={processChange} placeholder="Search entire store here..." />
                                <a href="#"><i className="fa fa-search"></i></a>
                            </form>
                    </div>
                </div>
                <div className='col-md-4 col-lg-4 col-sm-4 col-xm -4 topbardiv'>
                <div className='d-flex justify-content-end' >
                <div class="col-lg-3 col-md-3 col-12 mt-4">
                        <div class="my-cart">
                            <ul>
                                <li>
                            <Link class="view-cart" to="/cart" ><i class="fa fa-shopping-cart"></i>My Cart</Link>
                                    <span>2</span>
                                    <div class="mini-cart-sub">
                                        <div class="cart-product">
                                        {/* {!error && recentProductList.map((product,index)=>  */}

                                            <div class="single-cart" >
                                                <div class="cart-img">
                                                {/* <img src= {"https://drive.google.com/uc?export=view&id="+product.photos.substring(32,product.photos.lastIndexOf("/"))}  className="img-fluid cardimg"/>  */}
                                                </div>
                                                <div class="cart-info">
                                                    <h5><a href="#"></a></h5>
                                                    <p></p>
                                                </div>
                                                <div class="cart-icon">
                                                    <a href="#"><i class="fa fa-remove"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cart-totals">
                                            <h5>Total <span>£12.00</span></h5>
                                        </div>
                                        <div class="cart-bottom">
                                            <Link class="view-cart" to="/cart" >view cart</Link>
                                            <a href="checkout.html">Check out</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                   <div className='mt-5 ml-4 me-3'  >
                   <Link to='/myaccount'><i className="fa fa-user logosymbol"></i></Link>
                   </div>
                   
                   </div>
                   
                </div>
                
            </div>

        </div>
    </>
}

export default TopBar;