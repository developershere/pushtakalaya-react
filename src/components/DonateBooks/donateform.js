import Header from "../header/header";

function DonateForm(){
    return<>

    <section>
        <Header/>
  <div className="container py-5 h-100 donateformContainer">
    <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-2 donateformimage">
            <img src="https://img.freepik.com/premium-vector/volunteer-group-donates-old-books-newspapers-poor-students_701961-1285.jpg?w=900" style={{height:'500px',width:'500px'}}/>
        </div>
      <div className="col-lg-10 col-xl-6">
        <div className="card rounded-3">
          
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
             Donate Form
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
                    <input placeholder="Enter Publication Date" type="text" className="form-control"/>
                </div>
              </div>
              <div className="row form-group"  >
                <div className=" col-md-6">
                    <input placeholder="Enter Author Name" type="text" className="form-control"/>
                </div>
                <div className=" col-md-6">
                    <input placeholder="Enter Price" type="text"  className="form-control"/>
                </div>
              </div>
              <div className="row form-group">
                   <div>
                    <select className="form-control">Category
                         <option>Select Book Category</option>
                        <option>Friction</option>
                        <option>History</option>
                        <option>Horror</option>
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
                        <option>Rajasthan</option>
                        <option>Madhay Pradesh</option>
                        <option>Horror</option>
                    </select>
                </div>
                <div className=" col-md-6">
                <select className="form-control">City
                       <option>Select City</option>
                        <option>indore</option>
                        <option>ujjain</option>
                    
                    </select>
                </div>
              </div>
              <div className="row form-group"  >
                <div className=" col-md-6">
                    <select className="form-control">Status
                         <option>Select Status</option>
                        <option>True</option>
                        <option>False</option>
                       
                    </select>
                </div>

                <div className=" col-md-6">
                   <input type="number" placeholder=" Enter Pincode" className="form-control"/>
                </div>
              </div>

              <div className="row form-group">
                <div>
                 <input  type="file"  placeholder="Images" className="form-control"/>
                 </div>
              </div>
              <div className="row form-group">
                <div>
               <textarea cols='53' rows='4' placeholder="Enter Description"/>
                 </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>   
  </section> 
    </>
}

export default DonateForm;