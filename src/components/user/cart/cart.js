import Footer from "../../footer/footer";
import Header from "../../header/header";
import "./cart.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addItemInToCart, removeFromCart, setCartItems, setRemoveUpdate } from "../../../router-config/CartSlice";
import { apiEndPoint } from "../../../webApi/webapi";
import { toast, ToastContainer } from "react-toastify";
import EmptyCart from "./emptycart";
import Payment from "../../ExtraServices/razorpay";

function Cart() {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useSelector(state => state.user);
  const { cartItems, flag } = useSelector(state => state.cart);
  const [paymentMode, setPaymentMode] = useState([]);
  const [contactPerson, setContactPerson] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [delieveryAddress, setDeliveryAddress] = useState("");


  const dispatch = useDispatch();
  var amount = 0;
  var total = 0;
  var status;
  cartItems.map((carts,index)=>{
    total+= carts.bookId.price * 1;
  })
  const navigate = useNavigate();
  const loadProducts = async () => {
    try {
        
      let response = await axios.post(apiEndPoint.FETCH_CART, { userId: currentUser._id });
      dispatch(setCartItems(response.data.cart));
    }
    catch (err) {
      setError("Oops! something went wrong..");
    }
  }

  const loadOrder = async (event) => {
    try {
      event.preventDefault();
      
        if(paymentMode=="Online")
        {
          status = true;
          window.alert("Please pay First");
        }
        else if(paymentMode=="COD")
        {
          window.alert("COD called...");
          status = false;
        }
      // let response =await axios.post(apiEndPoint.ORDER_SAVE,{userId:currentUser._id,billamount:total,contactPerson,contactNumber,delieveryAddress,paymentMode,sellerId:currentUser._id,cartId:cartItems[0]._id,orderItem:cartItems[0].bookId})


    } catch (err) {
      console.log("Oops Something Went Wrong");
    }
  }


  const removeCart = async (id) => {
   
    try {
      if(window.confirm("Do You Want To Remove")){
      dispatch(removeFromCart({userId:currentUser._id,_id:id}));
      }
    } catch (err) {
      toast.error("Something Went Wrong");
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const changeHome = () => {
    navigate("/")
  }
  return <>
    <Header />
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


    <div className="modal fade" id="checkoutModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"  style={{border:"2px solid black"
}}>
      <div className="modal-dialog" role="document">
        <form onSubmit={loadOrder}>
          <div className="modal-content">
            <div className="modal-header ">
              <h5 className="modal-title orderSummary " id="exampleModalLabel">Shipping Address</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <div className="innermodel mt-2">
                <div className="form-group ">
                  <input type="text" placeholder="Enter Contact Person Name" onChange={(event) => setContactPerson(event.target.value)} className="form-control "/>
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Enter Contact Number" onChange={(event) => setContactNumber(event.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                  <textarea type='text' cols='64' rows='4' placeholder="Enter Delievery Address" onChange={(event) => setDeliveryAddress(event.target.value)} className="form-control" />
                </div>
                </div>
                {status ?<></>
                 : <Payment
                money = {total}/>
              }
            </div>
            <div className="modal-footer ">
              <button type="submit" className="btn-block cartcheckoutbutton ">Placed Order</button>
            </div>
          </div>
        </form>
      </div>
    </div>
   
    {!cartItems?.length==0?<div className="container-fluid addtocartcontainer mb-70">

      <div className=" row">
        <div className="  ml-4 mt-5 col-sm-8 col-md-8 col-xm-8 ">
          <div className=" headingcart row col-md-12 mt-2">
            <h5 className=" cartmainheading">My Cart()</h5>
          </div>


          {!flag && cartItems?.map((product, index) =>
            <div className="addtocartdiv row mt-3 ">
              <div className="col-md-2 col-sm-4 ">
                <img src={"https://drive.google.com/uc?export=view&id=" + product.bookId.photos?.substring(32, product.bookId.photos.lastIndexOf("/"))} className="imgcart mt-2 img img-fluid img-responsive img-thumbnail" alt="" />
              </div>
              <div className="col-md-7 mt-2 ">
                <h6 className="mt-2 cartscontainheading">{product.bookId.name}</h6>
                <h6 className="contentcart"><span className="carttitle">Author : </span>{product.bookId.author}</h6>
                <h6 className="contentcart"><span className="carttitle">Price : </span>{product.bookId.price} Rs</h6>
                <h6 className="carttitle">Shipping & Handling charges   ₹30</h6>
              </div>

              <div className="col-md-3 text-center">
                <button className="cartbutton" onClick={() => { removeCart(product._id) }}>Remove</button>
              </div>

            </div>)}


        </div>

        <div className="col-md-3 col-xm-3 col-sm-3  addtocartdivafter ml-5 mt-5 ">
          <div className="mt-2 orderSummary">
            Order Summary
          </div><hr />
          <div className="cartscontainheading  mt-4">
            {!flag && cartItems?.map((product, index) => { amount = amount + product.bookId.price * 1 })}
            <h6 className="contentcart">Pay Only for Shipping  <span className="ml-1"> :₹{!flag && cartItems?.length * 20} ({!flag && cartItems?.length} Books)</span></h6>
            <h6 className="contentcart">Bill Amount<span className="ml-5 pl-3"> :  ₹ {amount}</span></h6>
            <h6 className="contentcart">Total Amount<span className="ml-5 pl-3">: ₹ {total = amount + (!flag && cartItems?.length * 20)}</span></h6><hr />
            <div onChange={(event) => setPaymentMode(event.target.value)}>
              <input type="radio" value='COD' name='payment' /><span className="contentcart" onClick={loadOrder} style={{cursor:"pointer"}}>  Cash On Delievery</span><br />
              <input type="radio" value='Online' name='payment' /><span className="contentcart"  style={{cursor:"pointer"}}> Online Payment</span></div>
          </div>
          <a className="btn-block cartcheckoutbutton text-center mt-3 " data-toggle="modal" data-target="#checkoutModel">Procced To checkout</a>
        </div>
      </div>
    </div>:<EmptyCart/>} 
    <Footer />
    
  </>
}

export default Cart;