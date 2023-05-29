import "./donaters.css";

import { useEffect, useState } from "react";

import axios from "axios";

import Footer from "../footer/footer";
import Headers from "../header/header";
import { apiEndPoint } from "../../webApi/webapi";
function Donetors() {
    const [donetors, setDonetors] = useState(null);
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
        <Headers />
        <div
            className="container">
            <div className="intro">
                <h2 className="text-center mt-3">TOP DONATORS </h2>
                <p className="text-center aboutDonetors mt-3">
                    Donating books is a great way to help others. You can donate books
                    through many organizations that support literacy and education. Whether
                    you’re looking for a way to help your local library
                </p>
            </div>

        </div >
        <div className="row mt-50">{/*– team section–*/}

            {donetors?.map((donetor, index) =>
                <div class="col-md-4 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src={donetor.user.photo.split('@')[1] ? apiEndPoint.DISK_STORAGE + donetor.user.photo.split('@')[1] : donetor.user.photo} />
                        </div>
                        <h3 class="title">{donetor.user.name}</h3>
                    </div>
                </div >)}
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;




        <Footer />
    </div >
}

export default Donetors;