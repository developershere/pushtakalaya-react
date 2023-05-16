import'./changepassword.css'
function ChangePassword(){
   return <>
 
    <div className="container">
            <div className="row m-auto">
                <div className="col-md-4 col-md-offset-4 m-auto forgetpassword mt-5" >
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="text-center">
                                <h3 className='mt-1'>
                                    <img src='\img\changepassword.jpg' alt='Image No Found' className='changepasswordimg'/>
                                </h3>
                                <h2 className="text-center mt-2">Change Password?</h2>
                                
                                <div className="panel-body">
                                    <form>
                                      
                                        <div className="form-group">
                                            <div className="input-group mt-3">
                                                <span className="input-group-addon mt-2">
                                                    <i className="glyphicon glyphicon-envelope color-blue" />
                                                </span>
                                                <input   placeholder="Enter New Password " className="form-control" type="text" />

                                            </div>
                                            <div className="input-group mt-3">
                                                <span className="input-group-addon mt-2">
                                                    <i className="glyphicon glyphicon-envelope color-blue" />
                                                </span>
                                                <input    placeholder="Enter Confirm Password " className="form-control" type="text" />

                                            </div>
                                           
                                            
                                          
                                   
                                            <div className="form-group">
                                         <input name="recover-submit" className="btn btn-lg changepasswordbutton btn-block" defaultValue="Reset Password"  type="submit"
                                            /> 
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

export default ChangePassword;