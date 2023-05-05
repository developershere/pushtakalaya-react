import { useSelector } from "react-redux";
import"./myaccount.css"
import{useNavigate} from "react-router-dom"

import Order from "./order";
import Payment from "./payment";
import BillingAdress from "./billing";
import Account from "./account";
import SideBar from "./sidebar";
import UserBooks from "./userbook";
function MyAccount(){

    return<>
     <div className="breadcrumbs-area mb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumbs-menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#" className="active">my-account</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="entry-header-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="entry-header-title">
                        <h2>My-Account</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div className="my-account-wrapper mb-70">
        <div className="container">
            <div className="section-bg-color">
                <div className="row">
                    <div className="col-lg-12">
                      
                        <div className="myaccount-page-wrapper">
                         
                            <div className="row">
                               <SideBar/>
                              
                                <div className="col-lg-9 col-md-8">
                                    <div className="tab-content" id="myaccountContent">
                                       
                                        <UserBooks/>
                                        <Order/>
                                         <Payment/>
                                       <BillingAdress/>
                                       <Account/>   
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
}

export default MyAccount;