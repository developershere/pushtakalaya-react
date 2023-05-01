import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useEffect, useState } from "react";
import { fetchState } from "../../router-config/stateSlice";
import { apiEndPoint } from "../../webApi/webapi";
 import axios from "axios";
import { useLocation } from "react-router-dom";

function UpdateBooks() {
    const [citys , setCitys] = useState([]);
    const { categoryList, error, isLoading } = useSelector((state) => state.category)
    const dispatch = useDispatch();
    const location = useLocation();
    // const book = location.state.books;
    const [name, setBookName] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [author, setAuthorName] = useState(" ");
    const [language, setLanguage] = useState("");
    const [edition, setEdition] = useState(" ");
    const [publicationDate, setPublicationData] = useState(" ");
    const [pincode, setPinCode] = useState(" ");
    const [categoryId, setCategory] = useState(" ");
    const [price, setPrice] = useState("");
    const [cityId, setCity] = useState(" ");

    const updateBook = async ()=>{
        try{
         let response = await axios.post(apiEndPoint.UPDATE_BOOK , {});
          console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }

  useEffect(() => {
      dispatch(fetchState());
        
    }, [])

    const featchCityById = async (stateId) => {
        try {
            let response = await axios.post(apiEndPoint.FEATCH_CITY_BY_STATE, { stateId: stateId });
             console.log(response.data);
             setCitys(response.data.result);
        }
        catch (err) {
            console.log(err);
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
                                <form  onSubmit={updateBook}  className="px-md-2">
                                    <div className="row form-group"  >
                                        <div className="">
                                            <input onChange={(event) => setBookName(event.target.value)}  placeholder="Enter Book Name" type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row form-group"  >
                                        <div className="">
                                            <input onChange={(event) => setEdition(event.target.value)}   placeholder="Enter Edition" type="text" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="row form-group"  >
                                        <div className=" col-md-6">
                                            <input onChange={(event) => setAuthorName(event.target.value)}   placeholder="Enter Author Name" type="text" className="form-control" />
                                        </div>
                                        <div className=" col-md-6">
                                            <input onChange={(event) => setPrice(event.target.value)}    placeholder="Enter Price" type="number" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div>

                                            <select onChange={(event) => setCategory(event.target.value)}       className="form-control">Category
                                                <option>Select Book Category</option>
                                                {!error && categoryList.map((category, index) => <option value={category._id}  key={index}>{category.categoryName}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                            <select onChange={(event) => setLanguage(event.target.value)} className="form-control">language
                                                <option>Select Language</option>
                                                <option>Hindi</option>
                                                <option>English</option>

                                            </select></div>

                                    </div>
                                    <div className="row form-group mt-2"  >
                                        <div className=" col-md-6">
                                            <select   onChange={(event) => featchCityById(event.target.value)} className="form-control">State
                                                <option>Select State</option>
                                                {stateList.map((state, index) =>
                                                    <option  value={state._id} >{state.stateName}</option>
                                                )}


                                            </select>
                                        </div>
                                        <div className=" col-md-6">
                                            <select onChange={(event) => setCity(event.target.value)} className="form-control">City
                                                <option>Select City</option>
                                                    {citys.map((city,index)=>
                                                        <option  value={city._id}>{city.name}</option>)}
                                           </select>
                                        </div>
                                    </div>
                                    <div className="row form-group"  >

                                        <div className=" col-md-6">
                                            <input onChange={(event) => setPinCode(event.target.value)}   type="number" placeholder=" Enter Pincode" className="form-control" />
                                        </div>

                                        <div className="col-md-6">
                                            <input onChange={(event) => setPublicationData(event.target.value)}    placeholder="Enter Publication Date" type="text" className="form-control" />
                                        </div>

                                    </div>

                                    <div className="row form-group"  >
                                        <div className="col-md-12">
                                            <input type="file" placeholder="Images" className="form-control" />
                                        </div>
                                    </div>

                                      <div className="row form-group">
                                        <div>
                                            <textarea onChange={(event) => setDescription(event.target.value)}   cols='73' rows='4' placeholder="Enter Book's Description..." />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div>
                                            <button className="btn w-100 text-center submitbtn" type="Submit">SUBMIT</button>
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

export default UpdateBooks;