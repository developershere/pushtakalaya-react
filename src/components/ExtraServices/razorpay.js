import React from 'react';
import { useState } from 'react';
function Payment(props) {
  const [amount, setamount] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount == '')
        console.log("");
    else
      var options = {
        key: "rzp_test_yl7fWesMTh5Yh5",
        key_secret: "OrL99XehMMTf1sTBboTkdlMu",
        amount: props.money*100,
        currency: 'INR',
        name: 'PUSTAKALAYA',
        description: 'Thanks for choosing Pustkalaya',
        handler: function (response) {
        },
        prefill: {
          name: "Mausam lodhi",
          email: "mausamlodhi326@gmail.com",
          contact: "8989580060"
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
      <button className='btn-dark mb-2 razorpaybutton' onClick={handleSubmit}>PAY</button>
    </div>
  );
}

export default Payment;
