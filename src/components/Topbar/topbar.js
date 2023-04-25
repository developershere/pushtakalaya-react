import './topbar.css'
function TopBar() {
    return <>
        <div className="container-fluid topbarcontainr">
            <div className='row'>
                <div className='col-md-4 topbardiv'>
                    <img src="img/logo/logo.png" alt="logo" className='logoimg mb-3 pb-3 mt-1' />
                    <span className='topbarlogoheading ' >Pustakalaya</span>
                </div>
                <div className='col-md-4 topbardiv'>
                    <div className="header-search mt-5">
                        <form action="#">
                            <input type="text" placeholder="Search entire store here..." />
                            <a href="#"><i className="fa fa-search"></i></a>
                        </form>
                    </div>
                </div>
                <div className='col-md-4 topbardiv'>
                    <div className='text-center mt-5'>
                        <i className="fa fa-shopping-cart logosymbol"></i>
                        <span className='count'>2</span>
                    </div>
                </div>
                
            </div>

        </div>
    </>
}

export default TopBar;