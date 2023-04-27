import "./signup.css"
import { isVisible } from "@testing-library/user-event/dist/utils";
import { useRef, useState } from 'react'
import Header from "../../header/header";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify"
import { apiEndPoint } from "../../../webApi/webapi";
import { useNavigate } from "react-router-dom";
import {createAsyncThunk} from "@reduxjs/toolkit";
function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
    let [otp,setOtp] = useState("");
    
    let mausam;
    let expire = false;
    let otpCheck = false;
    let mtime;
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            let response = await axios.post(apiEndPoint.USER_SIGNUP, { name, email, password, contact });
            window.alert(response)
            if (!response.data.status) {

                navigate("/signin");
            }
        }
        catch (err) {

        }
    }
    const verifyEmail = async ()=>{
        console.log("sfdfdg");
        let response = await axios.post("/user/mausam",{name,email});
        mausam = response.data.result.OTP;
        mtime = response.data.result.currentTime;
       console.log("OTP : "+mausam);
       console.log("Time : "+mtime);        
    }
    const registration = async()=>{
        if(new Date().getMinutes()<=mtime+5){
            expire = true;
            if(mausam==otp)
            {
                otpCheck = true;
                toast("Registration Success....")
                console.log("Success....");
            }
            else
                toast("Invalid OTP...");
        }
        else
            toast("Ohho! OTP expires...");
    }
    return <>
        <Header />
        <ToastContainer/>
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
                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-2 order-lg-1" >
                                <img
                                    src="https://storage.googleapis.com/prod-relayread-com/static/frontend/images/flow-resp.png"
                                    className="img-fluid" style={{ borderRadius: "0px 10% 0% 10%", boxShadow: "0px 0px 15px gray" }}
                                    alt="Sample image"
                                />
                            </div>
                            <div className="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-2">
                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                    Sign up
                                </p>
                                <form onSubmit={handleSubmit}>
                                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                                    <div className="form-group">

                                        <input onChange={(event) => setName(event.target.value)} type="text" placeholder="Enter name" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Enter email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Enter password" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={(event) => setContact(event.target.value)} type="text" placeholder="Enter contact number" className="form-control" />
                                    </div>
                                    <div className="form-group text-center">
                                        <button onClick={(()=>verifyEmail(email,name))} type="submit" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                            Sign Up
                                        </button>
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
                                            <div class="container height-100 d-flex justify-content-center align-items-center">
                                                <div class="position-relative">
                                                    <div class="card p-2 text-center">
                                                        <h6>Please enter the one time password <br /> to verify your account</h6>
                                                        <div> <span>A code has been sent to</span> <small>Your Email Id</small> </div>
                                                        <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2"> 
                                                        <input onChange={(event) => setOtp(event.target.value)} class="m-2 text-center form-control rounded width:10" type="text" id="fourth" maxlength="4" />
                                                        </div>
                                                        <div class="mt-4">
                                                         <button onClick={()=>registration(otp)} class="btn btn-danger px-4 validate">Validate</button> 
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
    </>
}

export default SignUp;