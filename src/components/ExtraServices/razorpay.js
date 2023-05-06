import React from 'react';
import { useState } from 'react';

function Payment(props) {
  const [amount, setamount] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount == '')
      window.alert("please enter the amount");
    else
      var options = {
        key: 'rzp_test_yl7fWesMTh5Yh5',
        key_secret: 'OrL99XehMMTf1sTBboTkdlMu',
        amount: amount*1,
        currency: 'INR',
        name: 'PUSTAKALAYA',
        description: 'Thanks for choosing Pustkalaya',
        handler: function (response) {
          window.alert(response.razorpay_payment_id);
        },
        prefill: {
          name: 'Mausam lodhi',
          email: 'mausamlodhi326@gmail.com',
          contact: '8989580060'
        },
        notes: {
          address: 'Razorpay Corporate office'
        },
        theme: {
          color: '#F07c29'
        }
      };
    var pay = new window.Razorpay(options);
    pay.open();
  }
  return (
    <div className="App">
      <br />
      <input type='text' onChange={(e) => setamount(e.target.value)} placeholder='enter amount' value={props.money} />
      <br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Payment;
