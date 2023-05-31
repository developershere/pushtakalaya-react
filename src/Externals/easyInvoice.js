// import easyinvoice from 'easyinvoice';
// // import fs from 'fs'
// import { useSelector } from 'react-redux';

// function Invoice({books,data}) {
//     window.alert('Invoice called....');
//     const {currentUser} = useSelector(state=>state.user.currentUser);
//         var userData = {name:'mausam'};
//         var data = {
//             "documentTitle": "Order Invoice",
//             "currency": "INR",
//             "taxNotation": "gst",
//             "marginTop": 25,
//             "marginRight": 25,
//             "marginLeft": 25,
//             "marginBottom": 25,
//             "logo": "https://www.easyinvoice.cloud/img/logo.png", 
//             "sender": {
//                 "company": "Pustakalaya",
//                 "address": "Madhovastika rajmohalla chowk Indore (M.P) ",
//                 "zip": "470005",
//                 "city": "Indore",
//                 "country": "India"
//             },
//             "client": {
//                 "company": data.name,
//                 "address": data.address,
//                 "zip": "",
//                 "city": "",
//                 "country": ""
//             },
//             "Order Id": data.orderId,
//             "invoiceDate": data.orderId,
//             "Books": [
//                         {
//                         "quantity" : "1",
//                         "description" : 'book.bookId.title',
//                         "tax" :30,
//                         "price" : 'book.bookId.price*1'
//                         }
//                     ],
//             "bottomNotice": "Please Visit again !!!"
//         };
//         const result =  easyinvoice.createInvoice(data);
//         window.alert('Invoice called....222');
//         result.writeFileSync("invoice.pdf", result.pdf, 'base64');
//         window.alert('Invoice called....3333');
//     return <>
//     <div><button >Create Invoice</button></div>
//     </>
// }
// export default Invoice;