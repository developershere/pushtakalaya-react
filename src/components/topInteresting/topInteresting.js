import { useSelector } from "react-redux";
import './top.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiEndPoint } from "../../webApi/webapi";
function TopInteresting() {

  const navigate = useNavigate();
  const viewDescription = (book) => {
    window.alert(book);
    navigate("/viewDescription", { state: { bookDetails: book } })
}

  const[productByCategory,SetProductByCategory]=useState([]);
  const [isError,SetisError]=useState(null);
  const { TopProductList } = useSelector((state) => state.topProduct);
  const{categoryList,error,isLoading} = useSelector((state)=>state.category)
  const loadProductByCategory=async(categoryId)=>{
     try{
          let response = await axios.post(apiEndPoint.BOOK_BY_CATEGORY,{categoryId});
          if(response.data.status){
            SetProductByCategory(response.data.result);
          }
     }catch(err){
        SetisError("oops Something Went Wrong")
     }

  }

  return <>
    <section className="our-project" id="projectid">
      <div className="container heading-design">
        <div data-aos="fade-up" data-aos-duration="400">
          <h1><span>Top Books</span></h1>
          <p className="sub-heading container">  <p>Browse the collection of our best selling and top interresting products. <br /> ll definitely find what you are looking for..</p></p>
        </div>
        <div className="container topinteresting" data-aos="fade-up" data-aos-duration={400}>
          <nav>
            <div
              className="nav nav-tabs row"
              style={{ paddingLeft: "18%" }}
              id="nav-tab"
              role="tablist"
            >

              <button className=" nav-link active col-2"  id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab" aria-controls="nav-all" aria-selected="true"  >  All</button>
              {!error&&categoryList.filter((category)=>category.categoryName=="Classics").map((category,index)=>
              <button  key={index} onClick={()=>loadProductByCategory(category._id)} className=" nav-link col-2" id="nav-Remodeling-tab" data-bs-toggle="tab" data-bs-target="#nav-Remodeling"type="button"role="tab"aria-controls="nav-Remodeling" aria-selected="false" >{category.categoryName}</button>)}
              
              {!error&&categoryList.filter((category)=>category.categoryName=="Horror").map((category,index)=>
                <button key={index} onClick={()=>loadProductByCategory(category._id)} className="nav-link col-2" id="nav-Construction-tab" data-bs-toggle="tab" data-bs-target="#nav-Construction" type="button"role="tab" aria-controls="nav-Construction"aria-selected="false" >{category.categoryName}</button>)}

              {!error&&categoryList.filter((category)=>category.categoryName=="History").map((category,index)=> 
              <button  key={index} onClick={()=>loadProductByCategory(category._id)} className="nav-link col-2"  id="nav-Repair-tab" data-bs-toggle="tab" data-bs-target="#nav-Repair"  type="button"role="tab"aria-controls="nav-Repair"  aria-selected="false" >
                {category.categoryName}
              </button>
              )}
             
            </div>
          </nav>
        </div>
        <div
          className="tab-content "
          id="nav-tabContent"
          data-aos="fade-up"
          data-aos-duration={500}
        >
          <div
            className="tab-pane fade show active container"
            id="nav-all"
            role="tabpanel"
            aria-labelledby="nav-all-tab"
            tabIndex={0}
          >
            <div className="row m-auto">

              {TopProductList.map((book, index) =>
              
               <div key={index} className="col-md-3 col-sm-6 mt-5" data-aos="fade-up" data-aos-duration="500">
                 <div className="card">
                 <img src= {"https://drive.google.com/uc?export=view&id="+book.photos.substring(32,book.photos.lastIndexOf("/"))}  className="img-fluid cardimg"/> 
                 <a className="cardcircle"><i className="fa fa-shopping-cart carticon mt-3"></i></a>
                   <div className="card-body">
                     <p className="card-text cardtitle">{book.name.substring(0,20)}</p>
                     <p className="cardprice"><span className="cardtitle">Author: </span>{book.author.substring(0,15)}</p>
                     <b className="card-text cardprice"><span className="cardtitle">Price: </span>₹{book.price==0?"Free":book.price}</b>
                     <br/>
                     <button className="btn mt-2 w-100 buttonhover"  onClick={() => viewDescription(book)} >View More</button>
                   </div>
                 </div>
               </div>)}
            </div>
            </div>
            <div className="row m-auto">
              {productByCategory.map((book,index)=>
              <div key={index} className="col-md-3 col-sm-6 mt-5" data-aos="fade-up" data-aos-duration="500">
              <div className="card">
              <img src= {"https://drive.google.com/uc?export=view&id="+book.photos.substring(32,book.photos.lastIndexOf("/"))}  className="img-fluid cardimg"/> 
              <a className="cardcircle"><i className="fa fa-shopping-cart carticon mt-3"></i></a>
                <div className="card-body">
                  <p className="card-text cardtitle">{book.name.substring(0,20)}</p>
                  <p className="cardprice"><span className="cardtitle">Author: </span>{book.author.substring(0,15)}</p>
                  <b className="card-text cardprice"><span className="cardtitle">Price: </span>₹{book.price}</b>
                  <br/>
                  <button className="btn mt-2 w-100 buttonhover" onClick={() => viewDescription(book)} >View More</button>
                </div>
              </div>
            </div>)}
        </div>
         
          
        </div>
      </div>
    </section>






  </>
}

export default TopInteresting;