import { Link } from 'react-router-dom';
import './topbar.css'
function TopBar() {
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
                                <input type="text" placeholder="Search entire store here..." />
                                <a href="#"><i className="fa fa-search"></i></a>
                            </form>
                        </div>
                </div>
                <div className='col-md-4 col-lg-4 col-sm-4 col-xm -4 topbardiv'>
                <div className='d-flex justify-content-end' >
                   <div className='text-center   mt-5' >
                   <i className="fa fa-shopping-cart logosymbol"></i>
                   <span className='count'>2</span></div>
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