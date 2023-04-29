import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useEffect, useRef, useState } from "react";
import { fetchState } from "../../router-config/stateSlice";
import { fetchCity } from "../../router-config/citySlice";
import axios from "axios";
import { apiEndPoint } from "../../webApi/webapi";
import { current } from "@reduxjs/toolkit";

function SellboooksForm() {
  let photo = [];
  const { categoryList, error, isLoading } = useSelector((state) => state.category)
  const { cityList } = useSelector((state) => state.city)
  let BookName = useRef();
  let edition = useRef();
  let author = useRef();
  let price = useRef();
  let categoryId = useRef();
  let language = useRef();
  let state = useRef();
  let city = useRef();
  let pincode = useRef();
  let publicationDate = useRef();
  let description = useRef();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchState());
    dispatch(fetchCity())
  }, [])
  const onFileChange = event => {
    photo = event.target.files[0];
   };
  const uploadData = async ()=>{
    try
    {
      window.alert(state.current.value);
      const formData = new FormData();
      formData.append("Book",photo,photo.name);
      let response = axios.post(apiEndPoint.UPLOAD_BOOK,{name:BookName.current.value,author:author.current.value,language:language.current.value,price:price.current.value,edition:edition.current.value,photos:formData,description:description.current.value})
    }
    catch(err)
    {

    }

  }
  const { stateList } = useSelector((item) => item.state);

  return <>

    <section>
      <Header />
      <div className="container-fluid py-5 h-100 donateformContainer">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-2 donateformimage">
            <img src="\img\donar\form.jpg" style={{ height: '500px', width: '500px' }} />
          </div>
          <div className="col-lg-10 col-xl-6" >
            <div className="card rounded-3">

              <div className="card-body donateformcontain p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 sty">
                  Book Detail's
                </h3>
                <form className="px-md-2">
                  <div className="row form-group"  >
                    <div className="">
                      <input placeholder="Enter Book Name" ref={BookName} type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="row form-group"  >
                    <div className="">
                      <input placeholder="Enter Edition" ref={edition} type="text" className="form-control" />
                    </div>
                  </div>

                  <div className="row form-group"  >
                    <div className=" col-md-6">
                      <input placeholder="Enter Author Name" ref={author} type="text" className="form-control" />
                    </div>
                    <div className=" col-md-6">
                      <input placeholder="Enter Price" ref={price} type="number" className="form-control" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div>

                      <select className="form-control" ref={categoryId}>Category
                        <option>Select Book Category</option>
                        {!error && categoryList.map((category, index) => <option key={index}>{category.categoryName}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div>
                      <select className="form-control" ref={language}>language
                        <option>Select Language</option>
                        <option>Hindi</option>
                        <option>English</option>

                      </select></div>

                  </div>
                  <div className="row form-group mt-2"  >
                    <div className=" col-md-6">
                      <select className="form-control" ref={state}>State
                        <option>Select State</option>
                        {stateList.map((state, index) =>
                          <option>{state.stateName}</option>
                        )}


                      </select>
                    </div>
                    <div className=" col-md-6">
                      <select className="form-control" ref={city}>City
                        <option>Select City</option>
                        {cityList.map((city, index) =>
                          <option>{city.name}</option>
                        )}


                      </select>
                    </div>
                  </div>
                  <div className="row form-group"  >

                    <div className=" col-md-6">
                      <input type="number" ref={pincode} placeholder=" Enter Pincode" className="form-control" />
                    </div>

                    <div className="col-md-6">
                      <input placeholder="Enter Publication Date" ref={publicationDate} type="month" className="form-control" />
                    </div>

                  </div>

                  <div className="row form-group"  >
                    <div className="col-md-12">
                      <input type="file" onChange={onFileChange} />
                    </div>
                  </div>



                  <div className="row form-group">
                    <div>
                      <textarea cols='73' rows='4'ref={description} placeholder="Enter Book's Description..." />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div>
                      <button onClick={uploadData} className="btn w-100 text-center submitbtn" type="button">SUBMIT</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />

  </>
}

export default SellboooksForm;