import { useDispatch, useSelector } from "react-redux";
import "./books.css"

import { useEffect, useState } from "react";
import axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";
import { apiEndPoint } from "../../../webApi/webapi";
import Header from "../../header/header";

import Footer from "../../footer/footer";
import { toast } from "react-toastify";
import { addItemInToCart, setCartItems } from "../../../router-config/CartSlice";


function Books() {
    const location = useLocation();
    const keyword = location.state?.books;
    const { currentUser } = useSelector(state => state.user);
    const flag = location.state?.status;
    const dispatch = useDispatch();
    const { cartItems, cartError } = useSelector(state => state.cart);
    const { categoryList, error, isLoading } = useSelector((state) => state.category)
    const [bookData, setData] = useState([]);
    const navigate = useNavigate()
    if (flag) {
        setData(keyword);
        console.log(bookData);
    }
    const featchAllBooks = async () => {
        try {
            if (!flag) {
                let response = await axios.get(apiEndPoint.All_Books);
                console.log(response);
                if (response.data.status) {
                    console.log(response.data.bookList);
                    setData(response.data.bookList);
                }
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    const viewDescription = (book) => {
        window.alert(book);
        navigate("/viewDescription", { state: { bookDetails: book } })
    }

    const viewBookByCategory = async (id) => {
        try {
            let response = await axios.post(apiEndPoint.Search_By_Categoryname, { id: id });
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
            let response = await axios.post(apiEndPoint.Search_by_Other, { author: author });
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

    const addToCart = (book) => {
        window.alert("Add to Cart Called..");
        if (!currentUser){
            // window.alert("Add to Cart Called.. if");
            toast.warning("please login to perform this action");}
        else {
            window.alert("Add to Cart Called.. else");
            let status = cartItems.some((item) => item.bookId._id == book._id);
            if (status){
                toast.info("Item is already added in cart");
                window.alert("Add to Cart Called.. Added if");}
            else {
                dispatch(addItemInToCart({ userId: currentUser._id, bookId: book._id }));
                if (error)
                    toast.error(error);
                else if (flag)
                    toast.success("Item successfully added in cart");
            }
        }
    }




    useEffect(() => {
        featchAllBooks();
        viewBookByCategory();
        searchByAuther();
    }, []);

    return <>
        <Header />
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
                                <li onClick={() => viewBookByCategory(category._id)}>{category.categoryName}</li>)}
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
                                <p>There Are  books.</p>
                            </div>
                        </div>

                    </div>
                    {/* cart */}
                    <div className="row m-auto">
                        {bookData.map((book, index) =>
                            <div key={index} className="col-md-3 col-sm-6 mt-5" data-aos="fade-up" data-aos-duration="500">
                                <div className="card">
                                    <img src={"https://drive.google.com/uc?export=view&id=" + book.photos.substring(32, book.photos.lastIndexOf("/"))} className="img-fluid cardimg" />
                                    <a  className="card-action"><i onClick={() => addToCart(book)} className="fa fa-shopping-cart carticon mt-3"></i></a>
                                    <div className="card-body">
                                        <p className="card-text cardtitle">{book.name.substring(0, 20)}</p>
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
                <div>

                </div>
            </div>

        </div>


    </>


}

export default Books;