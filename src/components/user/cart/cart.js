import Footer from "../../footer/footer";
import Header from "../../header/header";
import "./cart.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addItemInToCart, setCartItems } from "../../../router-config/CartSlice";
import { apiEndPoint } from "../../../webApi/webapi";
import { toast, ToastContainer } from "react-toastify";
function Cart(){
    const [productList,setProductList] = useState([]);
    const [error, setError] = useState("");
    const [isLoading,setIsLoading]= useState(true);
    const {currentUser} = useSelector(state=>state.user);
    const {cartItems,flag} = useSelector(state=>state.cart);
    const dispatch = useDispatch();
    var amount=0;
    const navigate =useNavigate();
    console.log("Mausam : "+cartItems);
    const loadProducts = async()=>{
       try{
        window.alert("dghfggsg")
        let response = await axios.post(apiEndPoint.FETCH_CART,{userId:currentUser._id});
        console.log(response.data);  
        dispatch(setCartItems(response.data.cart));
       }
      catch(err){
         setError("Oops! something went wrong..");
      }
    }
    
    useEffect(()=>{
      loadProducts();
    },[]);

    const changeHome = () => {
        navigate("/")
      }
    return<>
    <Header/>
   <div className="breadcrumbs-area ">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumbs-menu">
                        <ul>
                            <li><a onClick={changeHome}>Home</a></li>
                            <li><a href="#" className="active">cart</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

   
  
    <div class="container-fluid addtocartcontainer mb-70">
       
       <div class=" row">
           <div class="  ml-4 mt-5 col-sm-8 col-md-8 col-xm-8 ">
               <div class=" headingcart row col-md-12 mt-2">
                   <h5 class=" cartmainheading">My Cart()</h5>
               </div>
             
              
               {!flag && cartItems?.map((product,index)=>
               <div class="addtocartdiv row mt-3">
                   <div class="col-md-2 col-sm-4 ">
                       <img  src= {"https://drive.google.com/uc?export=view&id="+product.bookId.photos.substring(32,product.bookId.photos.lastIndexOf("/"))}  class="imgcart mt-2 img img-fluid img-responsive img-thumbnail" alt=""/>
                   </div>
                   <div class="col-md-7 mt-2 ">
                       <h6 class="mt-2 cartscontainheading">{product.bookId.name}</h6>
                       <h6 class="contentcart"><span class="carttitle">Author : </span>{product.bookId.author}</h6>
                       <h6 class="contentcart"><span class="carttitle">Price : </span>{product.bookId.price} Rs</h6>
                       <h6 class="carttitle">Shipping & Handling charges   ₹30</h6>
                   </div>
                  
                   <div class="col-md-3 text-center">
                       <button class="cartbutton">Remove</button>
                   </div>

               </div>)}
             

           </div>

           <div class="col-md-3 col-xm-3 col-sm-3  addtocartdivafter ml-5 mt-5 ">
              <div class="cartscontainheading  mt-5">
              {!flag && cartItems?.map((product,index)=> {amount= amount+product.bookId.price*1})}
               <h6>Pay Only for Shipping  <span class="ml-1"> :₹{!flag&&cartItems?.length*20} ({!flag&&cartItems?.length} Books)</span></h6>
                <h6>Bill Amount<span class="ml-5 pl-3"> :  ₹ {amount}</span></h6>
               <h6>Total Amount<span class="ml-5 pl-3">: ₹ {amount+(!flag&&cartItems?.length*20)}</span></h6>
              </div>
            <button class="btn-block cartcheckoutbutton mt-5">Procced To checkout</button>
           </div>
       </div>
   </div>
   




    <Footer/>
    </>
}

export default Cart;