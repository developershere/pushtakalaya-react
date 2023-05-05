import React from 'react';
import { useState } from 'react';

function Payment() {
  const [amount, setamount] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount == '')
      window.alert("please enter the amount");
    else
      // window.alert(amount);
      var options = {
        key: 'rzp_test_yl7fWesMTh5Yh5',
        key_secret: 'OrL99XehMMTf1sTBboTkdlMu',
        amount: amount * 100,
        currency: 'INR',
        name: 'STARTUP_PROJECTS',
        description: 'for testing purpose',
        handler: function (response) {
          window.alert(response.razorpay_payment_id);
        },
        prefill: {
          name: 'ajay patel',
          email: 'ajjupatelphulan6666@gmail.com',
          contact: '7354243016'
        },
        notes: {
          address: 'Razorpay Corporate office'
        },
        theme: {
          color: '#3399cc'
        }
      };
    var pay = new window.Razorpay(options);
    pay.open();
  }
  return (
    <div className="App">
      <h4>Razorpay App</h4>
      <br />
      <input type='text' onChange={(e) => setamount(e.target.value)} placeholder='enter amount' value={amount} />
      <br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Payment;
