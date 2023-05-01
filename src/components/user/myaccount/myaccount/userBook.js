import axios from "axios";
import { useSelector } from "react-redux";
import { apiEndPoint } from "../../../../webApi/webapi";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 

function UserBooks() {
    const { currentUser, isError } = useSelector((state) => state.user);
     const [booklist , setBooks ] = useState([]);
      const navigate = useNavigate();

      
  
     const featchBookByUserId = async ()=>{
         try{
         let response = await axios.post(apiEndPoint.SEARCH_BOOK_BY_USERID , {userId : currentUser._id});
         console.log(response);
          if(response.data.status)
            setBooks(response.data.result);
         }
         catch(err){
            console.log(err);
         }
     }

    const updateBook = (book)=>{
        const bookDetails = book;
        navigate("/updateBooks", { state: { books: bookDetails }});
        
     }

     useEffect(()=>{
         featchBookByUserId();
     },[]);
   
    return <>
        <div className="tab-pane fade show active" id="yourBooks" role="tabpanel">
            <div className="myaccount-content">
                <h5>Books</h5>

                <div className="myaccount-table table-responsive text-center">
                    <table className="table table-bordered">
                        <thead className="thead-light">
                            <tr>
                                 <th>Image</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Author</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                             {booklist.map((book,index)=>
                            <tr>
                                 <td><img  style={{height: "100px" , width : "100px" , borderRadius : "50%"}}   src={book.photos}></img></td>
                                <td>{book.name}</td>
                                <td>{book.description.substring(0,20)}</td>
                                <td>{book.author}</td>
                                <td>{book.price}</td>
                                     <td><Link to="/updateBooks"  onClick={()=>{updateBook(book)}}    className="btn btn-sqr">Edit</Link>
                                </td>
                                 </tr>)}
                            </tbody>
                    </table>
                </div>
        </div>
        </div>
    </>
}

export default UserBooks;