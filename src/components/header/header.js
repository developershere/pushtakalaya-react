import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TopBar from "../Topbar/topbar";

function Header(){
    const{categoryList,error,isLoading} = useSelector((state)=>state.category)
    console.log(categoryList)


    return <>
     <header>
    
    <TopBar/>


       
        <div className="main-menu-area d-md-none d-none d-lg-block sticky-header-1" id="header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="menu-area">
                            <nav>
                                <ul>
                                    <li className="active"><Link to='/'>Home</Link>
                                       
                                    </li>
                                    <li><a href="">Book</a></li>
                                    <li><a className="text-white">Categories<i className="fa fa-angle-down"></i></a>
                                   
                                        <div className="mega-menu">
                                           {!error&&categoryList.map((category,index)=>
                                               <span key={index}>
                                               <a>{category.categoryName}</a>
                                               </span>
                                            )}
                                           
                                           
                                        </div>
                                    </li>
                                    <li><Link to='/freebooks'>Free Books</Link> </li>
                                    <li><a href="#">MyAccount<i className="fa fa-angle-down"></i></a>
                                        <div className="sub-menu sub-menu-2">
                                            <ul>
                                                <li><Link to='signup'>SignUp</Link></li>
                                                <li><Link to='signin'>SignIn</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><Link to='/donate'>Donate Books</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="safe-area">
                        <Link to='/sellbooks'>Sell Books</Link>
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
                                    <li><a href="product-details.html">Book</a>
                                       
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