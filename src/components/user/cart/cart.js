import Footer from "../../footer/footer";
import Header from "../../header/header";

function Cart(){
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
                                    <tr>
                                        <td className="product-thumbnail">
                                            <a href="#"><img src="img/cart/1.jpg" alt="man" /></a>
                                        </td>
                                        <td className="product-name"><a href="#">Vestibulum suscipit</a></td>
                                        <td className="product-price"><span className="amount">£165.00</span></td>
                                        <td className="product-quantity"><input type="number" value="1"/></td>
                                        <td className="product-subtotal">£165.00</td>
                                        <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td className="product-thumbnail">
                                            <a href="#"><img src="img/cart/2.jpg" alt="man" /></a>
                                        </td>
                                        <td className="product-name"><a href="#">Vestibulum dictum magna</a></td>
                                        <td className="product-price"><span className="amount">£50.00</span></td>
                                        <td className="product-quantity"><input type="number" value="1"/></td>
                                        <td className="product-subtotal">£50.00</td>
                                        <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-md-6 col-12">
                    <div className="buttons-cart mb-30">
                        <ul>
                            <li><a href="#">Update Cart</a></li>
                            <li><a href="#">Continue Shopping</a></li>
                        </ul>
                    </div>
                    <div className="coupon">
                        <h3>Coupon</h3>
                        <p>Enter your coupon code if you have one.</p>
                        <form action="#">
                            <input type="text" placeholder="Coupon code"/>
                            <a href="#">Apply Coupon</a>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="cart_totals">
                        <h2>Cart Totals</h2>
                        <table>
                            <tbody>
                                <tr className="cart-subtotal">
                                    <th>Subtotal</th>
                                    <td>
                                        <span className="amount">£215.00</span>
                                    </td>
                                </tr>
                                <tr className="shipping">
                                    <th>Shipping</th>
                                    <td>
                                        <ul id="shipping_method">
                                            <li>
                                                <input type="radio"/>
                                                <label>
                                                        Flat Rate:
                                                        <span className="amount">£7.00</span>
                                                    </label>
                                            </li>
                                            <li>
                                                <input type="radio"/>
                                                <label> Free Shipping </label>
                                            </li>
                                        </ul>
                                        <a href="#">Calculate Shipping</a>
                                    </td>
                                </tr>
                                <tr className="order-total">
                                    <th>Total</th>
                                    <td>
                                        <strong>
                                                <span className="amount">£215.00</span>
                                            </strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="wc-proceed-to-checkout">
                            <a href="#">Proceed to Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
}

export default Cart;