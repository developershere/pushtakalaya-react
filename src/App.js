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
import ViewDescription from "./components/viewDescription/viewDescription"
import FreeBooks from "./components/FreeBooks/freeBooks"
import Book from "./components/books/books";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory } from './router-config/categorySlice';
import { fetchTopProduct } from './router-config/topProductSlice';




function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCategory());
    dispatch(fetchTopProduct())
  },[])
  return <>
     <Routes>
    <Route path='/' element={ <Home/>}/>
   <Route path='/signup' element={<SignUp/>}/>
   <Route path='/signin' element={<SignIn/>}/>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/freebooks' element={<FreeBooks/>}/>
   <Route path='/checkout' element={<Checkout/>}/>
   <Route path='/myaccount' element={<MyAccount/>}/>
   <Route path='/donate' element={<Donate/>}/>
   <Route path='/donateform' element={<DonateForm/>}/> 
    <Route path= "viewDescription" element={<ViewDescription/>}/>
      <Route path="/book" element={<Book/>}/>
    </Routes>
    </>
}

export default App;
