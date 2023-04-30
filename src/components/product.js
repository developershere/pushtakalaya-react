import { useEffect, useRef } from "react";
import React, { useState } from 'react'


import axios from "axios";



import SideBar from "./sidebar";
import Header from "./header";
import Footer from "./Footer";
import { apiEndPoint } from "../webapi/api";
import { toast } from "react-toastify";
import Spinner from "./Spinner/spinner";
import InfiniteScroll from "react-infinite-scroll-component";


function Product() {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [permission,setPermission] = useState("");
    let permissionObject =useRef("");

  const showPermission=async(event)=>{
    setPermission(event);
    console.log(permission);
  }


  

    const fetchProduct = async () => {
        try {
            const response = await axios.get(apiEndPoint.BOOK_LIST + `?page=${page}`);
            if (response.data.status) {
                console.log(response.data.bookList);
                setData(response.data.bookList);
                setData([...data, ...response.data.bookList]);
                setPage(page + 1);
                setIsLoading(false);
            }
        } catch (err) {
            setError("oops Something Went Wrong")
            toast.error("oops Soething Went Wrong");
        }
    }



    const removeBook = async (product) => {
        console.log(product._id);

        try {
            window.alert(product);
            if(window.confirm("Are You Sure")){
           let response= await axios.post(apiEndPoint.REMOVE_BOOK,{id:product._id,name:product.name,description:product.description,
            author:product.author,language:product.language,edition:product.edition, publicationDate:product.publicationDate,pincode:product.pincode,cityId:product.cityId,
            categoryId:product.categoryId,photos:product.photos,price:product.price,userId:product.userId,stateId:product.stateId,status:"false"});
           console.log(response.data)
            // toast.info("Category Remove Succesfully")
            // let index =  categoryList.findIndex((category)=>category._id==categoryId);
            // categoryList.splice(index,1);
            //     setCategoryList([...categoryList]);
            }
        } catch (err) {
            toast.setError("Something Went Wrong");
        }

    }



    useEffect(() => {
        fetchProduct();
    }, []);



    return <>
    <Header />
      <div class="container-fluid page-body-wrapper">
        <SideBar />


        <div class="main-panel">
        <div class="content-wrapper">
            <div class="d-xl-flex justify-content-between align-items-start">
                <h2 class="text-dark font-weight-bold mb-2">Books</h2> </div>
            <div class="col-md-12">
                <div class="d-sm-flex justify-content-between align-items-center transaparent-tab-border {">

                </div>


            </div>

            <div className="container tablecontainer mb-5">
                <InfiniteScroll
                    dataLength={data.length}
                    next={fetchProduct}
                    hasMore={data.length < 50}
                    loader={<Spinner />}
                    endMessage={<p>Data End...</p>}>

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


                            {!error && data.map((product, index) => <tr>
                                <td>{index + 1}</td>
                                <td><img src={"https://drive.google.com/uc?export=view&id=" + product.photos.substring(32, product.photos.lastIndexOf("/"))} style={{ width: 60, height: 60 }} alt="" /></td>
                                <td>{product.name.substring(0, 20)}</td>
                                <td>{product.author.substring(0, 10)}</td>

                                <td>{product.price}</td>
                              
                                <td>{product.permission?"true":"false"}</td>
                                <td><button className="btn btn-outline-danger"  onClick={() => removeBook(product)}>status</button></td>
                            </tr>)}




                        </tbody>
                    </table>
                </InfiniteScroll>
            </div>
          </div>
        </div>
        </div>

    </>
}

export default Product;