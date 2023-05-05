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
function Cart() {
  var amount = 0;
  var amount1 = 0;
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useSelector(state => state.user);
  const { cartItems, flag } = useSelector(state => state.cart);
  const [paymentMode, setPaymentMode] = useState([]);
  const [contactPerson, setContactPerson] = useState(" ");
  const [contactNumber, setContactNumber] = useState(" ");
  const [delieveryAddress, setDeliveryAddress] = useState(" ");


  const dispatch = useDispatch();
  var amount = 0;
  var total = 0
  const navigate = useNavigate();

  const loadProducts = async () => {
    try {

      let response = await axios.post(apiEndPoint.FETCH_CART, { userId: currentUser._id });
  const dispatch = useDispatch();
  var amount = 0;
  const navigate = useNavigate();
  console.log("Mausam : " + cartItems);
  const loadProducts = async () => {
    try {
      window.alert("dghfggsg")
      let response = await axios.post(apiEndPoint.FETCH_CART, { userId: currentUser._id });
      console.log(response.data);
      dispatch(setCartItems(response.data.cart));
    }
    catch (err) {
      setError("Oops! something went wrong..");
    }
  }

  const loadOrder = async (event) => {
    try {
      event.preventDefault();
     
      window.alert(cartItems[0]._id);
      window.alert(cartItems[0].bookId);
      let response =await axios.post(apiEndPoint.ORDER_SAVE,{userId:currentUser._id,billamount:total,contactPerson,contactNumber,delieveryAddress,paymentMode,sellerId:currentUser._id,cartId:cartItems[0]._id,orderItem:cartItems[0].bookId})
      console.log(response.data);


    } catch (err) {
      console.log("Oops Something Went Wrong");
    }
  }


  const removeCart = async (id) => {
    try {
      window.alert(id)
      dispatch(removeFromCart({userId:currentUser._id,_id:id}));
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
    
  </>
      <div className="cart-main-area mb-70">
        <div className="container-fluid ms-5">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <form action="#">
                <div className="table-content table-responsive mb-15">
                  <table>
                    <thead>
                      <tr>
                        <th className="th ">Image</th>
                        <th className="th ">Product</th>
                        <th className="th ">Price</th>
                        <th className="th ">Quantity</th>
                        <th className="th ">Total</th>
                        <th className="th ">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!flag && cartItems?.map((product, index) => <tr>
                        <td className="p-2 product-thumbnail" key={index} >
                          <a href="#"> <img src={"https://drive.google.com/uc?export=view&id=" + product.bookId.photos.substring(32, product.bookId.photos.lastIndexOf("/"))} className="img-fluid img1" /> </a>
                        </td>
                        <td className="p-0 product-name"><a href="#">{product.bookId.name}</a></td>
                        <td className="p-0 product-price"><span className="amount">{product.bookId.price}</span></td>
                        <th className="p-0 product-quantity"><input type="number" value={1} className="q-input" /></th>
                        <td className="p-0 product-subtotal">{product.bookId.price * 1 + 20}</td>
                        <td className="p-0 product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                      </tr>)}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
            <div className="col-lg-5 col-md-12 col-12">
              <div className="your-order">
                <h3>Your order</h3>
                <div className="your-order-table table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="product-name">Product</th>
                        <th className="product-total">Total</th>
                      </tr>
                    </thead>

                    <tfoot>
                      <tr className="cart-subtotal">
                        <th>Cart Subtotal</th>
                        <td>
                          {!flag && cartItems?.map((product, index) => { amount1 = amount1 + product.bookId.price * 1 })}
                          <span className="amount">{amount1}</span>

                        </td>
                      </tr>
                      <tr className="shipping">
                        <th>Shipping</th>
                        <td>
                          <ul>
                            <li>
                              <input type="radio" />
                              <label>
                                Flat Rate:{" "}
                                <span className="amount">£7.00</span>
                              </label>
                            </li>
                            <li>
                              <input type="radio" />
                              <label>Free Shipping:</label>
                            </li>
                            <li />
                          </ul>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th>Order Total</th>
                        <td>
                          <strong>
                            {!flag && cartItems?.map((product, index) => { amount = amount + product.bookId.price * 1 + 20 })}
                            <span className="amount">
                              {amount}
                            </span>

                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="payment-method">
                  <div className="payment-accordion">
                    <div className="collapses-group">
                      <div
                        className="panel-group"
                        id="accordion"
                        role="tablist"
                        aria-multiselectable="true"
                      >
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingOne"
                          >
                            <h4 className="panel-title">
                              <a
                                data-bs-toggle="collapse"
                                data-bs-parent="#accordion"
                                href="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Direct Bank Transfer
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseOne"
                            className="panel-collapse collapse in"
                            role="tabpanel"
                            aria-labelledby="headingOne"
                          >
                            <div className="panel-body">
                              <p>
                                Make your payment directly into our bank
                                account. Please use your Order ID as the
                                payment reference. Your order won't be shipped
                                until the funds have cleared in our account.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-button-payment">
                    <input type="submit" defaultValue="Place order" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    </>
}
export default Cart;