 import "./signup.css"
function SignUp(){
    return <>
        {/* Hello world */}
        
        <div className="container-fluid">
            <div className="ragismain">
                <div className="loginform_div">
                    <div className="ragistrationMain">
                    <form className="descform" action="" method="post">
                        <div className="formHeading">
                            <p>Create Account</p>
                        </div>
                        <div className="form-group">
                            <label className="loginformlevel">Name</label>
                            <input type="text" name="userName" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="loginformlevel">Email Address </label>
                            <input type="email" name="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="loginformlevel">Password</label>
                            <input type="password" name="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="loginformlevel">Contact</label>
                            <input type="text" name="contact" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="loginformlevel">OTP</label>
                            <input type="text" name="otp" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="loginformlevel">choice file</label>
                            <input type="file" name="" className="form-control" />
                        </div>
                        <div className="ragisformbtn">
                            <button type="submit">Submit</button>
                            <a href="" style={{ float: "right" }} className="ExistUser">
                                Already have an account?
                            </a>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </>


   }
export default SignUp;