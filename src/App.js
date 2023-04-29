
import './App.css';
import Home from './components/Home/home';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/user/signup/signup';
import SignIn from './components/user/signIn/signin';

import Checkout from './components/user/checkout/checkout';
import Donate from './components/DonateBooks/donatebooks';
import DonateForm from './components/DonateBooks/donateform';
import ViewDescription from "./components/viewDescription/viewDescription"
import Book from "./components/books/books";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory } from './router-config/categorySlice';
import { fetchTopProduct } from './router-config/topProductSlice';
import FreeBooks from './components/FreeBooks/freeBooks';
import ProtectedRoute from './components/protectedRoute/protectedRoute';
import Update from './components/user/myaccount/myaccount/update';
import MyAccount from './components/user/myaccount/myaccount/myaccount';
import SellboooksForm from './components/sellbooks/sellBooks';



function App() {
 const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchTopProduct())
  }, [])
  return <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
       <Route path='/freebooks' element={<FreeBooks />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/myaccount' element={<ProtectedRoute><MyAccount /></ProtectedRoute>} />
      <Route path='/donate' element={<Donate />} />
      <Route path='/donateform' element={<DonateForm />} />
      <Route path="viewDescription" element={<ViewDescription />} />
       <Route path='/donateform' element={<DonateForm />} />
      <Route path='/update' element={<Update />} />
       <Route path='/book' element={<Book/>}/>
      <Route path='/sellbooks' element= {<SellboooksForm/>}></Route>
      </Routes>

  </>
  // "completed"
}

export default App;
