import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "../Topbar/topbar";
import { signout } from "../../router-config/userSlice";
import { toast } from "react-toastify";
function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { categoryList, error, isLoading } = useSelector((state) => state.category)
    const currentUser = useSelector((state) => state.user.currentUser);
    const signOut = () => {
        dispatch(signout())
        toast.info("Sign Out SuccesFully");
    }
    function searchCategory(){
        navigate("/book")
    }
    return <>
        <header>
            <TopBar />
            <div className="main-menu-area d-md-none d-none d-lg-block sticky-header-1" id="header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="menu-area">
                                <nav>
                                    <ul>
                                        <li className="active"><Link to='/'>Home</Link>

                                        </li>
                                        <li><Link to='/book'>Book</Link></li>
                                        <li><a className="text-white" style={{cursor:"pointer"}}>Categories<i className="fa fa-angle-down"></i></a>

                                            <div className="mega-menu">
                                                {!error && categoryList.map((category, index) =>
                                                    <span key={index}>
                                                        <a style={{cursor:"pointer"}} onClick={searchCategory}>{category.categoryName}</a>
                                                    </span>
                                                )}


                                            </div>
                                        </li>
                                        <li><Link to='/donate'>Donate Books</Link></li>
                                        <li><Link to='/freebooks'>Free Books</Link> </li>
                                        <li> <Link to='/sellbooks'>Sell Books</Link></li>
                                        {currentUser ? <li><Link onClick={signOut}>SignOut</Link></li> : <li><a href="#">MyAccount<i className="fa fa-angle-down"></i></a>
                                            <div className="sub-menu sub-menu-2">
                                                <ul>
                                                    <li><Link to='/signup'>SignUp</Link></li>
                                                    
                                                    <li><Link to='/signin'>SignIn</Link></li>
                                                </ul>
                                            </div>
                                        </li>}
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
                                    <li>
                                        <Link to="/"> Home</Link>
                                    </li>
                                    <li><Link to="/book">Book</Link> 
                                       
                                    </li>
                                    <li><a href="product-details.html">Categories</a>
                                        <ul>
                                            {!error && categoryList.map((category, index) =>
                                                    <li key={index} >
                                                        <span onClick={searchCategory} >{category.categoryName} </span>
                                                    </li>
                                                )}
                                        </ul>
                                    </li>
                                    <li><Link to="/donate"> 
                                        Donate Books
                                        </Link>
                                    </li>
                                    <li><Link to='/freebooks'>Free Books</Link>
                                    </li>
                                     <li><Link to='/sellbooks'>Sell Books</Link></li>
                                    <li><a href="product-details.html">Page</a>
                                        <ul>
                                            <li><Link to='/signup'>SignUp</Link></li>
                                            <li><Link to='/signin'>SignIn</Link></li>
                                        </ul>
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