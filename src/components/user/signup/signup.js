function SignUp(){
    return<>
      <div className="breadcrumbs-area ">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumbs-menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#" className="active">SignUp</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
     
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">

                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                    Sign up
                                </p>
                                <form className="mx-1 mx-md-4"  >
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                                        <div className="form-outline flex-fill mb-0">
                                            <input  type="text"className="form-control" placeholder="Enter Name" />
                                           
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                        <div className="form-outline flex-fill mb-0">
                                            <input  type="email"  className="form-control" placeholder="Enter Email" />
                                            
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="password"  className="form-control" placeholder="Enter Password"
                                            />
                                            
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-phone fa-lg me-3 fa-fw" />
                                        <div className="form-outline flex-fill mb-0">
                                            <input  type="text"  className="form-control" placeholder="Enter Contact" />
                                            
                                        </div>
                                    </div>
                                    
                                    <div className="form-check d-flex justify-content-center mb-5">
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            defaultValue=""
                                            id="form2Example3c"
                                        />
                                        <label className="form-check-label" htmlFor="form2Example3"> I agree all statements in{" "} <a href="#!">Terms of service</a>
                                        </label>
                                    </div>
                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button  type="submit" className="btn btn-dark btn-lg btn btn1">
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                <img
                                    src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?size=626&ext=jpg&ga=GA1.2.894235109.1681109678&semt=ais"
                                    className="img-fluid"
                                    alt="Sample image"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        
    
    </>
}

export default SignUp;