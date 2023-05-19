import easyinvoice from 'easyinvoice';
import fs from 'fs'
function Invoice() {
    const createFile = async () => {
        var data = {
            "documentTitle": "Order Invoice",
            "currency": "INR",
            "taxNotation": "gst",
            "marginTop": 25,
            "marginRight": 25,
            "marginLeft": 25,
            "marginBottom": 25,
            "logo": "https://www.easyinvoice.cloud/img/logo.png", 
            "sender": {
                "company": "Pustakalaya",
                "address": "Madhovastika rajmohalla chowk Indore (M.P) ",
                "zip": "470005",
                "city": "Indore",
                "country": "India"
            },
            "client": {
                "company": "Sanju Patel",
                "address": "Annapurna Temple Indore",
                "zip": "470005",
                "city": "Indore",
                "country": "India"
            },
            "invoiceNumber": "2020.0001",
            "invoiceDate": "05-01-2020",
            "Books": [
                {
                    "quantity": "1",
                    "description": "IT Book (Second Hand)",
                    "tax": 6,
                    "price": 120
                },
                {
                    "quantity": "01",
                    "description": "The girl in room 105",
                    "tax": 21,
                    "price": 90
                }
            ],
            "bottomNotice": "Please Visit again !!!"
        };
        const result = await easyinvoice.createInvoice(data);
        await fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
    }

    return <>
    <div><button onClick={createFile}>Create Invoice</button></div>
    </>
}
export default Invoice;