import { Link, useNavigate } from 'react-router-dom';
import './topbar.css'
import { useSelector } from 'react-redux';
import recentProduct from '../../router-config/recentProductSlice';
import axios from 'axios';
import { apiEndPoint } from '../../webApi/webapi';
import { useRef } from 'react';
function TopBar() {
    const { recentProductList, error } = useSelector(state => state.recentProduct);
    const { currentUser } = useSelector((state) => state.user);
    const keyword = useRef("");
    const navigate = useNavigate();
    function debounce(func, timeout = 3000) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
      }
      const saveInput = async(event)=>{
        console.log("Searching Books...");
        const response = await axios.post(apiEndPoint.SEARCH_BOOKS,{keyword : keyword.current.value});
        navigate("/book",{state:{books:response.data.Product,status:true}});
      }
      const processChange = debounce((event) => saveInput(event));

    return <>
        <div className="container-fluid topbarcontainr">
            <div className='row'>
                <div className='col-md-4 col-lg-4 col-sm-4 col-xm -4 topbardiv'>
                <Link to='/'>    <img src="img/logo/logo.png" alt="logo" style={{cursor:"pointer"}}  className='logoimg mb-3 pb-3 mt-1'  />
                    <span className='topbarlogoheading ' style={{cursor:"pointer"}} >Pustakalaya</span>
                    </Link>
                </div>
                <div className='col-md-4  col-lg-4 col-sm-4 col-xm -4 topbardiv'>
                    <div className="header-search mt-5">
                        <form action="#">
                            <input type="text"ref={keyword} onKeyUp={processChange} placeholder="Search entire store here..." />
                            <a href="#"><i className="fa fa-search"></i></a>
                        </form>
                    </div>
                </div>

                {/* ------------------------------------------- */}
                        <div className="col-lg-3 col-md-3 col-12 ">
                    <div className="header-mid-area ptb-40">
                     <div className="container">
               
                            <div className="my-cart">
                                <ul>
                                    <li>
                                        <Link className="view-cart" to="/cart" ><i className="fa fa-shopping-cart"></i>My Cart</Link>
                                        <span>2</span>
                                        <div className="mini-cart-sub">
                                            <div className="cart-product">
                                                {!error && recentProductList.map((product, index) =>

                                                    <div className="single-cart" key={index}>
                                                        <div className="cart-img">
                                                            <img src={"https://drive.google.com/uc?export=view&id=" + product.photos.substring(32, product.photos.lastIndexOf("/"))} className="img-fluid cardimg" />
                                                        </div>
                                                        <div className="cart-info">
                                                            <h5><a href="#">{product.name}</a></h5>
                                                            <p>{product.price}</p>
                                                        </div>
                                                        <div className="cart-icon">
                                                            <a href="#"><i className="fa fa-remove"></i></a>
                                                        </div>
                                                    </div>)}
                                            </div>
                                            <div className="cart-totals">
                                                <h5>Total <span>£12.00</span></h5>
                                            </div>
                                            <div className="cart-bottom">
                                                <Link className="view-cart" to="/cart" >view cart</Link>
                                                <a href="checkout.html">Check out</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-1 col-lg-1 col-sm-1 col-xm-1 '>
                    <div className='d-flex justify-content-end' >
                        <div className='mt-5 ml-4 me-3'  >
                            <Link to='/myaccount'><i className="fa fa-user logosymbol"></i></Link>
                        </div>

                    </div>

                </div>



                {/* -------------------------------- */}


            </div>

        </div>
    </>
}

export default TopBar;