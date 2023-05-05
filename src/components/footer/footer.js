import { Link } from "react-router-dom";

function Footer() {
    return <div>
        <footer>

            <div className="footer-top ">
                <div className="container ">
                    <div className="row ">
                        <div className="col-lg-12 ">
                            <div className="footer-top-menu bb-2 ">
                                <nav>
                                    <ul>
                                        <li><Link to='/home'>HOME</Link></li>
                                        <li><a href="# ">Enable Cookies</a></li>
                                        <li><a href="# ">Privacy and Cookie Policy</a></li>
                                        <li><a href="# ">contact us</a></li>
                                        <li><a href="# ">blog</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-mid ptb-50 ">
                <div className="container ">
                    <div className="row ">
                        <div className="col-lg-8 col-md-12 ">
                            <div className="row ">
                                <div className="col-lg-4 col-md-4 col-12 ">
                                    <div className="single-footer br-2 xs-mb ">
                                        <div className="footer-title mb-20 ">
                                            <h3>Books</h3>
                                        </div>
                                        <div className="footer-mid-menu ">
                                            <ul>
                                                <li><Link to="/aboutUs">About us</Link></li>
                                                <li><a href="# ">Prices drop </a></li>
                                                <li><a href="# ">New products</a></li>
                                                <li><a href="# ">Best sales</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 ">
                                    <div className="single-footer br-2 xs-mb ">
                                        <div className="footer-title mb-20 ">
                                            <h3>Our company</h3>
                                        </div>
                                        <div className="footer-mid-menu ">
                                            <ul>
                                                <li><a href="contact.html ">Contact us</a></li>
                                                <li><Link to="signin"> Login</Link></li>
                                                <li><a href="# ">Stores</a></li>
                                                <li> <Link to="myaccount">My Account</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 ">
                                    <div className="single-footer br-2 xs-mb ">
                                        <div className="footer-title mb-20 ">
                                            <h3>Your account</h3>
                                        </div>
                                        <div className="footer-mid-menu ">
                                            <ul>
                                                <li><a href="contact.html ">Addresses</a></li>
                                                <li><a href="# ">Credit slips </a></li>
                                                <li><a href="# "> Orders</a></li>
                                                <li><a href="# ">Personal info</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 ">
                            <div className="single-footer mrg-sm ">
                                <div className="footer-title mb-20 ">
                                    <h3>Infobeans Foundation</h3>
                                </div>
                                <div className="footer-contact ">
                                    <p className="adress ">
                                        <span>Our Company</span> InfoBeans Foundation
                                    </p>
                                    <p><span>Call us now:</span> 8989580060</p>
                                    <p><span>Email:</span>techdevelopers2308@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom ">
                <div className="container ">
                    <div className="row bt-2 ">
                        <div className="col-lg-6 col-md-6 col-12 ">
                            <div className="copy-right-area ">
                                <p>&copy; 2022 <strong> TechDevelopers </strong> Mede by <a href="/" target="_blank "><strong>Tech Developers</strong></a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    </div>

}

export default Footer;