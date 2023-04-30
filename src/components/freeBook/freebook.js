import { useEffect } from "react";
import React, { useState } from 'react'


import axios from "axios";




import { apiEndPoint } from "../../webapi/api";
import SideBar from "../sidebar";
import Header from "../header";
import Footer from "../Footer";


function FreeBook() {
    const[freeProduct,SetFreeProduct] = useState([]);
    const[freeerror,setFreeError] = useState(null)

    const loadFreeProduct=async()=>{
       try{
       let response =await axios.get(apiEndPoint.FREE_BOOK_API);
       if(response.data.status){
          
         SetFreeProduct(response.data.bookList)
       }
       }catch(err){
           setFreeError("oops Something Went Wrong");
       }
    }

    useEffect(()=>{
       loadFreeProduct()
    },[])


    return <>
    <Header/>
      <div class="container-fluid page-body-wrapper">
        <SideBar/>


        <div class="main-panel">
      
        <div class="content-wrapper">
            <div class="d-xl-flex justify-content-between align-items-start">
                <h2 class="text-dark font-weight-bold mb-2">Books</h2> </div>
            <div class="col-md-12">
                <div class="d-sm-flex justify-content-between align-items-center transaparent-tab-border {">

                </div>


            </div>

            <div className="container tablecontainer mb-5">
               

                    <table className="table">
                        <thead  className="table-thead text-white" >
                            <tr>
                                <th className="col-1">Sno.</th>
                                <th className="col-2">Image</th>
                                <th className="col-2">Book Name</th>
                                <th className="col-2">Author</th>
                                <th className="col-2">Price</th>
                                <th className="col-2">Permission</th>
                                <th className="col-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody>


                            {!freeerror && freeProduct.map((product, index) => <tr>
                                <td>{index + 1}</td>
                                <td><img src={"https://drive.google.com/uc?export=view&id=" + product.photos.substring(32, product.photos.lastIndexOf("/"))} style={{ width: 60, height: 60 }} alt="" /></td>
                                <td>{product.name.substring(0, 20)}</td>
                                <td>{product.author.substring(0, 10)}</td>

                                <td>{product.price}</td>
                                <td>{product.permission?"true":"false"}</td>
                                <td><button className="btn btn-outline-danger">status</button></td>
                            </tr>)}




                        </tbody>
                    </table>
              
            </div>

        </div>
        <Footer/>
        </div>
        </div>


    </>
}

export default FreeBook;