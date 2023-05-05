import { useSelector } from "react-redux";

function DashBoard() {
    const { currentUser, isError } = useSelector((state) => state.user);
   
    return <>
        <div className="tab-pane fade show active" id="dashboad" role="tabpanel">
            <div className="myaccount-content">
                <h5>Dashboard</h5>
                <div className="welcome">
                    <p>Hello, <strong>{currentUser.name}</strong><strong></strong></p>
                </div>
                <p className="mb-0">From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and account details.</p>
            </div>
        </div>
    </>
}

export default DashBoard;