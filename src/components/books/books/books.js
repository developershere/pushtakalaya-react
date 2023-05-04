import { useSelector } from "react-redux";
import "./books.css"

import { useEffect, useState } from "react";
import axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";
import { apiEndPoint } from "../../../webApi/webapi";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import { toast } from "react-toastify";


function Books() {
    const { currentUser } = useSelector((state) => state.user);
    const location = useLocation();
    const keyword = location.state?.books;
    const flag = location.state?.status;
    const { categoryList, error, isLoading } = useSelector((state) => state.category)
    const [bookData, setData] = useState([]);
    const navigate = useNavigate()
    const featchAllBooks = async () => {
        try {
            if (!flag) {
                let response = await axios.get(apiEndPoint.TOTAL_BOOKS);
                console.log(response);
                if (response.data.status) {
                    console.log(response.data.bookList);
                    setData(response.data.bookList);
                }
            }
            else {
                setData(location.state.books);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    const viewDescription = (book) => {
        navigate("/viewDescription", { state: { bookDetails: book } })
    }

    const viewBookByCategory = async (categoryId) => {
        try {
            let response = await axios.post(apiEndPoint.BOOK_BY_CATEGORY, { categoryId });
            if (response.data.status) {
                setData(response.data.result);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    const searchByAuther = async (author) => {
        try {
            let response = await axios.post(apiEndPoint.SEARCH_BY_AUTHER, { author: author });
            console.log(response.data);
            setData(response.data.result)
        }
        catch (err) {
            console.log(err);
        }
    }

    const viewListInbooks = (data) => {
        const list = data
        navigate("/bookList", { state: { dataList: list } });
    };


    const addToCart = async (id) => {
        try {
            if (currentUser) {
                let response = await axios.post(apiEndPoint.ADD_TO_CART, { bookId: id, userId: currentUser._id });
                toast.success("Book is added to you'r cart");
            }
            else
                toast.warning("You have to Login first");
        }
        catch (err) {
            if (err.response.status == 400)
                toast.warning("Book is already exists in cart");
            if (err.response.status == 500)
                toast.error("Oops Something went wrong");
        }
    }

    useEffect(() => {
        featchAllBooks();
        viewBookByCategory();
        searchByAuther();
    }, []);

    return <>
        <Header />
        <div>
            <div className="container-fluid">
                <div className="FilterMainDiv">
                    <div className="RightPart">
                        <button className="SeacrchButton">Search</button>
                        <div className="rightpartHeading">
                            <p className="Heading">Categories</p>
                        </div>
                        <div className="CategoryList">

                            <ul>
                                {!error && categoryList.map((category, index) =>
                                    <li style={{ cursor: "pointer" }} onClick={() => viewBookByCategory(category._id)}>{category.categoryName}</li>)}
                            </ul>
                        </div>
                        {/* drop down */}
                        <div className="btn-group dropdownbtn">
                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                AUTHOR
                            </button>
                            <ul className="dropdown-menu dropdownofOther" >
                                {bookData.map((book, index) =>
                                    <li onClick={() => { searchByAuther(book.author) }}>{book.author}</li>)}
                            </ul>
                        </div>
                        {/* drop down */}
                    </div>
                    <div className="LeftPart">
                        <div className="mainImage">
                            <img
                                src="../../img/banner/9.jpg"
                                alt=""
                            />
                        </div>
                        <div className="headingbook">
                            <p className="heading">BOOK</p>
                        </div>
                        <div className="gridAndList">
                            <div className="grid d-flex">
                                <i className="fa fa-th-large" aria-hidden="true"></i>
                                <div className="mb-5">
                                    <spna className="gridName">Gride</spna>
                                </div>
                                <div className="listicon">
                                    <i onClick={() => viewListInbooks(bookData)} className="fa fa-list" aria-hidden="true"></i>
                                </div>
                                <div className="listName">
                                    List
                                </div>
                                <div className="bookpara">
                                    <p>There Are  Products.</p>
                                </div>
                            </div>

                        </div>
                        {/* cart */}

                        <div className="row">
                            {keyword?.filter((book) => book.permission && book.status == true)?.map((book, index) =>
                                <div key={index} className="col-md-5 col-xl-3 col-lg-5 col-sm-3 mt-5" data-aos="fade-up" data-aos-duration="500">
                                    <div className="card">
                                        <img src={"https://drive.google.com/uc?export=view&id=" + book.photos.substring(32, book.photos.lastIndexOf("/"))} className="img-fluid cardimg" />
                                        <a href="" className="card-action"><i className="fa fa-shopping-cart carticon mt-3" style={{ cursor: "pointer" }} onClick={() => addToCart(book._id)}></i></a>
                                        <div className="card-body">
                                            <p className="card-text cardtitle">{book.name.substring(0, 15)}</p>
                                            <p className="cardprice"><span className="cardtitle">Author: </span>{book.author.substring(0, 10)}</p>
                                            <b className="card-text cardprice"><span className="cardtitle">Price: </span>₹{book.price}</b>
                                            <br />
                                            <button className="btn mt-2 w-100 buttonhover" onClick={() => viewDescription(book)}>View More</button>
                                        </div>
                                    </div>
                                </div>)}
                            {bookData.filter((book) => book.permission && book.status == true)?.map((book, index) =>
                                <div key={index} className="col-md-3 col-sm-6 mt-5" data-aos="fade-up" data-aos-duration="500">
                                    <div className="card">
                                        {book.photos.split("@")[1] ? <img src={book.photos.split("@")[1]} className="img-fluid cardimg" /> : <img src={"https://drive.google.com/uc?export=view&id=" + book.photos.substring(32, book.photos.lastIndexOf("/"))} className="img-fluid cardimg" />}
                                        <a href="" className="card-action"><i className="fa fa-shopping-cart carticon mt-3"></i></a>
                                        <div className="card-body">
                                            <p className="card-text cardtitle">{book.name.substring(0, 15)}</p>
                                            <p className="cardprice"><span className="cardtitle">Author: </span>{book.author.substring(0, 10)}</p>
                                            <b className="card-text cardprice"><span className="cardtitle">Price: </span>₹{book.price}</b>
                                            <br />
                                            <button className="btn mt-2 w-100 buttonhover" onClick={() => viewDescription(book)}>View More</button>
                                        </div>
                                    </div>
                                </div>)}
                        </div>

                        {/* cart */}
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Footer />

        </div>
    </>
}

export default Books;