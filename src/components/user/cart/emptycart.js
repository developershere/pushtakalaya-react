import { useNavigate } from "react-router-dom";
import "./cart.css";
function EmptyCart(){
    const navigate = useNavigate();
    const changeHome = () => {
        navigate("/book")
      }
    return<>
    
 <div className="container emptycartcontainer mt-5 mb-5">
  
   <div className="mycart mt-5">
     <div className="emptycart text-center mt-5">
      
    <img  src="\img\cart\cart1.png" alt="" style={{ textAlign: "center", marginLeft: 15 ,marginTop:'15px'}}width="300px"  height="300px" />
     </div>
     <div className="emptycartcontain text-center mt-2">
    
      <h5 className="text-center cartscontainheading">Your Cart is Empty</h5>
      <h6 className="cartscontainheading">
        Looks Like You Have Not Added anything to You Cart.Go Ahead &amp;
        Explore Top Products
      </h6>
      <a href="/">
        <button type="button" onClick={changeHome} className="cartbutton">
          GO SHOOPING
        </button>
      </a>
    </div> 
  </div> 
</div>

    </>
}

export default EmptyCart;