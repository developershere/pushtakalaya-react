import { Component, useEffect, useState } from "react";
import Footer from "./Footer";
import SideBar from "./sidebar";
import Header from "./header";
import axios from "axios";
import { apiEndPoint } from "../webapi/api";
import { ToastContainer, toast } from "react-toastify";
function Home() {

  const [user, setUser] = useState([]);
  const [books, setBooks] = useState([]);
  const [freeBooks, setFreeBooks] = useState([]);
  const [pendingBooks, setPendingBooks] = useState([]);

  const loadPendingBooks = async () => {
    try {
      let response = await axios.get(apiEndPoint.TOTAL_PENDING_BOOKS);
      if (response.data.status)
        setPendingBooks(response.data.bookList)
    } catch (err) {
      toast.error("Oops Something Went Wrong");
    }
  }

  const loadUsers = async () => {
    try {
      let response = await axios.get(apiEndPoint.TOTAL_USERS);
      if (response.data.status)
        setUser(response.data.user)
    } catch (err) {
      toast.error("Oops Something Went Wrong");
    }
  }
  const loadBooks = async () => {
    try {
      let response = await axios.get(apiEndPoint.TOTAL_BOOKS);
      if (response.data.status)
        setBooks(response.data.bookList)
    } catch (err) {
      toast.error("Oops Something Went Wrong");
    }

  }
  const loadFreeBooks = async () => {
    try {
      let response = await axios.get(apiEndPoint.TOTAL_FREE_BOOKS);
      if (response.data.status)
        setFreeBooks(response.data.bookList)
    } catch (err) {
      toast.error("Oops Something Went Wrong");
    }

  }


  useEffect(() => {
    loadUsers();
    loadBooks();
    loadFreeBooks();
    loadPendingBooks();
  }, [])


  return <>
    <Header />
    <div class="container-fluid page-body-wrapper">
      <SideBar />
      <ToastContainer />

      <div class="main-panel">
        <div class="content-wrapper">

          <div class="d-xl-flex justify-content-between align-items-start">
            <h2 class="text-dark font-weight-bold mb-2"> Overview dashboard </h2>

          </div>
          <div class="container">
            <div class="tab-content tab-transparent-content">
              <div class="tab-pane fade show active" id="business-1" role="tabpanel" aria-labelledby="business-tab">
                <div class="row">
                  <div class="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                    
                    <div class="card dashboardcard">
                      <div class="card-body text-center">
                        <span class="icon-bg"><i class="fa fa-book text-dark ml-1" aria-hidden="true"></i></span>
                        <span class=" ml-2 totalheading">Orders</span>
                        <h2 class="mb-4 mt-2 text-dark font-weight-bold">932.00</h2>

                        <p class="mt-4 mb-0"></p>
                        <h3 class="mb-0 font-weight-bold mt-2 text-dark"></h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                    <div class="card dashboardcard">
                      <div class="card-body text-center">
                      <span class="icon-bg"><i class="fa fa-user-circle text-dark" aria-hidden="true"></i></span>
                        <span class=" ml-2 totalheading">Users</span>
                        <h2 class="mb-4 mt-2 text-dark font-weight-bold">{user.length}</h2>
                         

                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4  col-lg-6 col-sm-6 grid-margin stretch-card">
                    <div class="card dashboardcard">
                      <div class="card-body text-center">
                      <span class="icon-bg"><i class="fa fa-book text-dark ml-1" aria-hidden="true"></i></span>
                        <span class=" ml-2 totalheading">Books</span>
                        <h2 class="mb-4  mt-2 text-dark font-weight-bold">{books.length}</h2>
                      

                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                    <div class="card dashboardcard">
                      <div class="card-body text-center">
                      <span class="icon-bg"><i class="fa fa-book text-dark ml-1" aria-hidden="true"></i></span>
                        <span class="totalheading ml-1">Donate Books</span>
                        <h2 class="mb-4 mt-1 text-dark font-weight-bold">{freeBooks.length}</h2>
                      

                      </div>

                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                    <div class="card dashboardcard">
                      <div class="card-body text-center">
                      <span class="icon-bg"><i class="fa fa-book text-dark ml-1" aria-hidden="true"></i></span>
                        <span class="totalheading ml-1">Permission Pending Books</span>
                        <h2 class="mb-4 mt-1 text-dark font-weight-bold">{pendingBooks.length}</h2>
                      

                      </div>
                      
                    </div>
                  </div>
                </div>
                


              </div>
            </div>


          </div>

        </div>
        <Footer />

      </div>

    </div>
  </>
}
export default Home;