import { useState } from 'react';
import './signin.css'
import axios from 'axios';
import { apiEndPoint } from '../../../webApi/webapi';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../../router-config/userSlice';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';
import TopBar from '../../Topbar/topbar';
import Header from '../../header/header';
import { fetchCart} from '../../../router-config/CartSlice';
import Footer from '../../footer/footer';
function SignIn(){

  const [email, SetEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit=async(event)=>{
    try{
    event.preventDefault();
    let response = await axios.post(apiEndPoint.USER_SIGNIN,{email,password})
    if(response.data.status){
      let carts = await axios.post(apiEndPoint.FETCH_CART,{userId:response.data.user._id})
      dispatch(setCurrentUser(response.data.user));
      dispatch(fetchCart(response.data.user._id));
      toast.success("Welcome To Pustakalaya")
      navigate("/")

        return response.data.user;
      }
    } catch (err) {
      console.log(err)
      toast.error("Sign In Failed");
    }
  }
 function sub () {
  window.alert("sdafds");
    var email = document.getElementById('floatingInput').value;
    var pass = document.getElementById('floatingPassword').value;

    if(email.length && pass.length ){
      window.alert("if called..");
       document.getElementById('submitbtn').removeAttribute('disabled');
    }
}

  const changeHome = () => {
    navigate("/")
  }
    return <>
    <ToastContainer/>
    <Header/>
    <div className='container-fluid'>
     <div className="breadcrumbs-area ">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumbs-menu">
                        <ul>
                            <li><a onClick={changeHome}>Home</a></li>
                            <li><a href="#" className="active">SignIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid ps-md-0">
     
  <div className="row g-0">
    <div className="d-none d-md-flex col-md-4 col-lg-5 ms-5 sign-image">
      
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
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input  onChange={(event)=>setPassword(event.target.value)}type="password" className="form-control" onBlur={sub} id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="d-grid">
                  <button id='submitbtn' disabled className="btn btn-lg btn-login text-uppercase fw-bold mb-2  btn btn-dark" type="submit">Sign in</button>
                  <div className="text-center">
                    <a className="small" href="#">Forgot password?</a>
                  </div>
                  <div className="text-center">
                    <a className="" href="#">I Don't Have an Account</a>
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
</div>
<Footer/>
    </>
}

export default SignIn;