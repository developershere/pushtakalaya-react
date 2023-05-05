import { useSelector } from "react-redux";

function BillingAdress() {
    const { currentUser, isError } = useSelector((state) => state.user);
   
    return <>
        <div className="tab-pane fade" id="address-edit" role="tabpanel">
            <div className="myaccount-content">
                <h5>Billing Address</h5>
                <address>
                    <p><strong>{currentUser && currentUser.name}</strong></p>
                    <p>1355 Market St, Suite 900 <br />
                        San Francisco, CA 94103</p>
                    <p>Mobile: {currentUser.contact}</p>
                </address>
                <a href="#" className="btn btn-sqr"><i className="fa fa-edit"></i>
                    Edit Address</a>
            </div>
        </div>

    </>
}

export default BillingAdress;