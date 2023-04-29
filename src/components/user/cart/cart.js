import Footer from "../../footer/footer";
import Header from "../../header/header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItemInToCart } from "../../../router-config/CartSlice";
import { apiEndPoint } from "../../../webApi/webapi";
import { toast, ToastContainer } from "react-toastify";

function Cart(){

    const [productList,setProductList] = useState([]);
    const [error, setError] = useState("");
    const [isLoading,setIsLoading]= useState(true);
    const {currentUser} = useSelector(state=>state.user);
    const {cartItems,flag, cartError} = useSelector(state=>state.cart);
    const dispatch = useDispatch();
    const loadProducts = async()=>{
       try{
        let response = await axios.get(apiEndPoint.PRODUCT_LIST);
        if(response.data.status){
          setProductList(response.data.products);
          setIsLoading(false);  
        }  
       }
      catch(err){
         setError("Oops! something went wrong..");
      }
    }
    const addToCart = (product)=>{
      if(!currentUser)
        toast.warning("please login to perform this action");
      else{
        let status =   cartItems.some((item)=>item.productId._id == product._id);
        if(status)
          toast.info("Item is already added in cart");
        else{
          dispatch(addItemInToCart({userId: currentUser._id, productId:product._id}));
          if(cartError)
            toast.error(error);
          else if(flag)
            toast.success("Item successfully added in cart");
        }   
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
                                {!error && productList.map((product,index)=> <tr>
                                        <td className="product-thumbnail" key={index} >
                                            <a href="#"> <img src= {"https://drive.google.com/uc?export=view&id="+product.photos.substring(32,product.photos.lastIndexOf("/"))}  className="img-fluid cardimg"/> </a>
                                        </td>
                                        <td className="product-name"><a href="#">{product.name}</a></td>
                                        <td className="product-price"><span className="amount">{product.price}</span></td>
                                        <th className="product-quantity"><input type="text" /></th>
                                        <td className="product-subtotal">{product.price*1}</td>
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