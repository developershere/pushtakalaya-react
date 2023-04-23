import "./signin.css";

function SignIn(){
    return <>
        {/* Hello world */}
        <div className="container-fluid">
            <div className="logimain">
                <div className="loginform_div">
                    <form action="/signin" method="post">
                        <div className="formHeading">
                            <p>Registered Customers</p>
                        </div>
                        <div className="peraLogin">
                            <p>If you have an account with us, please log in.</p>
                        </div>
                        <div>
                            <div className="form-group">
                                <label className="loginformlevel">Email Address </label>
                                <input type="email" name="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="loginformlevel">Password</label>
                                <input type="password" name="password" className="form-control" />
                            </div>
                            <div className="loginformbtn">
                                <button type="submit">Login</button>
                                <span className="loginforgotpassword">
                                    
                                    Forgot Your Password?
                                </span>
                                <a href="/signup" style={{ float: "right" }} className="newUser">
                                    New user ?
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>

    
}

export default SignIn ;