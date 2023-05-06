import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { apiEndPoint } from '../../../../webApi/webapi';
import Footer from '../../../footer/footer';
import Header from '../../../header/header';
import'./order.css'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
function OrderDetails(){
  
    const{currentUser}=useSelector((state)=>state.user)
    const[orderList,SetOrderDetailsList]=useState([]);
    const location = useLocation();
    const id=location.state.order._id
    
    const featchOrderByUserId=async()=>{
        let response = await axios.post(apiEndPoint.FETCH_ORDER_BY_ORDERID,{id:id});
        console.log(response.data.orderlist)
        SetOrderDetailsList(response.data.orderlist);
    }

  


    useEffect(() => {
        featchOrderByUserId();
    }, []);
   return<>
      <Header/>
      <div className="container orderDetailsContainer">
        <div>
        <div className='row'>
            {/* {orderList.map((order)=>
                 <div className='col-md-10 orderDetaildiv m-auto mt-3'>
                 <div className='row  d-flex justify-content-end me-1 '>
                 <div className='orderId mt-2 text-white'>
                 <span> OrderId :{order._id}</span>
                 </div>
                 </div>
                 <div className=' row mt-2 mb-2'>
                    <div className='col-md-5'>
                    <h6 className="contentcart"><span className="carttitle">Date :</span> {order.date}</h6>
                   </div>
                   <div className='col-md-5'>
                   <h6 className="contentcart"><span className="carttitle">Contact Person :</span>{order.contactPerson}</h6>
                   </div>     
                 </div>
                 <div className=' row mt-2 mb-2'>
                    <div className='col-md-5'>
                    <h6 className="contentcart"><span className="carttitle">contact Number :</span>{order.contactNumber}</h6>
                   </div>
                   <div className='col-md-5'>
                   <h6 className="contentcart"><span className="carttitle">Delievery Address :</span>{order.delieveryAddress}</h6>
                   </div>     
                 </div>
               
                <hr/>
                <div className='row p-0 '>
                  <div className='col-md-2 mb-1'>
                     <img src='\img\bookimages\richdad.jpg' height='90px' width='90px' />
                  </div>
                  <div className='col-md-4 mt-3'>
                  <h6 className="mt-2 cartscontainheading">{order.orderItems}</h6>
                     <h6 className="contentcart"><span className="carttitle">Author :</span> Anubhav Agarwal </h6>
                     <h6 className="contentcart"><span className="carttitle">Price : </span>500  Rs</h6>
     
                  </div>
                  <div className='col-md-3 mt-3'>
                  <h6 className="contentcart"><span className="carttitle">Status :</span>{order.status}</h6>
                  </div>
                  <div className='col-md-3 mt-3'>
                  <h6 className="contentcart"><span className="carttitle">Total Bill  :</span>{order.billamount}</h6>
                  </div>
                </div>
                </div>
            )} */}
          
        </div>
        </div>

      </div>

   </>
}

export default OrderDetails;