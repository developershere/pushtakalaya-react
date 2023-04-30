import Footer from "../../footer/footer";
import Header from "../../header/header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
    return<>
    <Header/>
   <div className="breadcrumbs-area mb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumbs-menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#" className="active">cart</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="entry-header-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="entry-header-title">
                        <h2>Cart</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div className="cart-main-area mb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <form action="#">
                        <div className="table-content table-responsive mb-15 border-1">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="product-thumbnail">Image</th>
                                        <th className="product-name">Product</th>
                                        <th className="product-price">Price</th>
                                        <th className="product-quantity">Quantity</th>
                                        <th className="product-subtotal">Total</th>
                                        <th className="product-remove">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {!flag && cartItems.map((product,index)=> <tr>
                                        <td className="product-thumbnail" key={index} >
                                            <a href="#"> <img src= {"https://drive.google.com/uc?export=view&id="+product.bookId.photos.substring(32,product.bookId.photos.lastIndexOf("/"))}  className="img-fluid cardimg"/> </a>
                                        </td>
                                        <td className="product-name"><a href="#">{product.bookId.name}</a></td>
                                        <td className="product-price"><span className="amount">{product.bookId.price}</span></td>
                                        <th className="product-quantity"><input type="text" /></th>
                                        <td className="product-subtotal">{product.bookId.price*1}</td>
                                        <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                    </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
}

export default Cart;