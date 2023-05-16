import { useState } from 'react';
import './forgetpassword.css'
import { Link } from 'react-router-dom';
function ForgetPassword() {

  const handlesubmit=(event)=>{
               event.preventDefault();
    }

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
                                <h2 className="text-center changepasswordHeading">Forgot Password?</h2>
                                <p>You can reset your password here.</p>
                                <div className="panel-body">
                                    <form>
                                      
                                        <div className="form-group">
                                            <div className="input-group mt-3">
                                                <span className="input-group-addon mt-2">
                                                    <i className="glyphicon glyphicon-envelope color-blue" />
                                                </span>
                                                <input id="email" name="email"  placeholder="Please Enter Email " className="form-control" type="email" />

                                            </div>
                                           
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-envelope color-blue" />
                                                </span>
                                                <button class="cartbutton " data-toggle="collapse" href="#collapseExample" role="button" onClick={handlesubmit} aria-expanded="false" aria-controls="collapseExample">Send OTP</button>
                                               


                                            </div>
                                            <div class="collapse" id="collapseExample">
                                            <div className="input-group mt-3">
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-envelope color-blue" />
                                                </span>

                                                <input id="email" name="email" placeholder="Enter Otp" className="form-control" type="number" />
                                            </div>
                                            <div className="form-group">
                                         <Link to='/changePassword'><input name="recover-submit" className="btn btn-lg cartbutton btn-block" defaultValue="Reset Password"  type="submit"
                                            /></Link>   
                                        </div>
                                           
                                            </div>

                                        </div>
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


