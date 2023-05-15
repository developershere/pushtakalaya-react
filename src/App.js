import logo from './logo.svg';
import './App.css';
import Home from './components/Home/home';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/user/signup/signup';
import SignIn from './components/user/signIn/signin';
import Cart from './components/user/cart/cart';
import Checkout from './components/user/checkout/checkout';
import MyAccount from './components/user/myaccount/myaccount';
import Donate from './components/DonateBooks/donatebooks';
import DonateForm from './components/DonateBooks/donateform';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory } from './router-config/categorySlice';
import { fetchTopProduct } from './router-config/topProductSlice';
import FreeBooks from './components/FreeBooks/freeBooks';
import Update from './components/user/myaccount/update';
import ProtectedRoute from './components/protectedRoute/protectedRoute';

import Books from './components/books/books/books';
import SellboooksForm from './components/sellbooks/sellbook';
import { fetchState } from './router-config/stateSlice';
import About from './components/About/about';
import UserBooks from './components/user/myaccount/userbook';
import UpdateBooks from './components/user/myaccount/updateBook';
import OrderDetails from './components/user/myaccount/order/orderDetails';
import ViewDescription from './components/viewDescription/viewDescription';
import Contact from "./components/contact/contact";
import Mail from './components/mail/mail';
// import Mail from "./components/mail/mail";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCategory());
    dispatch(fetchTopProduct());
    dispatch(fetchState());
  },[]);

  return <> 
  <Routes>
   <Route path='/' element={ <Home/>}/>
   
   <Route path='/signup' element={<SignUp/>}/>
   
   <Route path='/signin' element={<SignIn/>}/>
   <Route path='/aboutUs' element={<About/>}/>
   <Route path='/cart' element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
   <Route path='/freebooks' element={<FreeBooks/>}/>
   <Route path='/checkout' element={<Checkout/>}/>
   <Route path='/myaccount' element={<ProtectedRoute><MyAccount/></ProtectedRoute>}/>
   <Route path='/donate' element={<Donate/>}/>
   <Route path='/donateform' element={<ProtectedRoute><DonateForm/></ProtectedRoute>}/>
   <Route path='/sellbooks' element={<ProtectedRoute><SellboooksForm/></ProtectedRoute>}/>
   <Route path='/update' element={<Update/>}/>
   <Route path= "/viewDescription" element={<ViewDescription/>}/>
   <Route path="/book" element={<Books/>}/>
   <Route path='/userBook' element={<UserBooks/>} />
  <Route path='/updateBooks' element={<UpdateBooks/>}/>
  <Route path='/orderDetails' element={<OrderDetails/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/mail' elements={<Mail/>}/>
  </Routes>
  </>
}

export default App;
