import { useSelector } from "react-redux";
import{Link} from 'react-router-dom'

function Account() {

    const { currentUser, isError } = useSelector((state) => state.user);


    
    return <>
        <div className="tab-pane fade mb-5 account" id="account-info" role="tabpanel">
            <div className="myaccount-content">
                <h5>Account Details</h5>
                <div className="account-details-form ">
                    <form action="#">
                        <div className="single-input-item row">
                            <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' style={{ height: '150px', width: '150px', borderRadius: "50%" }} type="image/png"
                                  label="Upload Profile Picture" alt='Profile Image' />
                        </div>

                        <div className="single-input-item">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <label for="display-name" className="required"> Name  <span className="ml-4 heading"> {currentUser && currentUser.name}</span>  </label>
                            <label ></label>
                        </div>
                        <div className="single-input-item">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                            <label for="email" className="required">Email  <span className="ml-4 heading"> {currentUser && currentUser.email}</span>  </label>

                        </div>
                        <div className="single-input-item">
                            <i class="fa fa-phone " aria-hidden="true" />
                            <label for="text" className="required ml-3">contact <span className="ml-2 heading"> {currentUser && currentUser.contact}</span>  </label>

                        </div>
                        <Link to='/update' className="btn btn-sqr mt-3"><i className="fa fa-edit"></i>  Edit profile</Link>
                    </form>
                </div>
            </div>
        </div></>
}

export default Account;