import './forgetpassword.css'
function ForgetPassword() {
    return <>

        <div className="container">
            <div className="row m-auto">
                <div className="col-md-4 col-md-offset-4 m-auto forgetpassword mt-5" >
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="text-center">
                                <h3 className='mt-3'>
                                    <i className="fa fa-lock fa-4x lock" />
                                </h3>
                                <h2 className="text-center">Forgot Password?</h2>
                                <p>You can reset your password here.</p>
                                <div className="panel-body">
                                    <form  id="register-form" role="form" autoComplete="off" className="form" method="post"  >
                                        <div className="form-group">
                                            <div className="input-group mt-3">
                                                <span className="input-group-addon mt-2">
                                                    <i className="glyphicon glyphicon-envelope color-blue" />
                                                </span>
                                                <input  id="email" name="email" placeholder="Please Enter Verify Otp "className="form-control" type="email"  />
                                               
                                            </div>
                                            <div className="input-group mt-3">
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-envelope color-blue" />
                                                </span>
                                              
                                                <input  id="email" name="email" placeholder="Enter New Password"className="form-control" type="email"  />
                                              
                                            </div>
                                            <div className="input-group mt-3">
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-envelope color-blue" />
                                                </span>
                                
                                                <input  id="email" name="email" placeholder=""className="form-control" type="email"  />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                name="recover-submit"
                                                className="btn btn-lg cartbutton btn-block"
                                                defaultValue="Reset Password"
                                                type="submit"
                                            />
                                        </div>
                                        <input
                                            type="hidden"
                                            className="hide"
                                            name="token"
                                            id="token"
                                            defaultValue=""
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>


}

export default ForgetPassword;