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
                                <div className="col-lg-3 col-md-4">
                                    <div className="myaccount-tab-menu nav" role="tablist">
                                        <a href="#dashboad" className="active" data-bs-toggle="tab"><i className="fa fa-dashboard"></i>
                                                Dashboard</a>
                                        <a href="#orders" data-bs-toggle="tab"><i className="fa fa-cart-arrow-down"></i>
                                                Orders</a>
                                       
                                        <a href="#payment-method" data-bs-toggle="tab"><i className="fa fa-credit-card"></i>
                                                Payment
                                                Method</a>
                                        <a href="#address-edit" data-bs-toggle="tab"><i className="fa fa-map-marker"></i>
                                                address</a>
                                        <a href="#account-info" data-bs-toggle="tab"><i className="fa fa-user"></i> Account
                                                Details</a>
                                        <a href="#"><i className="fa fa-sign-out"></i>SignOut</a>
                                    </div>
                                </div>
                              
                                <div className="col-lg-9 col-md-8">
                                    <div className="tab-content" id="myaccountContent">
                                       
                                        <div className="tab-pane fade show active" id="dashboad" role="tabpanel">
                                            <div className="myaccount-content">
                                                <h5>Dashboard</h5>
                                                <div className="welcome">
                                                    <p>Hello, <strong>Erik Jhonson</strong> (If Not <strong>Jhonson
                                                            !</strong><a href="login-register.html" className="logout"> Logout</a>)</p>
                                                </div>
                                                <p className="mb-0">From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and account details.</p>
                                            </div>
                                        </div>
                                     
                                        <div className="tab-pane fade" id="orders" role="tabpanel">
                                            <div className="myaccount-content">
                                                <h5>Orders</h5>
                                                <div className="myaccount-table table-responsive text-center">
                                                    <table className="table table-bordered">
                                                        <thead className="thead-light">
                                                            <tr>
                                                                <th>Order</th>
                                                                <th>Date</th>
                                                                <th>Status</th>
                                                                <th>Total</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Aug 22, 2018</td>
                                                                <td>Pending</td>
                                                                <td>$3000</td>
                                                                <td><a href="cart.html" className="btn btn-sqr">View</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>July 22, 2018</td>
                                                                <td>Approved</td>
                                                                <td>$200</td>
                                                                <td><a href="cart.html" className="btn btn-sqr">View</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>June 12, 2017</td>
                                                                <td>On Hold</td>
                                                                <td>$990</td>
                                                                <td><a href="cart.html" className="btn btn-sqr">View</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                   
                                      
                                      
                                        <div className="tab-pane fade" id="payment-method" role="tabpanel">
                                            <div className="myaccount-content">
                                                <h5>Payment Method</h5>
                                                <p className="saved-message">You Can't Saved Your Payment Method yet.</p>
                                            </div>
                                        </div>
                                       
                                        <div className="tab-pane fade" id="address-edit" role="tabpanel">
                                            <div className="myaccount-content">
                                                <h5>Billing Address</h5>
                                                <address>
                                                        <p><strong>Erik Jhonson</strong></p>
                                                        <p>1355 Market St, Suite 900 <br/>
                                                            San Francisco, CA 94103</p>
                                                            <p>Mobile: (123) 456-7890</p>
                                                    </address>
                                                <a href="#" className="btn btn-sqr"><i className="fa fa-edit"></i>
                                                        Edit Address</a>
                                            </div>
                                        </div>
                                       
                                        <div className="tab-pane fade mb-5" id="account-info" role="tabpanel">
                                            <div className="myaccount-content">
                                                <h5>Account Details</h5>
                                                <div className="account-details-form ">
                                                    <form action="#">
                                                    <div className="single-input-item" style={{marginLeft:'100px'}}>
                                                            <img src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=' style={{height:'200px' ,width:'200px',borderRadius:"10px"}} alt='Profile Image' />
                                                    </div>
                                                       
                                                        <div className="single-input-item">
                                                            <label for="display-name" className="required"> Name</label>
                                                            <input type="text" id="display-name" placeholder=" Name" />
                                                        </div>
                                                        <div className="single-input-item">
                                                            <label for="email" className="required">Email Addres</label>
                                                            <input type="email" id="email" placeholder="Email Address" />
                                                        </div>
                                                        <div className="single-input-item">
                                                            <label for="text" className="required">contact</label>
                                                            <input type="text" id="text" placeholder="contact" />
                                                        </div>
                                                        
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                       
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