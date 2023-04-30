import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useEffect } from "react";
import { fetchState } from "../../router-config/stateSlice";


function DonateForm(){

  const{categoryList,error,isLoading}=useSelector((state)=>state.category)
 
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(fetchState());
    
  },[])

 
    return<>

    <section>
        <Header/>
  <div className="container-fluid py-5 h-100 donateformContainer">
    <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-2 donateformimage">
            <img src="\img\donar\form.jpg" style={{height:'500px',width:'500px'}}/>
        </div>
      <div className="col-lg-10 col-xl-6" >
        <div className="card rounded-3">
          
          <div className="card-body donateformcontain p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 sty">
             Book Donation Form
            </h3>
            <form className="px-md-2">
              <div className="row form-group"  >
                <div className="">
                    <input placeholder="Enter Book Name" type="text" className="form-control"/>
                </div>
              </div>
              <div className="row form-group"  >
                <div className="">
                    <input placeholder="Enter Edition" type="text" className="form-control"/>
                </div>
              </div>
              <div className="row form-group"  >
                <div className="">
                    <input placeholder="Enter Publication Date" type="date" className="form-control"/>
                </div>
              </div>
              <div className="row form-group"  >
                <div className=" col-md-6">
                    <input placeholder="Enter Author Name" type="text" className="form-control"/>
                </div>
                <div className=" col-md-6">
                    <input placeholder="Free" type="text"  value='Free' className="form-control" disabled/>
                </div>
              </div>
              <div className="row form-group">
                   <div>
                  
                    <select className="form-control">Category
                    <option>Select Book Category</option>
                    {!error&&categoryList.map((category,index)=>  <option key={index}>{category.categoryName}</option>)} 
                    </select>
                    </div>
                </div>

                <div className="row">
                    <div>
                <select className="form-control">language
                       <option>Select Language</option>
                        <option>Hindi</option>
                        <option>English</option>
                       
                    </select></div>
               
              </div>
              <div className="row form-group mt-2"  >
                <div className=" col-md-6">
                    <select className="form-control">State
                         <option>Select State</option>
                         
                           <option></option>
                       
                       
                      
                    </select>
                </div>
                <div className=" col-md-6">
                <select className="form-control">City
                       <option>Select City</option>
                       
                           <option></option>
                        
                    
                    </select>
                </div>
              </div>
              <div className="row form-group"  >
              
                <div className=" col-md-6">
                   <input type="number" placeholder=" Enter Pincode" className="form-control"/>
                </div>
                <div className="col-md-6">
                 <input  type="file"   placeholder="Images" className="form-control"/>
                 </div>
              </div>

   
              <div className="row form-group">
                <div>
               <textarea cols='73' rows='4' placeholder="Enter Book's Description..."/>
                 </div>
              </div>
              <div className="row form-group">
                <div>
                        <button className="btn w-100 text-center submitbtn" style={{outline:"none"}} type="button">SUBMIT</button>
                 </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>   
  </section> 
  <Footer/>
  
    </>
}

export default DonateForm;