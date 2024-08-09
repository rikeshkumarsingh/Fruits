import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../lib/boots.css'
import '../lib/custom.css'

const Footer = () => {
    return (
        <>
            <div>
                <div className="container-fluid bg-footer bg-primary text-white mt-5">
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-lg-8 col-md-6">
                                <div className="row gx-5">
                                    <div className="col-lg-6 col-md-12 pt-5 mb-5">
                                        <h4 className="text-white mb-4">Get In Touch</h4>
                                        <div className="d-flex mb-2">
                                            <i className="bi bi-geo-alt text-white me-2" />
                                            <p className="text-white mb-0">Barapakar, Dulma, Madhuban, East Champaran, Bihar, India</p>
                                        </div>
                                        <div className="d-flex mb-2">
                                            <i className="bi bi-envelope-open text-white me-2" />
                                            <a className="text-white mb-0" href="mailto:contactus@biharfruits.com">contactus@biharfruits.com</a>

                                        </div>
                                        <div className="d-flex mb-2">
                                            <i className="bi bi-telephone text-white me-2" />
                                            <a className="text-white mb-0" href="tel:+918405093165">+918405093165</a>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <Link className="btn btn-secondary btn-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f" /></Link>
                                            <Link className="btn btn-secondary btn-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in" /></Link>
                                            <Link className="btn btn-secondary btn-square rounded-circle me-2" href="#"><i className="fab fa-twitter" /></Link>
                                            <Link className="btn btn-secondary btn-square rounded-circle" href="#"><i className="fab fa-instagram" /></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 pt-0 pt-lg-5 mb-5">
                                        <h4 className="text-white mb-4">Quick Links</h4>
                                        <div className="d-flex flex-column justify-content-start">
                                            <Link className="text-white mb-2" to={'/'}><i className="bi bi-arrow-right text-white me-2" />Home</Link>
                                            <Link className="text-white mb-2" to={'/about'}><i className="bi bi-arrow-right text-white me-2" />About Us</Link>
                                            <Link className="text-white mb-2"to={'/service'}><i className="bi bi-arrow-right text-white me-2" />Our Services</Link>
                                            <Link className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2" />Meet The Team</Link>
                                            <Link className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2" />Latest Blog</Link>
                                            <Link className="text-white" to={'/contect'}><i className="bi bi-arrow-right text-white me-2" />Contact Us</Link>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                        <h4 className="text-white mb-4">Popular Links</h4>
                                        <div className="d-flex flex-column justify-content-start">
                                            <Link className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2" />Home</Link>
                                            <Link className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2" />About Us</Link>
                                            <Link className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2" />Our Services</Link>
                                            <Link className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2" />Meet The Team</Link>
                                            <Link className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2" />Latest Blog</Link>
                                            <Link className="text-white" href="#"><i className="bi bi-arrow-right text-white me-2" />Contact Us</Link>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-lg-n5 ">
                                <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-secondary p-5 box">
                                    <h4 className="text-white">Newsletter</h4>
                                    <h6 className="text-white">Subscribe Our Newsletter</h6>
                                    <p>for the latest updates on our organic litchis and exclusive offers. Stay informed!</p>
                                    <form action>
                                        <div className="input-group">
                                            <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                                            <button className="btn btn-primary">Sign Up</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-dark text-white py-4">
                    <div className="container text-center">
                        <p className="mb-0">© <Link className="text-secondary fw-bold" to={'/'}>Bihar Fruits</Link>. All Rights Reserved. </p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer