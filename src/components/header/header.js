import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TopBar from "../Topbar/topbar";

function Header(){
    const{categoryList,error,isLoading} = useSelector((state)=>state.category)

    return <>
     <header>
    
    <TopBar/>
    <div className="main-menu-area d-md-none d-none d-lg-block sticky-header-1" id="header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="menu-area">
                            <nav>
                                <ul className="">
                                    <li className="active"style={{textDecoration:"none"}}><Link to='/myaccount'>Home</Link>
                                       
                                    </li>
                                        <li><Link to="/book" style={{textDecoration:"none"}}>Book</Link></li>
                                    <li><a className="text-white" style={{textDecoration:"none"}}>Categories<i className="fa fa-angle-down" ></i></a>
                                   
                                        <div className="mega-menu">
                                           {!error&&categoryList.map((category,index)=>
                                               <span key={index}>
                                               <a>{category.categoryName}</a>
                                               </span>
                                            )}
                                           
                                           
                                        </div>
                                    </li>
                                    <li><Link to='/freebooks' style={{textDecoration:"none"}}>Free Books</Link> </li>
                                    <li><a href="#"style={{textDecoration:"none"}}>MyAccount<i className="fa fa-angle-down"></i></a>
                                        <div className="sub-menu sub-menu-2">
                                            <ul>
                                                <li><Link to='signup'>SignUp</Link></li>
                                                <li><Link to='signin'>SignIn</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><Link to='/donate'style={{textDecoration:"none"}}>Donate Books</Link></li>
                                    <li><Link to='/donate'style={{textDecoration:"none"}}>Sell Books</Link></li>
                                </ul>
                            </nav>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
       
        <div className="mobile-menu-area d-lg-none d-block fix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mobile-menu">
                            <nav id="mobile-menu-active">
                                <ul id="nav">
                                    <li><a href="index.html">Home</a>
                                       
                                    </li>
                                    <li><Link href="product-details.html">Book</Link>
                                       
                                    </li>
                                    <li><a href="product-details.html">Free Books</a>
                                       
                                       </li>
                                    <li><a className="text-white">Categories<i className="fa fa-angle-down"></i></a>
                                   
                                   <div className="mega-menu">
                                      {!error&&categoryList.map((category,index)=>
                                          <span key={index}>
                                          <a>{category.categoryName}</a>
                                          </span>
                                       )}
                                      
                                      
                                   </div>
                               </li>
                                  
                                    <li><a href="#">MyAccount<i className="fa fa-angle-down"></i></a>
                                        <div className="sub-menu sub-menu-2">
                                            <ul>
                                                <li><Link to='/signup'>SignUp</Link></li>
                                                <li><Link to='/signin'>SignIn</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><Link to='/donate'>Donate Books<i className="fa fa-angle-down"></i></Link>
                                       
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </header>
    </>
}

export default Header;