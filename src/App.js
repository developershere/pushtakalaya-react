
import './App.css';

import MainContant from './components/maincontent';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import Category from './components/category/Category';
import Product from './components/product';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import FreeBook from './components/freeBook/freebook';
import User from './components/user/user';
import SignIn from './components/signin/signin';
import UpdateCategory from './components/category/updateCategory';
import Permission from './components/permission/permission';

function App(){
   
  return <div>

  
         <Routes>
            <Route  path='/' element={<SignIn/>}></Route>
            <Route  path='/home' element={<Home/>}></Route>
            <Route path='/category' element={<Category/>}></Route>
            <Route path='/book' element={<Product/>}></Route>
            <Route path='/freebook' element={<FreeBook/>}></Route>
            <Route path='/user' element={<User/>}></Route>
            <Route path='/signup' element={<User/>}></Route>
            <Route path='/updateCategory' element={<UpdateCategory/>}></Route>
            <Route path='/permission' element={<Permission/>}></Route>

            
         </Routes>
      
     
   
    </div>
  
}

export default App;
