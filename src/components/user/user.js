import { useEffect } from "react";
import React, { useState } from 'react'


import axios from "axios";





import { toast } from "react-toastify";
import { apiEndPoint } from "../../webapi/api";
import SideBar from "../sidebar";
import Header from "../header";
import { useDispatch } from "react-redux";




function User() {
    const [user, setUser] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
   
    const dispatch =useDispatch();


    const fetchUser = async () => {
        try {
            const response = await axios.get(apiEndPoint.USER_LIST );
            if (response.data.status) {
                console.log(response.data.user);
                setUser(response.data.user);
                
                setIsLoading(false);
            }
        } catch (err) {
            setError("oops Something Went Wrong")
            toast.error("oops Soething Went Wrong");
        }
    }
    useEffect(() => {
        fetchUser();
    }, []);



    return <>
    <Header/>
      <div class="container-fluid page-body-wrapper">
        <SideBar/>
        <div class="main-panel">
      
        <div class="content-wrapper">
            <div class="d-xl-flex justify-content-between align-items-start">
                <h2 class="text-dark font-weight-bold mb-2">All User</h2> </div>
           

            <div className="container tablecontainer">
               

                    <table className="table">
                        <thead  className="table-thead text-white" >
                            <tr>
                                <th className="col-1">Sno.</th>
                                <th className="col-2">User Name</th>
                                <th className="col-2">Email</th>
                                <th className="col-2">Contact</th>
                               
                            </tr>
                        </thead>
                        <tbody>


                             {!error && user.map((user, index) => <tr>
                                <td>{index + 1}</td>
                             
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.contact}</td>
                            </tr>)} 




                        </tbody>
                    </table>
                    
              
            </div>

        </div>
        </div>
        </div>


    </>
}

export default User;