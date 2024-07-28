import React from 'react'
import '../lib/custom.css'
import { Link } from 'react-router-dom'
import USA from '../img/USA.jpg';
import uk from '../img/UK.jfif';
import malesia from '../img/malesia.jpg';
import Dubai from '../img/Dubai.jpg';
import thailand from '../img/thailand.jpg';
import feature from '../img/feature.jpg';

const Service = () => {
    return (
        <div>
            <div className="container-fluid bg-primary py-5 bg-hero mb-5">
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h1 className="display-1 text-white mb-md-4">Services</h1>
                            <Link to={'/'} className="btn btn-primary py-md-3 px-md-5 me-3">Home</Link>
                            <Link to={'/contect'} className="btn btn-secondary py-md-3 px-md-5">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                                <h6 className="text-primary text-uppercase">Services</h6>
                                <h3 className="display-7">Our clients from the USA, UK, Dubai, Malaysia, and Thailand rave about the exceptional taste and quality of our organic litchis.</h3>
                            </div>
                            {/* <p className="mb-4">Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit. Clita erat ipsum et lorem et sit sed stet labore</p> */}
                            <Link to={"/contect"} className="btn btn-primary py-md-3 px-md-5">Contact Us</Link>
                        </div>
                        <div className="col-lg-4 col-md-6 ">
                            <div className="service-item bg-light text-center p-5 box">
                                {/* <i className="fa fa-carrot display-1 text-primary mb-3" /> */}
                                <img className="img-fluid display-1 text-primary mb-3 img2" src={USA} alt="Image" />
                                <h4>USA</h4>
                                <p className="mb-0">Our American client is delighted with our organic litchis, praising their exceptional taste and quality. Experience their satisfaction yourself!</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item bg-light text-center p-5 box">
                                {/* <i className="fa fa-apple-alt display-1 text-primary mb-3" /> */}
                                <img className="img-fluid display-1 text-primary mb-3 img2" src={uk} alt="Image" />
                                <h4>UK</h4>
                                <p className="mb-0">Our happy client from the UK loves our organic litchis, praising their exceptional taste and quality. Join them in enjoying the best!</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item bg-light text-center p-5 box">
                                {/* <i className="fa fa-dog display-1 text-primary mb-3" /> */}
                                <img className="img-fluid display-1 text-primary mb-3 img2" src={malesia} alt="Image" />
                                <h4>Malesia</h4>
                                <p className="mb-0">Our client from Malaysia is thrilled with our organic litchis, praising their exceptional taste and quality. Customer satisfaction is our pride!</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item bg-light text-center p-5 box">
                                {/* <i className="fa fa-tractor display-1 text-primary mb-3" /> */}
                                <img className="img-fluid display-1 text-primary mb-3 img2" src={Dubai} alt="Image" />
                                <h4>Dubai</h4>
                                <p className="mb-0">Our client from Dubai is delighted with our organic litchis, praising their exceptional taste and quality. Satisfaction guaranteed!</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item bg-light text-center p-5 box">
                                {/* <i className="fa fa-seedling display-1 text-primary mb-3" /> */}
                                <img className="img-fluid display-1 text-primary mb-3 img2" src={thailand} alt="Image" />
                                <h4>Thailand</h4>
                                <p className="mb-0">Our happy client from Thailand praises our organic litchis for their exceptional taste and quality. Experience their satisfaction with every bite!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-primary feature py-5 pb-lg-0 my-5">
                <div className="container py-5 pb-lg-0">
                    <div className="mx-auto text-center mb-3 pb-2" style={{ maxWidth: 500 }}>
                        <h6 className="text-uppercase text-secondary">Features</h6>
                        <h1 className="display-5 text-white">Why Choose Us!!!</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-3">
                            <div className="text-white mb-5">
                                <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                    <i className="fa fa-seedling fs-4 text-white" />
                                </div>
                                <h4 className="text-white">100% Organic</h4>
                                <p className="mb-0">Our litchis are 100% organic, grown naturally without synthetic chemicals. Enjoy the pure, fresh taste and health benefits in every bite!</p>
                            </div>
                            <div className="text-white">
                                <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                    <i className="fa fa-award fs-4 text-white" />
                                </div>
                                <h4 className="text-white">Award Winning</h4>
                                <p className="mb-0">Our award-winning litchis are celebrated for their exceptional taste and quality. Enjoy the best, grown with care and dedication on our farm!</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-block bg-white h-100 text-center p-5 pb-lg-0 box">
                                <p>Choose us for the finest organic litchis, grown with dedication and expertise on our sustainable farm. We prioritize quality and health, ensuring our litchis are free from synthetic chemicals. Experience the exceptional taste and nutritional benefits of our carefully handpicked produce. Your satisfaction is our commitment.</p>
                                {/* <img className="img-fluid" src="img/feature.png" alt /> */}
                                <img className="img-fluid" src={feature} alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="text-white mb-5">
                                <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                    <i className="fa fa-tractor fs-4 text-white" />
                                </div>
                                <h4 className="text-white">Modern Farming</h4>
                                <p className="mb-0">Embracing modern farming techniques, we ensure our organic litchis are of the highest quality. Enjoy the perfect blend of tradition and innovation in every bite!</p>
                            </div>
                            <div className="text-white">
                                <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                    <i className="fa fa-phone-alt fs-4 text-white" />
                                </div>
                                <h4 className="text-white">24/7 Support</h4>
                                <p className="mb-0">We offer 24/7 support to assist with any inquiries or needs regarding our litchis. Your satisfaction is our priority, and we're here to help anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service