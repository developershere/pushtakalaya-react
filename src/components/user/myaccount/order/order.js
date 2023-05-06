import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./order.css"
import { apiEndPoint } from "../../../../webApi/webapi";
import { useNavigate } from "react-router-dom";

function Order() {

  const { currentUser } = useSelector((state) => state.user)
  const [orderList, SetOrderList] = useState([]);
  const navigate = useNavigate();
  console.log(orderList)
  const featchOrderByUserId = async () => {
    let response = await axios.post(apiEndPoint.FETCH_ORDER, { userId: currentUser._id });

    SetOrderList(response.data.orderlist);
  }

  const changeOrderDetails = (order) => {
    console.log(order);
    navigate("/orderDetails", { state: { order: order } })
  }


  useEffect(() => {
    featchOrderByUserId();
  }, []);
  return <>
    <div className="tab-pane fade" id="orders" role="tabpanel">
      <div className="myaccount-content">
        <h5>Orders</h5>
        <div className="myaccount-table table-responsive text-center">
          <table className="table align-middle mb-0 bg-white">
            <thead >
              <tr className="text-white">
                <th >S.No</th>
                <th>OrderId</th>
                <th>Date</th>
                <th>Status</th>
                <th>PaymentMode</th>
                <th>Bill Amount</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((order, index) => <tr key={index}>
                <td>
                  {index + 1}
                </td>
                <td className="text-danger" onClick={() => changeOrderDetails(order)}>
                  {order._id}
                </td>
                <td>
                  {order.date}
                </td>
                <td>
                  {!order.status == 'pending' ? <span className="badge badge-success rounded-pill d-inline">
                    {order.status}
                  </span> : <span class="badge badge-primary rounded-pill d-inline">{order.status}</span>}

                </td>
                <td>{order.paymentMode}</td>
                <td>{order.billamount}Rs.</td>
              </tr>)}


            </tbody>
          </table>

        </div>
      </div>
    </div>

  </>
}

export default Order;