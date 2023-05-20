import { useEffect, useState } from "react";
import "../donetors.css"
import axios from "axios";

import Footer from "../footer/footer";
import Headers from "../header/header";
import { apiEndPoint } from "../../webApi/webapi";
function Donetors() {
    const [donetors, setDonetors] = useState([]);
     const findDonetors = async () => {
       try {
        let response = await axios.get(apiEndPoint.DONETORS);
           setDonetors(response.data.donetors);
        }
         catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        findDonetors();
    }, [])
    return <div className="team-boxed">
        <Headers/>
        <div
            className="container">
            <div className="intro">
                <h2 className="text-center">TOP DONETORS </h2>
                <p className="text-center aboutDonetors">
                    Donating books is a great way to help others. You can donate books
                    through many organizations that support literacy and education. Whether
                    you’re looking for a way to help your local library
                </p>
            </div>
            <div className="row">
                <section className="mx-auto my-5" style={{ maxWidth: "20rem" }}>
                    <div className="card testimonial-card mt-2 mb-3">
                        <div className="card-up aqua-gradient" />
                        <div className="avatar mx-auto white circle">
                            <img
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                                className="rounded-circle img-fluid"
                                alt="woman avatar"
                            />
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-title font-weight-bold">Martha Smith</h4>
                            <hr />
                            <p>
                                <i className="fas fa-quote-left" /> Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Eos, adipisci
                            </p>
                        </div>
                    </div>
                </section>
                <section className="mx-auto my-5" style={{ maxWidth: "20rem" }}>
                    <div className="card testimonial-card mt-2 mb-3">
                        <div className="card-up aqua-gradient" />
                        <div className="avatar mx-auto white circle">
                            <img
                                src="https://www.shutterstock.com/image-photo/smiling-african-american-office-employee-260nw-1032686038.jpg"
                                className="rounded-circle img-fluid"
                                alt="woman avatar"
                            />
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-title font-weight-bold">Martha Smith</h4>
                            <hr />
                            <p>
                                <i className="fas fa-quote-left" /> Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Eos, adipisci
                            </p>
                        </div>
                    </div>
        </section>
        <section className="mx-auto my-5" style={{ maxWidth: "20rem" }}>
            <div className="card testimonial-card mt-2 mb-3">
                <div className="card-up aqua-gradient" />
                <div className="avatar mx-auto white circle">
                    <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                        className="rounded-circle img-fluid"
                        alt="woman avatar"
                    />
                </div>
                <div className="card-body text-center">
                    <h4 className="card-title font-weight-bold">Martha Smith</h4>
                    <hr />
                    <p>
                        <i className="fas fa-quote-left" /> Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Eos, adipisci
                    </p>
                </div>
            </div>
                </section >
            </div >
        </div >
       <Footer/>
    </div >
}

export default Donetors;