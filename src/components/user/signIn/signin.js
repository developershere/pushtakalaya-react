import { useState } from 'react';
import './signin.css'
import axios from 'axios';
import { apiEndPoint } from '../../../webApi/webapi';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../../router-config/userSlice';
import 'react-toastify/dist/ReactToastify.css'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../header/header';
function SignIn(){

  const[email,SetEmail]= useState(" ");
  const[password,setPassword]= useState(" ");
  const dispatch = useDispatch();
  const navigate= useNavigate();


  const handleSubmit=async(event)=>{
    try{
    event.preventDefault();
    let response = await axios.post(apiEndPoint.USER_SIGNIN,{email,password})
    if(response.data.status){
      dispatch(setCurrentUser(response.data.user));
      toast.success("Sign in Success")
      navigate("/")

      return response.data.user;
    }
  }catch(err){
    toast.error("Sign In Failed");
  }
  }

  const changeHome=()=>{
    navigate("/")
  }
    return <>

    <Header/>
      <ToastContainer/>
     <div className="breadcrumbs-area ">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumbs-menu">
                        <ul>
                            <li style={{cursor:"pointer"}}><a onClick={changeHome} >Home</a></li>
                            <li style={{cursor:"pointer"}}><a href="#" className="active">SignIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div className="container-fluid ps-md-0">
     
  <div className="row g-0">
    <div className="d-none d-md-flex col-md-4 col-lg-5 sign-image">

    </div>
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
              <h3 className="login-heading mb-4 welcome">Welcome Back!</h3>

             
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input onChange={(event)=>SetEmail(event.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email Address</label>
                </div>
                <div className="form-floating mb-3">
                  <input  onChange={(event)=>setPassword(event.target.value)}type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
                </div>

                

                <div className="d-grid">
                  <button className="btn btn-lg  btn-login text-uppercase fw-bold mb-2  btn btn-dark " type="submit">Sign in</button>
                  <div className="text-right">
                    <a className="small" href="#">Forgot password?</a>
                  </div>
                </div>

                <div className="d-grid">
                  <div className="text-center">
                    
                    <Link to='/signup' style={{color:"black" , fontSize:"15px"}}> Don't Have an Account</Link> 
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

export default SignIn;