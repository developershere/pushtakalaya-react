import axios from "axios";
import { useEffect, useState } from "react";
import { apiEndPoint } from "../../webApi/webapi";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
function FreeBooks() {

  const {currentUser} = useSelector((state)=>state.user);
  const [freeProduct, SetFreeProduct] = useState([]);
  const [freeerror, setFreeError] = useState(null)

  const loadFreeProduct = async () => {
    try {
      let response = await axios.get(apiEndPoint.FREE_BOOK_API);
      if (response.data.status) {
        console.log(response.data)
        SetFreeProduct(response.data.bookList)
      }
    } catch (err) {
      setFreeError("oops Something Went Wrong");
    }
  }

  const navigate = useNavigate();
  const viewDescription = (book) => {
    navigate("/viewDescription", { state: { bookDetails: book } })
  }


  const addToCart = async (id)=>{
    try{
      if(currentUser)
      {
        let response = await axios.post(apiEndPoint.ADD_TO_CART,{bookId:id,userId : currentUser._id});
        toast.success("Book is added to you'r cart");
      }
      else
        toast.warning("You have to Login first");
  }
    catch(err)
    {
    if(err.response.status==400)
        toast.warning("Book is already exists in cart");
    if(err.response.status==500)
      toast.error("Oops Something went wrong");
    }
  }


  useEffect(() => {
    loadFreeProduct()
  }, [])

  return <>
    <Header />
    <section className="blog" id="blogid">
      <div className="container heading-design">
        <div className=" row">

        {!freeerror&&freeProduct.filter((book)=>book.permission&&book.status==true).map((book,index)=> 
            <div key={index} className="col-md-3 col-sm-6 mt-5" data-aos="fade-up" data-aos-duration="500">
              <div className="card">
                <img src={"https://drive.google.com/uc?export=view&id=" + book.photos.substring(32, book.photos.lastIndexOf("/"))} className="img-fluid cardimg" />
                <a className="cardcircle"><i className="fa fa-shopping-cart carticon mt-3" style={{cursor:"pointer"}} onClick={()=>addToCart(book._id)}></i></a>
                <div className="card-body">
                  <p className="card-text cardtitle">{book.name.substring(0, 20)}</p>
                  <p className="cardprice"><span className="cardtitle">Author: </span>{book.author.substring(0, 15)}</p>
                  <b className="card-text cardprice"><span className="cardtitle">Price: </span>₹ Free</b>
                  <br />
                  <button className="btn mt-2 w-100 buttonhover" onClick={() => viewDescription(book)} >View More</button>
                </div>
              </div>
            </div>)}

        </div>
      </div>
    </section>

    <Footer />
  </>
}

export default FreeBooks;