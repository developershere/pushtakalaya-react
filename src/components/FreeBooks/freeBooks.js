import axios from "axios";
import { useEffect, useState } from "react";
import { apiEndPoint } from "../../webApi/webapi";
import Header from "../header/header";
import Footer from "../footer/footer";

function FreeBooks() {

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
            <section className="blog" id="blogid">
        <div className="container heading-design">
            <div className=" row">

                {!freeerror&&freeProduct.map((product,index)=> 
                <div key={index} className="col-md-3 col-sm-6 mt-5" data-aos="fade-up" data-aos-duration="500">
              <div className="card">
              <img src= {"https://drive.google.com/uc?export=view&id="+product.photos.substring(32,product.photos.lastIndexOf("/"))}  className="img-fluid cardimg"/> 
              <a className="card-action"><i className="fa fa-shopping-cart carticon mt-3"></i></a>
                <div className="card-body">
                  <p className="card-text cardtitle">{product.name.substring(0,20)}</p>
                  <p className="cardprice"><span className="cardtitle">Author: </span>{product.author.substring(0,15)}</p>
                  <b className="card-text cardprice"><span className="cardtitle">Price: </span>₹{product.price}</b>
                  <br/>
                  <button className="btn mt-2 w-100 buttonhover" >View More</button>
                </div>
              </div>
            </div>)}
               
            </div>
         </div>
    </section>
   
    <Footer/>
    </>
}

export default FreeBooks;