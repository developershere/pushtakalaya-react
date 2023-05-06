import "./signup.css"
import { useRef, useState } from 'react'
import Header from "../../header/header";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"
import { apiEndPoint } from "../../../webApi/webapi";
import { Link, useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";
import 'react-toastify/dist/ReactToastify.css'
import Footer from "../../footer/footer";
import GoogleLogin from "../GoogleLogin";
function SignUp() {
    const [Otp, setOtp] = useState("");
    let name = useRef("");
    let email = useRef("");
    let password = useRef("");
    let contact = useRef("");
    let otp = useRef("");
    let mausam;
    let otpCheck = false;
    var mtime;
    const [modal,setModal] = useState(false);
    const navigate = useNavigate();

    const changeHome = () => {
        navigate("/")
    }
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            window.alert("fdd");
            let response = await axios.post(apiEndPoint.USER_SIGNUP, { name, email, password, contact });
            if (!response.data.status) {

                navigate("/signin");
            }
        }
        catch (err) {
            if (err.response.status == 400)
                toast.warning("Ohh!! something went wrong");
        }
    }

    const verifyEmail = async () => {
        try {
            console.log("sfdfdg");
            let response = await axios.post("/user/thakur", { name: name.current.value, email: email.current.value });
            mausam = response.data.result.OTP;
            setModal(response.data.status);
            window.alert("fgdg"+modal);
            mtime = response.data.result.currentTime;
            console.log("OTP : " + mausam);
            console.log("Time : " + mtime);
        }
        catch (err) {
            setModal(false);
            if (err.response.status == 400)
                toast.warning("User is Already Exist's");
            else
                toast.danger("Ohhoo Something went wrong");
        }
    }
    const registration = async (event) => {
        console.log(new Date().getMinutes());
        if (new Date().getMinutes() <= mtime) {
            if (mausam == otp.current.value) {
                otpCheck = true;
                let response = axios.post("/user/signup",{name,email,password,contact});
                toast("Registration Success....")
                console.log("Success....");
            }
            else
                toast.error("Invalid OTP...");
        }
        else
            toast.error("Ohho! OTP expires...");
    }

    const signupSubmitBtn = async () => {
        var name = await document.getElementById('name').value;
        var email = await document.getElementById('email').value;
        var password = await document.getElementById('password').value;
        var contact = await document.getElementById('contact').value;
        if (email.length && password.length >= 8 && name.length && contact.length == 10) {
            document.getElementById('signupsubmibtn').removeAttribute('disabled');
        }
        else {
            document.getElementById('signupsubmibtn').setAttribute('disabled');
        }
    }
    return <>
        <Header />
        <ToastContainer />
        <div className="breadcrumbs-area ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumbs-menu">
                            <ul>
                                <li><a onClick={changeHome}>Home</a></li>
                                <li><a href="#" className="active">SignUp</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="vh-100">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">

                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-2 order-lg-1 mb-3 signupimg" >
                                <img
                                    src="https://images.unsplash.com/photo-1591951425328-48c1fe7179cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                                    className="img-fluid img responsive" style={{ borderRadius: "0px 10% 0% 10%", boxShadow: "0px 0px 15px gray", height: "500px", width: " 90%", backgroundSize: "contain" }}
                                    alt="Sample image"
                                />
                            </div>
                            <div className="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-2">
                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ color: "#f07c29", textShadow: "2px 2px 2px gray" }}>
                                    Sign up
                                </p>
                                <form onSubmit={handleSubmit} id='registrationForm'>
                                    <div className="form-group">

                                        <input ref={name} type="text" onBlur={signupSubmitBtn} placeholder="Enter name" className="form-control" id="name" name="name" required />
                                    </div>
                                    <div className="form-group">
                                        <input ref={email} type="email" onBlur={signupSubmitBtn} placeholder="Enter email" className="form-control" id="email" name="email" required />
                                    </div>
                                    <div className="form-group">

                                        <input ref={password} type="password" onBlur={signupSubmitBtn} placeholder="Enter password" className="form-control" id="password" name="password" required />
                                    </div>
                                    <div className="form-group">
                                        <input ref={contact} type="text" onBlur={signupSubmitBtn} placeholder="Enter contact number" id="contact" className="form-control" required />
                                    </div>
                                    <div>
                                        <i className="fa fa-mars-stroke me-3" style={{ fontSize: "18px" }}></i>
                                        <input className="" type="radio" value="MALE" name="gender" defaultChecked /> Male
                                        <input className="mb-4 ms-4" type="radio" value="FEMALE" name="gender" /> Female
                                        <input className="mb-4 ms-4" type="radio" value="OTHER" name="gender" /> Other
                                    </div>
                                    <div>
                                        <i className="fa fa-user me-3"></i>
                                        <input className="mb-4" type="file" accept="image" required />
                                    </div>
                                    <div className="form-group text-center">
                                        <button onClick={(() => verifyEmail(email, name))} id="signupsubmibtn" type="submit" className="btn submitbtn1 w-100" data-toggle="modal" data-target="#exampleModalCenter" disabled >
                                            Sign Up
                                        </button>
                                            
                                    </div>

                                    <div className="text-center">
                                        <Link to='/signin'>I Already Have an Account</Link>
                                    </div>

                                </form>
                            </div>
                                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            Registration Page
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                            <div className="modal-body">
                                            <div className="container height-100 d-flex justify-content-center align-items-center">
                                                <div className="position-relative">
                                                    <div className="card p-2 text-center">
                                                        <h6>Please enter the one time password <br /> to verify your account</h6>
                                                        <div> <span>A code has been sent to</span> <small>Your Email Id</small> </div>
                                                        <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">
                                                            <input ref={otp} className="m-2 text-center form-control rounded width:10" type="text" id="fourth" maxlength="4" />
                                                        </div>
                                                        <div className="mt-4">
                                                            <button onClick={() => registration(mtime, mausam)} className="btn btn-warning px-4 validate">Validate</button>
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
        </section>
        <Footer />
    </>
}
export default SignUp;